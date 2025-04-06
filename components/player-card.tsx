"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PlayerCardProps {
  name: string
  position: string
  age: number | string
  nationality: string
  previousClub: string
  transferFee: string
  images: string[] // Changed from single image to array of images
  number?: number | string
  newClub?: string
  rumored?: boolean
}

export function PlayerCard({
  name,
  position,
  age,
  nationality,
  previousClub,
  transferFee,
  images,
  number,
  newClub,
  rumored = false,
}: PlayerCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Handle single image case
  const imageArray = Array.isArray(images) ? images : [images]
  const currentImage = imageArray[currentImageIndex]

  // Check if it's Siva's image to apply special styling
  const isSivaImage = currentImage.includes("FJJIU.jpeg")
  // Check if it's Ais's image to apply special styling
  const isAisImage = currentImage.includes("Ais_joga.jpg") || currentImage.includes("gwSjN.jpeg")
  // Check if image is from lxsoft.site domain
  const isLxsoftImage = currentImage.includes("lxsoft.site")

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageArray.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md border-club-gold bg-white text-black dark:bg-club-black dark:text-white">
      <div
        className={`relative ${isSivaImage || isAisImage ? "aspect-[3/4]" : "aspect-[3/4]"} w-full overflow-hidden bg-muted`}
      >
        <Image
          src={currentImage || "/placeholder.svg"}
          alt={`${name} - image ${currentImageIndex + 1}`}
          fill
          className={`object-cover transition-transform duration-300 hover:scale-105 ${isSivaImage || isAisImage ? "object-top" : ""}`}
          unoptimized={isLxsoftImage}
        />

        {/* Image navigation buttons - only show if multiple images */}
        {imageArray.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white border-club-gold hover:bg-club-gold hover:text-black z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white border-club-gold hover:bg-club-gold hover:text-black z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>

            {/* Image indicator dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
              {imageArray.map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full ${index === currentImageIndex ? "bg-club-gold" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}

        {number && (
          <div className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-club-red text-white font-bold shadow-md z-20">
            {number}
          </div>
        )}
        {rumored && (
          <Badge variant="secondary" className="absolute right-2 top-2 bg-club-gold text-black z-20">
            Rumored
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold">{name}</h3>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{position}</span>
          <span className="text-sm text-muted-foreground">{age} years</span>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Nationality:</span>
            <span>{nationality}</span>
          </div>
          {previousClub && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">{newClub ? "From:" : "Previous Club:"}</span>
              <span>{previousClub}</span>
            </div>
          )}
          {newClub && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">To:</span>
              <span>{newClub}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transfer Fee:</span>
            <span className="font-medium">{transferFee}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4 border-club-gold/30">
        <a
          href="#"
          className="flex w-full items-center justify-center gap-2 text-sm font-medium text-club-red hover:underline"
        >
          Player Profile
          <ArrowRight className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  )
}

