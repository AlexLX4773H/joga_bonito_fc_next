"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PhotoModal } from "@/components/photo-modal"
import type { PhotoData } from "@/data/photos"

interface PhotoGalleryProps {
  photos: PhotoData[]
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Get unique categories from photos
  const categories = ["all", ...Array.from(new Set(photos.map((photo) => photo.category)))]

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
      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="bg-club-black/50 border border-club-gold mb-6 w-full max-w-md mx-auto flex flex-wrap h-auto py-1">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="flex-1 data-[state=active]:bg-club-red data-[state=active]:text-white capitalize"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos
                .filter((photo) => category === "all" || photo.category === category)
                .map((photo) => (
                  <Card
                    key={photo.id}
                    className="overflow-hidden cursor-pointer border-club-gold hover:shadow-md transition-all"
                    onClick={() => openPhotoModal(photo)}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <Image
                          src={photo.src || "/placeholder.svg"}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          unoptimized={photo.src.includes("lxsoft.site")}
                        />
                      </div>
                      {photo.caption && (
                        <div className="p-3 bg-club-black text-white">
                          <p className="text-sm truncate">{photo.caption}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

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
