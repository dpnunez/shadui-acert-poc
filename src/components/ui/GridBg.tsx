import { cn } from '@/lib/utils'

interface GridBgProps {
  children?: React.ReactNode
  className?: string
}

export function GridPointBackground({ children, className }: GridBgProps) {
  return (
    <div
      className={cn(
        'h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.15] bg-dot-black/[0.1] relative flex items-center justify-center',
        className,
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-10 max-w-full">{children}</div>
    </div>
  )
}

export function GridLineBackground({ className, children }: GridBgProps) {
  return (
    <div
      className={cn(
        'h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex items-center justify-center',
        className,
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-10 max-w-full">{children}</div>
    </div>
  )
}
