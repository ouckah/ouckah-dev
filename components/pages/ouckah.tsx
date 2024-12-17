import { motion } from "motion/react"
import { Section } from "@/components/section"
import { Separator } from "@/components/ui/separator"

export default function OuckahPage() {
  return (
    <>
      <Separator className="my-4" />
      <Section fullHeight className="items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ouckah</h2>
          <p className="text-xl mb-6">Hi there! I go by Ouckah online. Nice to meet you!</p>
          <p className="text-lg">
            As Ouckah, I dive into the world of creative coding and innovative projects. This persona allows me 
            to experiment with cutting-edge technologies and push the boundaries of what&apos;s possible in web development. 
            From interactive animations to unique user interfaces, Ouckah represents my more experimental and playful side.
          </p>
        </motion.div>
      </Section>
      <Section className="bg-secondary">
        <h2 className="text-2xl font-bold mb-6">Experimental Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Interactive Art Installation</h3>
            <p>A web-based interactive art piece that responds to user movements and sound.</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Chatbot</h3>
            <p>An experimental chatbot that uses advanced NLP techniques to engage in creative conversations.</p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-6">Tech Explorations</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">WebGL and Three.js</h3>
            <p>Exploring 3D graphics and animations in the browser for immersive web experiences.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Web Audio API</h3>
            <p>Experimenting with audio synthesis and processing directly in the browser.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">WebAssembly</h3>
            <p>Pushing the boundaries of web performance with low-level programming in the browser.</p>
          </div>
        </div>
      </Section>
    </>
  )
}