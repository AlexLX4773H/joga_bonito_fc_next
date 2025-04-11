import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PromotionalVideo } from "@/components/promotional-video"
import { getVideosByCategory } from "@/data/videos"

export const metadata = {
  title: "Promotional Videos | Joga Bonito FC",
  description: "Club announcements and special features",
}

export default function PromotionalVideosPage() {
  // Get all promotional videos from our data
  const promotionalVideos = getVideosByCategory("promotional")

  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Promotional Videos</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {promotionalVideos.map((video) => (
          <PromotionalVideo
            key={video.id}
            title={video.title}
            description={video.title}
            youtubeId={video.youtubeId}
            thumbnail={video.thumbnail}
            aspectRatio={video.aspectRatio}
          />
        ))}
      </div>
    </div>
  )
}
