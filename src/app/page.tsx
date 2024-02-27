import { Hero } from '@/components/sections'
import { GridPointBackground } from '@/components/ui'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-4">
      <GridPointBackground className="flex items-center justify-center">
        <Hero />
      </GridPointBackground>
    </main>
  )
}
