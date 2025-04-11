import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { VideoCard } from "@/components/video-card"
import { Button } from "@/components/ui/button"
import { getVideosByCategory } from "@/data/videos"

export const metadata = {
  title: "Player Profiles | Joga Bonito FC",
  description: "Get to know our players through exclusive profile videos",
}

export default function PlayerProfilesPage() {
  // Get all player profile videos from our data
  const profileVideos = getVideosByCategory("profiles")

  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Player Profiles</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profileVideos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            duration={video.duration}
            views={video.views}
            date={video.date}
            youtubeId={video.youtubeId}
            thumbnail={video.thumbnail}
            playerImage={video.playerImage}
            playerName={video.playerName}
            playerPosition={video.playerPosition}
            aspectRatio={video.aspectRatio}
          />
        ))}
      </div>
    </div>
  )
}
