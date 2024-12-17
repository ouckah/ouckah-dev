'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import AidanPage from '@/components/pages/aidan'
import OuckahPage from '@/components/pages/ouckah'
import { Section } from '@/components/section'

export default function Home() {
  const [selectedName, setSelectedName] = useState<'aidan' | 'ouckah' | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedName && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selectedName])

  return (
    <div className="min-h-screen flex flex-col">
      <Section fullHeight className="flex flex-col items-center justify-center">
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-bold mb-12"
        >
          My name is
        </motion.h1>
        <div className="flex flex-col gap-4 w-full max-w-md">
          <NameSelector name="aidan" selectedName={selectedName} setSelectedName={setSelectedName} />
          <NameSelector name="ouckah" selectedName={selectedName} setSelectedName={setSelectedName} />
        </div>
      </Section>
      {selectedName && (
        <div ref={contentRef}>
          {selectedName === 'aidan' ? <AidanPage /> : <OuckahPage />}
        </div>
      )}
    </div>
  )
}

interface NameSelectorProps {
  name: 'aidan' | 'ouckah'
  selectedName: 'aidan' | 'ouckah' | null
  setSelectedName: (name: 'aidan' | 'ouckah') => void
}

function NameSelector({ name, selectedName, setSelectedName }: NameSelectorProps) {
  const isSelected = name === selectedName
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelectedName(name)}
      className={`cursor-pointer select-none px-6 py-3 rounded-lg text-2xl font-semibold transition-colors ${
        isSelected 
          ? 'bg-primary text-primary-foreground' 
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      }`}
    >
      <motion.div
        initial={false}
        animate={{ x: isSelected ? 10 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center gap-2"
      >
        <motion.div
          initial={false}
          animate={{ scale: isSelected ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-3 h-3 rounded-full bg-current"
        />
        {name === 'aidan' ? 'aidan ouckama' : 'ouckah'}
      </motion.div>
    </motion.div>
  )
}
