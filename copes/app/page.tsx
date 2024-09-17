import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Clock, MapPin, Phone, Mail, CheckCircle2, Heart, Shield, Users, BookOpen, FileText, Menu, Home, Bus, MessageCircle, Video } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link className="flex items-center space-x-2" href="#">
              <Heart className="h-6 w-6 text-blue-500" />
              <span className="inline-block font-bold text-blue-700">Tim Bedah Anak RSUP Dr. Kariadi</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline underline-offset-4" href="#layanan">
                Layanan
              </Link>
              <Link className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline underline-offset-4" href="#tentang">
                Tentang Kami
              </Link>
              <Link className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline underline-offset-4" href="#tim">
                Tim Kami
              </Link>
              <Link className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline underline-offset-4" href="#sumber">
                Sumber Daya
              </Link>
              <Link className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline underline-offset-4" href="#blog">
                Blog
              </Link>
              <Link className="text-sm font-medium text-blue-700 hover:text-blue-900 hover:underline underline-offset-4" href="#kontak">
                Kontak
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
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
                  <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300">Buat Janji Konsultasi</Button>
                  <Button variant="outline" size="lg" className="bg-white text-blue-500 hover:bg-blue-50">Pelajari Lebih Lanjut</Button>
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
        <section id="layanan" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Layanan Kami</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { title: "Bedah Anak Umum", description: "Perawatan bedah komprehensif untuk anak-anak segala usia.", icon: CheckCircle2 },
                { title: "Bedah Urologi Anak", description: "Prosedur koreksi dan penyembuhan saluran kencing khusus anak.", icon: CheckCircle2 },
                { title: "Prosedur Minimal Invasif", description: "Teknik canggih untuk pemulihan lebih cepat dan bekas luka minimal.", icon: Shield },
                { title: "Bedah Darurat", description: "Perawatan bedah darurat 24/7 untuk kasus anak yang mendesak.", icon: Clock },
                { title: "Bedah Neonatal", description: "Perawatan khusus untuk bayi baru lahir yang memerlukan intervensi bedah.", icon: Heart },
                { title: "Bedah Onkologi Anak", description: "Perawatan bedah ahli untuk kanker pada anak.", icon: Users },
                { title: "Bedah Hepatobilier Anak", description: "Prosedur koreksi dan penyembuhan saluran empedu khusus anak.", icon: CheckCircle2 },
                { title: "Bedah Rekonstruksi", description: "Prosedur korektif untuk meningkatkan fungsi dan penampilan.", icon: CheckCircle2 },
              ].map((service, index) => (
                <Card key={index} className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <service.icon className="h-12 w-12 text-blue-500 mb-2" />
                    <h3 className="text-xl font-bold text-blue-700">{service.title}</h3>
                    <p className="text-blue-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="tentang" className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">Tentang Tim Bedah Anak RSUP Dr. Kariadi</h2>
                  <p className="max-w-[600px] text-blue-600 md:text-xl">
                    Dengan pengalaman lebih dari 30 tahun, Tim Bedah Anak RSUP Dr. Kariadi telah menjadi pionir dalam perawatan bedah anak di Indonesia. Tim kami terdiri dari ahli bedah bersertifikat dan perawat anak khusus yang berdedikasi untuk memberikan perawatan berkualitas tinggi dalam lingkungan yang ramah anak.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <span className="text-blue-700">Bersertifikat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-blue-700">Pendekatan Berpusat pada Anak</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-blue-500" />
                    <span className="text-blue-700">Perawatan Penuh Kasih Sayang</span>
                  </div>
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
        <section id="tim" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700">Tim Ahli Kami</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { name: "Dr. dr. Edwin Basyar, M.Kes., Sp.B, Sp.BA", role: "Kepala Tim Bedah Anak" },
                { name: "dr. Avriana Pety Wardani, Sp.BA", role: "Spesialis Bedah Anak" },
                { name: "dr. Rudiyuwono Raharjo, M.Si., Sp.B, Sp.BA", role: "Spesialis Bedah Anak" },
                { name: "dr. Agoes Wibisono, Sp.BA", role: "Spesialis Bedah Anak" },
                { name: "dr. Diaz Adi Pradana, Sp.BA", role: "Spesialis Bedah Anak" },
              ].map((member, index) => (
                <Card key={index} className="bg-white border-blue-200">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <Image
                        alt={member.name}
                        className="object-cover w-full h-full"
                        height="128"
                        src="/edwin.png"
                        width="128"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-blue-700">{member.name}</h3>
                    <p className="text-blue-600">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="akomodasi" className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700">Akomodasi dan Transportasi</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Home className="h-10 w-10 text-blue-500" />
                    <h3 className="text-2xl font-bold text-blue-700">Rumah Singgah</h3>
                  </div>
                  <p className="text-blue-600 mb-4">
                    Kami menyediakan akomodasi gratis melalui program Rumah Singgah bagi pasien dan keluarga yang berasal dari luar Semarang. Fasilitas ini dirancang untuk memberikan kenyamanan selama masa perawatan di RSUP Dr. Kariadi.
                  </p>
                  <ul className="list-disc list-inside text-blue-600 mb-4">
                    <li>Kamar tidur nyaman</li>
                    <li>Dapur bersama</li>
                    <li>Area bermain anak</li>
                    <li>Layanan konseling</li>
                  </ul>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">Informasi Lebih Lanjut</Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Bus className="h-10 w-10 text-blue-500" />
                    <h3 className="text-2xl font-bold text-blue-700">Layanan Transportasi</h3>
                  </div>
                  <p className="text-blue-600 mb-4">
                    Kami menyediakan layanan transportasi gratis untuk memudahkan akses ke RSUP Dr. Kariadi bagi pasien dari luar Semarang. Tim kami siap membantu mengatur perjalanan Anda dari dan ke rumah sakit.
                  </p>
                  <ul className="list-disc list-inside text-blue-600 mb-4">
                    <li>Penjemputan dari bandara/stasiun</li>
                    <li>Antar-jemput ke Rumah Sin
ggah</li>
                    <li>Transportasi ke rumah sakit</li>
                    <li>Layanan ambulans (jika diperlukan)</li>
                  </ul>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">Hubungi Koordinator Transportasi</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="komunikasi" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700">Komunikasi dan Telemedicine</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <MessageCircle className="h-10 w-10 text-blue-500" />
                    <h3 className="text-2xl font-bold text-blue-700">WhatsApp Channel</h3>
                  </div>
                  <p className="text-blue-600 mb-4">
                    Bergabunglah dengan channel WhatsApp kami untuk mendapatkan informasi terbaru, tips kesehatan, dan pengumuman penting dari Tim Bedah Anak RSUP Dr. Kariadi.
                  </p>
                  <Button className="bg-green-500 text-white hover:bg-green-600">Gabung Channel WhatsApp</Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <MessageCircle className="h-10 w-10 text-blue-500" />
                    <h3 className="text-2xl font-bold text-blue-700">Virtual Concierge</h3>
                  </div>
                  <p className="text-blue-600 mb-4">
                    Layanan Virtual Concierge kami siap membantu Anda melalui WhatsApp untuk menjawab pertanyaan, membuat janji, dan memberikan panduan tentang layanan kami.
                  </p>
                  <Button className="bg-green-500 text-white hover:bg-green-600">Hubungi Virtual Concierge</Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Video className="h-10 w-10 text-blue-500" />
                    <h3 className="text-2xl font-bold text-blue-700">Telemedicine</h3>
                  </div>
                  <p className="text-blue-600 mb-4">
                    Konsultasi dengan tim ahli kami melalui layanan telemedicine. Dapatkan saran medis dan tindak lanjut tanpa perlu datang ke rumah sakit.
                  </p>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">Jadwalkan Konsultasi Online</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="sumber" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700">Sumber Daya Pasien</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Persiapan Sebelum Operasi</h3>
                  <p className="text-blue-600 mb-4">Panduan lengkap untuk mempersiapkan anak Anda menghadapi operasi.</p>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">Baca Selengkapnya</Button>
                </CardContent>
              </Card>
              <Card className="bg-white border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-700">Perawatan Pasca Operasi</h3>
                  <p className="text-blue-600 mb-4">Tips dan panduan untuk perawatan optimal setelah operasi.</p>
                  <Button className="bg-blue-500 text-white hover:bg-blue-600">Baca Selengkapnya</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-700">Blog Bedah Anak</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { title: "Perkembangan Terbaru dalam Bedah Laparoskopi Anak", date: "5 Juni 2023" },
                { title: "Mengenal Lebih Jauh tentang Atresia Bilier", date: "12 Mei 2023" },
                { title: "Peran Orang Tua dalam Pemulihan Pasca Operasi Anak", date: "20 April 2023" },
              ].map((post, index) => (
                <Card key={index} className="bg-white border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-700">{post.title}</h3>
                    <p className="text-blue-600 mb-4">{post.date}</p>
                    <Button className="bg-blue-500 text-white hover:bg-blue-600">Baca Artikel</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="kontak" className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-700">Hubungi Kami</h2>
                  <p className="max-w-[600px] text-blue-600 md:text-xl">
                    Kami siap menjawab pertanyaan Anda dan memberikan perawatan yang dibutuhkan anak Anda. Jangan ragu untuk menghubungi kami kapan saja.
                  </p>
                </div>
                <div className="space-y-2 text-blue-700">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <span>RSUP Dr. Kariadi, Jl. Dr. Sutomo No.16, Semarang</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-blue-500" />
                    <span>(024) 8413993</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span>bedahanak@rskariadi.co.id</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-5 w-5 text-blue-500" />
                    <span>Senin - Jumat: 08.00 - 16.00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <span>Layanan Darurat 24/7</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <form className="space-y-4">
                  <Input placeholder="Nama Anda" className="bg-white border-blue-200" />
                  <Input placeholder="Nomor HP (Whatsapp)" className="bg-white border-blue-200" />
                  <Input type="email" placeholder="Email Anda" className="bg-white border-blue-200" />
                  <Input placeholder="Subjek" className="bg-white border-blue-200" />
                  <Textarea placeholder="Pesan Anda" className="bg-white border-blue-200" />
                  <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">Kirim Pesan</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-500 text-white">
        <p className="text-xs">© 2023 Tim Bedah Anak RSUP Dr. Kariadi. Hak Cipta Dilindungi.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Syarat Layanan
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Kebijakan Privasi
          </Link>
        </nav>
      </footer>
    </div>
  )
}