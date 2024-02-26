import { Hero } from '@/components/sections'
import { GridPointBackground } from '@/components/ui'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GridPointBackground className="flex items-center justify-start">
        <Hero />
      </GridPointBackground>
    </main>
  )
}
