import Link from 'next/link'
import { Heart } from 'lucide-react'
import { MainNav } from "@/components/main-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link className="flex items-center space-x-2" href="#">
            <Heart className="h-6 w-6 text-blue-500" />
            <span className="inline-block font-bold text-blue-700">Tim Bedah Anak RSUP Dr. Kariadi</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <MainNav />
        </div>
      </div>
    </header>
  )
}