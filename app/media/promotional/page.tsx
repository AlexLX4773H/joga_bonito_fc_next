import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PromotionalVideo } from "@/components/promotional-video"

export default function PromotionalVideosPage() {
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
        <PromotionalVideo
          title="New Season Kit Launch"
          description="Unveiling our stunning new home and away kits for the upcoming season"
          youtubeId="Oj6L6Ibv8VI" // Nike football ad
        />
        <PromotionalVideo
          title="Training Facilities Tour"
          description="Explore our state-of-the-art training complex where champions are made"
          youtubeId="YePFGhCC7ro" // Training facility tour
        />
        <PromotionalVideo
          title="Community Outreach Program"
          description="See how our players are making a difference in the local community"
          youtubeId="3f5nIq9sPgc" // Community outreach
        />
        <PromotionalVideo
          title="Season Ticket Announcement"
          description="Be part of our journey with exclusive season ticket benefits"
          youtubeId="QH2-TGUlwu4" // Season ticket promo
        />
      </div>
    </div>
  )
}
