import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Hero() {
  const whatsappNumber = "6281703106180"
  const whatsappMessage = encodeURIComponent("Halo, saya ingin membuat janji konsultasi.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-400 via-blue-300 to-green-200">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Anak Sehat, Orang Tua Bahagia
              </h1>
              <p className="max-w-[600px] text-zinc-100 md:text-xl">
                Tim Bedah Anak RSUP Dr. Kariadi memberikan perawatan bedah anak dengan penuh kasih sayang dan keahlian tinggi untuk membuat anak anda sehat kembali. Kesehatan dan kenyamanan anak Anda adalah prioritas utama kami.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
                  Buat Janji Konsultasi via WhatsApp
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-white text-blue-500 hover:bg-blue-50">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Tim Bedah Anak RSUP Dr. Kariadi"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="550"
              src="/hero.jpg"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  )
}