import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Shield, Clock, Heart, Users } from 'lucide-react'

const services = [
  { title: "Bedah Anak Umum", description: "Perawatan bedah komprehensif untuk anak-anak segala usia.", icon: CheckCircle2 },
  { title: "Bedah Urologi Anak", description: "Prosedur koreksi dan penyembuhan saluran kencing khusus anak.", icon: CheckCircle2 },
  { title: "Prosedur Minimal Invasif", description: "Teknik canggih untuk pemulihan lebih cepat dan bekas luka minimal.", icon: Shield },
  { title: "Bedah Darurat", description: "Perawatan bedah darurat 24/7 untuk kasus anak yang mendesak.", icon: Clock },
  { title: "Bedah Neonatal", description: "Perawatan khusus untuk bayi baru lahir yang memerlukan intervensi bedah.", icon: Heart },
  { title: "Bedah Onkologi Anak", description: "Perawatan bedah ahli untuk kanker pada anak.", icon: Users },
  { title: "Bedah Hepatobilier Anak", description: "Prosedur koreksi dan penyembuhan saluran empedu khusus anak.", icon: CheckCircle2 },
  { title: "Bedah Rekonstruksi", description: "Prosedur korektif untuk meningkatkan fungsi dan penampilan.", icon: CheckCircle2 },
]

export default function Services() {
  return (
    <section id="layanan" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-600">Layanan Kami</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
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
  )
}