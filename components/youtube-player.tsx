"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { calculateAspectRatioPadding, isPortraitAspectRatio } from "@/lib/aspect-ratio"

interface YouTubePlayerProps {
  videoId: string
  isOpen: boolean
  onClose: () => void
  title?: string
  aspectRatio?: string
}

export function YouTubePlayer({ videoId, isOpen, onClose, title, aspectRatio = "16:9" }: YouTubePlayerProps) {
  const [isMounted, setIsMounted] = useState(false)
  const paddingTop = calculateAspectRatioPadding(aspectRatio)
  const isPortrait = isPortraitAspectRatio(aspectRatio)

  // Prevent hydration errors by only rendering on the client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={`sm:max-w-[800px] p-0 overflow-hidden bg-black ${isPortrait ? "max-h-[90vh] sm:max-w-[450px]" : ""}`}
      >
        <div className="relative w-full overflow-hidden" style={{ paddingTop }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title || "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <DialogClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
