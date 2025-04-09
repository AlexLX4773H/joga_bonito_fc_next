import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { VideoCard } from "@/components/video-card"
import { Button } from "@/components/ui/button"

export default function HighlightsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Match Highlights</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <VideoCard
          title="Amazing Free Kick Goal vs. Rivals FC"
          duration="2:45"
          views="124K"
          date="3 days ago"
          youtubeId="8Z0sbekoQL4" // Roberto Carlos free kick
        />
        <VideoCard
          title="Match Highlights: Joga Bonito vs. United"
          duration="8:12"
          views="87K"
          date="1 week ago"
          youtubeId="fW_a3qs_m3M" // Brazil vs France 2006
        />
        <VideoCard
          title="Top 10 Goals of the Season"
          duration="5:30"
          views="203K"
          date="2 weeks ago"
          youtubeId="vl5boGDZUGE" // Ronaldinho skills
        />
        <VideoCard
          title="Last Minute Winner in Derby Match"
          duration="3:15"
          views="92K"
          date="3 weeks ago"
          youtubeId="6WU1LZ_9Ld4" // Last minute goals
        />
        <VideoCard
          title="Goalkeeper's Incredible Double Save"
          duration="1:45"
          views="56K"
          date="1 month ago"
          youtubeId="yGqfo8nfJnM" // Goalkeeper saves
        />
        <VideoCard
          title="Youth Academy Talent Showcase"
          duration="6:20"
          views="43K"
          date="1 month ago"
          youtubeId="DYMDkx1qHkk" // Young talents
        />
        <VideoCard
          title="Season Opening Match Highlights"
          duration="9:30"
          views="112K"
          date="2 months ago"
          youtubeId="ztFHI3_pmIg" // Match highlights
        />
        <VideoCard
          title="Captain's Hat-trick Performance"
          duration="4:15"
          views="78K"
          date="2 months ago"
          youtubeId="OYa3V7GIizI" // Hat-trick compilation
        />
        <VideoCard
          title="International Friendly Highlights"
          duration="7:45"
          views="65K"
          date="3 months ago"
          youtubeId="TG9NQrp6uWQ" // International match
        />
      </div>
    </div>
  )
}
