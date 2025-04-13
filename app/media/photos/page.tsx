import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhotoGallery } from "@/components/photo-gallery"

export const metadata = {
  title: "Photo Gallery | Joga Bonito FC",
  description: "Official match and training photos from Joga Bonito FC",
}

export default function PhotosPage() {
  // Sample gallery photos - in a real app, these would come from a database or CMS
  const galleryPhotos = [
    {
      id: "1",
      src: "https://lxsoft.site/Joga_photos/faris_varun.jpg",
      alt: "Managers Biggest Fan",
      category: "match",
      caption: "Managers Biggest Fan",
    },
    {
      id: "2",
      src: "https://lxsoft.site/Joga_photos/joga_full_squad.jpg",
      alt: "Joga Bonito Full Squad",
      category: "training",
      caption: "Joga Bonito Full Squad",
    },
    {
      id: "3",
      src: "https://lxsoft.site/Joga_photos/joga_treat_1.jpg",
      alt: "Team celebration",
      category: "fans",
      caption: "Team celebrating",
    },
    {
      id: "4",
      src: "https://lxsoft.site/Joga_photos/joga_treat_2.jpg",
      alt: "Fan celebration",
      category: "fans",
      caption: "Our amazing Team celebration",
    },
    {
      id: "5",
      src: "https://lxsoft.site/Joga_photos/Faris_Thatu_2.jpg",
      alt: "Manager Mode",
      category: "venue",
      caption: "Manager Mode",
    },
    {
      id: "6",
      src: "https://lxsoft.site/Joga_photos/Faris_Thatu.jpg",
      alt: "Player portrait",
      category: "portraits",
      caption: "Official portrait of our Late Manager",
    },
    {
      id: "7",
      src: "https://lxsoft.site/Joga_photos/background_stadium.jpg",
      alt: "Stadium atmosphere",
      category: "venue",
      caption: "The electric atmosphere at our stadium",
    },
    {
      id: "8",
      src: "https://lxsoft.site/Joga_photos/Joga_shirt.jpg",
      alt: "Home kit",
      category: "kit",
      caption: "Our official home kit for the 2024/25 season",
    },
    {
      id: "9",
      src: "https://lxsoft.site/Joga_photos/siva_joga.jpg",
      alt: "Siva in action",
      category: "players",
      caption: "Siva Sankaran showing his skills",
    },
    {
      id: "10",
      src: "https://lxsoft.site/Joga_photos/jojo_joga.jpg",
      alt: "Jojo in action",
      category: "players",
      caption: "Jojo Joyel Smouldering",
    },
    {
      id: "11",
      src: "https://lxsoft.site/Joga_photos/Alex_Joga.jpg",
      alt: "Alex making a save",
      category: "players",
      caption: "Alex ordering Lime",
    },
    {
      id: "12",
      src: "https://lxsoft.site/Joga_photos/Ryan_joga.jpg",
      alt: "Ryan in action",
      category: "players",
      caption: "Ryan Transfer Pic",
    },
    {
      id: "13",
      src: "https://lxsoft.site/Joga_photos/joga_concept.jpg",
      alt: "Jersey Concept 1",
      category: "kit",
      caption: "Jersey Concept 1",
    },
    {
      id: "14",
      src: "https://lxsoft.site/Joga_photos/joga_concept_a.jpg",
      alt: "Jersey Concept A",
      category: "kit",
      caption: "Jersey Concept A",
    },
    {
      id: "15",
      src: "https://lxsoft.site/Joga_photos/joga_concept_b.jpg",
      alt: "Jersey Concept B",
      category: "kit",
      caption: "Jersey Concept B",
    },
  ]

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

      <PhotoGallery photos={galleryPhotos} />
    </div>
  )
}
