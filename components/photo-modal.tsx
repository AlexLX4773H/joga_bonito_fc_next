"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Download } from "lucide-react"

interface Photo {
  id: string
  src: string
  alt: string
  category: string
  caption?: string
}

interface PhotoModalProps {
  photo: Photo
  isOpen: boolean
  onClose: () => void
  adjacentPhotos: {
    nextPhoto: Photo
    prevPhoto: Photo
  }
  onNavigate: (photo: Photo) => void
}

export function PhotoModal({ photo, isOpen, onClose, adjacentPhotos, onNavigate }: PhotoModalProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageContainerRef = useRef<HTMLDivElement>(null)

  // Reset zoom and position when photo changes
  useEffect(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [photo])

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 4))
  }

  const handleZoomOut = () => {
    setScale((prev) => {
      const newScale = Math.max(prev - 0.5, 1)
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 })
      }
      return newScale
    })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = photo.src
    link.download = `joga-bonito-${photo.id}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95 border-club-gold">
        <div className="relative w-full h-full">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>

          {/* Zoom controls */}
          <div className="absolute top-2 left-2 z-50 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
              onClick={handleZoomIn}
            >
              <ZoomIn className="h-4 w-4" />
              <span className="sr-only">Zoom in</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
              onClick={handleZoomOut}
            >
              <ZoomOut className="h-4 w-4" />
              <span className="sr-only">Zoom out</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </Button>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
            onClick={() => onNavigate(adjacentPhotos.prevPhoto)}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous photo</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
            onClick={() => onNavigate(adjacentPhotos.nextPhoto)}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next photo</span>
          </Button>

          {/* Image container */}
          <div
            ref={imageContainerRef}
            className="w-full h-[calc(100vh-10rem)] flex items-center justify-center overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: scale > 1 ? "grab" : "default" }}
          >
            <div
              className="relative transition-transform duration-100"
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transformOrigin: "center",
              }}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={1200}
                height={800}
                className="max-h-[calc(100vh-10rem)] w-auto object-contain"
                unoptimized={photo.src.includes("lxsoft.site")}
              />
            </div>
          </div>

          {/* Caption */}
          {photo.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-white">
              <p>{photo.caption}</p>
              <p className="text-sm text-white/70 mt-1">Category: {photo.category}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
