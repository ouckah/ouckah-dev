import React from 'react'
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  fullHeight?: boolean
}

export function Section({ 
  children, 
  className, 
  fullHeight = false,
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn(
        "w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20",
        fullHeight && "min-h-screen flex flex-col justify-center",
        className
      )}
      {...props}
    >
      <div className="container mx-auto max-w-5xl">
        {children}
      </div>
    </section>
  )
}

