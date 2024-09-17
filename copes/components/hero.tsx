import Image from 'next/image'
import { Button } from "@/components/ui/button"
import MedicalForm from './medical-form'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Health, Our Priority
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                We're here to listen to your concerns and provide the care you need. Fill out our quick form to get started.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Learn More</Button>
              <Button variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <MedicalForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}