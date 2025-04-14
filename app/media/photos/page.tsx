import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhotoGallery } from "@/components/photo-gallery"
import { photos } from "@/data/photos"

export const metadata = {
  title: "Photo Gallery | Joga Bonito FC",
  description: "Official match and training photos from Joga Bonito FC",
}

export default function PhotosPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Photo Gallery</h1>
      </div>

      <div className="mb-8">
        <p className="text-muted-foreground">
          Browse through our collection of official match photos, training sessions, and special moments from Joga
          Bonito FC. Click on any image to enlarge and explore in detail.
        </p>
      </div>

      <PhotoGallery photos={photos} />
    </div>
  )
}
