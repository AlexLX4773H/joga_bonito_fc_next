"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { YouTubePlayer } from "@/components/youtube-player"

interface PromotionalVideoProps {
  title: string
  description: string
  thumbnail?: string
  youtubeId: string
}

export function PromotionalVideo({ title, description, thumbnail, youtubeId }: PromotionalVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Use YouTube thumbnail if no custom thumbnail is provided
  const videoThumbnail = thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-xl cursor-pointer border-2 border-club-gold"
        onClick={() => setIsPlaying(true)}
      >
        <div className="absolute inset-0 z-10 bg-black/60 transition-opacity group-hover:bg-black/40" />
        <Image
          src={videoThumbnail || "/placeholder.svg"}
          alt={title}
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-white">
          <div className="rounded-full bg-club-red p-4 backdrop-blur-sm">
            <Play className="h-8 w-8" />
          </div>
          <h3 className="mt-4 text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-white/80">{description}</p>
        </div>
      </div>

      <YouTubePlayer videoId={youtubeId} isOpen={isPlaying} onClose={() => setIsPlaying(false)} title={title} />
    </>
  )
}
