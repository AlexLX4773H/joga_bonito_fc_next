"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { PhotoModal } from "@/components/photo-modal"
import type { PhotoData } from "@/data/photos"

interface FeaturedPhotosProps {
  photos: PhotoData[]
}

export function FeaturedPhotos({ photos }: FeaturedPhotosProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openPhotoModal = (photo: PhotoData) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }

  const closePhotoModal = () => {
    setIsModalOpen(false)
  }

  // Get next and previous photos for navigation
  const getAdjacentPhotos = (currentPhoto: PhotoData) => {
    const currentIndex = photos.findIndex((photo) => photo.id === currentPhoto.id)
    const nextPhoto = currentIndex < photos.length - 1 ? photos[currentIndex + 1] : photos[0]
    const prevPhoto = currentIndex > 0 ? photos[currentIndex - 1] : photos[photos.length - 1]
    return { nextPhoto, prevPhoto }
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {photos.map((photo, index) => (
          <Card
            key={photo.id}
            className={`overflow-hidden cursor-pointer border-club-gold hover:shadow-md transition-all ${
              index === 0 ? "col-span-2 row-span-2" : ""
            }`}
            onClick={() => openPhotoModal(photo)}
          >
            <CardContent className="p-0">
              <div className={`relative ${index === 0 ? "aspect-square" : "aspect-square"}`}>
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  unoptimized={photo.src.includes("lxsoft.site")}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="gap-2 border-club-gold hover:bg-club-gold hover:text-black" asChild>
          <Link href="/media/photos">
            View All Photos
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          isOpen={isModalOpen}
          onClose={closePhotoModal}
          adjacentPhotos={getAdjacentPhotos(selectedPhoto)}
          onNavigate={(photo) => setSelectedPhoto(photo)}
        />
      )}
    </>
  )
}
