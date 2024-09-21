'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MedicalForm() {
  const [complaint, setComplaint] = useState('')
  const [duration, setDuration] = useState('')
  const [location, setLocation] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (complaint && duration && location) {
      setIsSubmitted(true)
      // Here you would typically send the data to your backend
      console.log({ complaint, duration, location })
    }
  }

  const inputClasses = "inline-block px-0 py-0 text-2xl h-auto bg-transparent border-0 border-b-2 border-primary focus:border-primary-focus rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-background to-secondary rounded-xl shadow-2xl">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Medical Complaint Form
      </motion.h1>
      {!isSubmitted ? (
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4">
            <p className="text-2xl leading-relaxed text-foreground">
              Anak saya mempunyai keluhan{' '}
              <Input
                type="text"
                value={complaint}
                onChange={(e) => setComplaint(e.target.value)}
                className={`${inputClasses} w-40`}
                aria-label="Complaint"
                required
              />{' '}
              semenjak{' '}
              <Input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className={`${inputClasses} w-20`}
                aria-label="Duration in days"
                min="0"
                required
              />{' '}
              hari, saya di{' '}
              <Input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`${inputClasses} w-40`}
                aria-label="Location"
                required
              />
              .
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button type="submit" className="w-full text-lg py-6">Submit</Button>
          </motion.div>
        </motion.form>
      ) : (
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-2xl text-foreground">Thank you for your submission. Here's what you told us:</p>
          <p className="text-2xl leading-relaxed text-primary">
            Anak saya mempunyai keluhan <span className="font-bold underline text-2xl">{complaint}</span> semenjak{' '}
            <span className="font-bold underline">{duration}</span> hari, saya di <span className="font-bold underline">{location}</span>.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={() => setIsSubmitted(false)} className="w-full text-lg py-6">Submit Another Response</Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}