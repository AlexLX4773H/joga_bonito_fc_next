"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Clock, Eye, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { YouTubePlayer } from "@/components/youtube-player"

interface VideoCardProps {
  title: string
  duration: string
  views: string
  date: string
  youtubeId: string
  thumbnail?: string
  playerImage?: string
  playerName?: string
  playerPosition?: string
}

export function VideoCard({
  title,
  duration,
  views,
  date,
  youtubeId,
  thumbnail,
  playerImage,
  playerName,
  playerPosition,
}: VideoCardProps) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)

  // Use YouTube thumbnail if no custom thumbnail is provided
  const videoThumbnail = thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

  // Check if this is a player profile video
  const isPlayerProfile = !!playerImage

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-md border-club-gold">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={videoThumbnail || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30" />

          {isPlayerProfile && (
            <div className="absolute top-2 left-2 flex items-center gap-2 bg-black/60 rounded-full p-1 pr-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-club-gold">
                <Image src={playerImage || "/placeholder.svg"} alt={playerName || ""} fill className="object-cover" />
              </div>
              <div className="text-white text-xs">
                <div className="font-bold">{playerName}</div>
                <div className="text-white/80 text-[10px]">{playerPosition}</div>
              </div>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="absolute inset-0 flex h-full w-full items-center justify-center rounded-none bg-transparent hover:bg-black/40"
            onClick={() => setIsPlayerOpen(true)}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-club-red text-white shadow-lg transition-transform hover:scale-110">
              <Play className="h-6 w-6" />
            </div>
          </Button>
          <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs text-white">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold">{title}</h3>
          <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{views} views</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <YouTubePlayer videoId={youtubeId} isOpen={isPlayerOpen} onClose={() => setIsPlayerOpen(false)} title={title} />
    </>
  )
}
