'use client'

import { useState } from 'react'
import { motion } from "framer-motion"

import AidanPage from '@/components/pages/aidan'
import OuckahPage from '@/components/pages/ouckah'

export default function Home() {
  const [selectedName, setSelectedName] = useState<'aidan' | 'ouckah'>('aidan')

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 w-full">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-bold"
          >
            my name is
          </motion.h1>
          <div className="flex flex-col gap-4">
            <NameSelector name="aidan" selectedName={selectedName} setSelectedName={setSelectedName} />
            <NameSelector name="ouckah" selectedName={selectedName} setSelectedName={setSelectedName} />
          </div>
        </div>
        
        <motion.div
          key={selectedName}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 text-xl"
        >
          {selectedName === 'aidan' ? (
            <AidanPage />
          ) : (
            <OuckahPage />
          )}
        </motion.div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Add footer content here if needed */}
      </footer>
    </div>
  )
}

interface NameSelectorProps {
  name: 'aidan' | 'ouckah'
  selectedName: 'aidan' | 'ouckah'
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
