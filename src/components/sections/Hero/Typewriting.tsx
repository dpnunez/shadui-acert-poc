'use client'
import { TypewriterEffectSmooth } from '@/components/ui'
import { cn } from '@/lib/utils'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const textClasses = 'text-lg md:text-xl text-gray-500 my-0'

export function TypewritingHero() {
  return (
    <Brackets>
      <JSONWriter lines={lines} />
    </Brackets>
  )
}

interface BracketsProps {
  children?: React.ReactNode
}

function Brackets({ children }: BracketsProps) {
  const [startChildren, setStartChildren] = useState(false)

  return (
    <div className="relative">
      <TypewriterEffectSmooth
        delay={0}
        cursorClassName={cn({
          invisible: startChildren,
        })}
        words={[{ text: '{', className: textClasses }]}
      />
      {startChildren && <LineWrapper>{children}</LineWrapper>}
      <motion.div
        onAnimationComplete={() => setStartChildren(true)}
        className="absolute"
        initial={{
          top: 0,
          left: 28,
          bottom: 'unset',
        }}
        animate={{
          bottom: 0,
          left: 0,
          top: 'unset',
        }}
        transition={{
          delay: 2,
        }}
      >
        <TypewriterEffectSmooth
          delay={0}
          words={[{ text: '}', className: textClasses }]}
          cursorClassName="invisible"
        />
      </motion.div>
      <div className={cn(textClasses, 'invisible')}>{'}'}</div>
    </div>
  )
}

interface LineWrapperProps {
  children: React.ReactNode
  className?: string
}

const LineWrapper = ({ children, className }: LineWrapperProps) => (
  <motion.div
    className={className}
    initial={{ height: 0 }}
    animate={{ height: 'fit-content' }}
  >
    {children}
  </motion.div>
)

interface ChangeRoleProps {
  onComplete: () => void
  trigger: boolean
}

const ChangeRole = ({ onComplete, trigger }: ChangeRoleProps) => {
  const [typeChange, setTypeChange] = useState(false)

  return (
    <div className="flex">
      <TypewriterEffectSmooth
        cursorClassName={cn({
          invisible: typeChange,
        })}
        onComplete={() => setTypeChange(true)}
        words={[
          { text: '"role"', className: cn(textClasses, 'text-gray-500') },
          { text: ':', className: cn(textClasses, 'text-white, mr-1') },
        ]}
      />
      {typeChange && (
        <TypewriterChange
          trigger={trigger}
          onComplete={onComplete}
          words={[
            {
              text: '"Frontend Developer",',
              className: cn(
                textClasses,
                'text-orange-500 dark:text-orange-400 font-medium',
              ),
            },
            {
              text: '"Computer Science Student",',
              className: cn(
                textClasses,
                'text-orange-500 dark:text-orange-400 font-medium',
              ),
            },
            {
              text: '"UI/UX enthusiast",',
              className: cn(
                textClasses,
                'text-orange-500 dark:text-orange-400 font-medium',
              ),
            },
            {
              text: '"CS:GO player",',
              className: cn(
                textClasses,
                'text-red-500 dark:text-orange-400 font-medium',
              ),
            },
            {
              text: '"CS2 Hater",',
              className: cn(
                textClasses,
                'text-red-500 dark:text-red-400 font-medium',
              ),
            },
            {
              text: '"CSS Expert! CSS Expert! CSS Expert! "',
              className: cn(
                textClasses,
                'text-orange-500 dark:text-orange-400 font-medium',
              ),
            },
          ]}
        />
      )}
    </div>
  )
}

interface WordObject {
  text: string
  className?: string
}

interface LineItem {
  words?: WordObject[]
  Component?: React.ComponentType<{
    onComplete: () => void
    trigger: boolean
  }>
  arr?: LineItem[]
}

const lines: LineItem[] = [
  {
    words: [
      { text: '"name"', className: 'text-gray-500' },
      { text: ':', className: 'text-white, mr-2' },
      {
        text: '"Daniel Pôrto Núñez"',
        className: 'text-orange-500 dark:text-orange-400 font-medium',
      },
      { text: ',' },
    ],
  },
  {
    words: [
      { text: '"location"', className: 'text-gray-500' },
      {
        text: ':',
      },
      {
        text: '{',
        className: 'text-orange-700',
      },
    ],
  },
  {
    arr: [
      {
        words: [
          { text: '"country"', className: 'text-gray-500' },
          { text: ':', className: 'text-white, mr-2' },
          {
            text: '"Brazil"',
            className: 'text-orange-500 dark:text-orange-400 font-medium',
          },
          { text: ',' },
        ],
      },
      {
        words: [
          { text: '"city"', className: 'text-gray-500' },
          { text: ':', className: 'text-white, mr-2' },
          {
            text: '"Pelotas"',
            className: 'text-orange-500 dark:text-orange-400 font-medium',
          },
          { text: ',' },
        ],
      },
    ],
  },
  {
    words: [{ text: '}', className: 'text-orange-700' }, { text: ',' }],
  },
  {
    Component: ChangeRole,
  },
  {
    words: [
      { text: '"university"', className: 'text-gray-500' },
      { text: ':', className: 'text-white, mr-2' },
      {
        text: '"UFPel - CC"',
        className: 'text-orange-500 dark:text-orange-400 font-medium',
      },
      { text: ',' },
    ],
  },
  {
    words: [
      { text: '"socials"', className: 'text-gray-500' },
      {
        text: ':',
        className: 'text-white, mr-2',
      },
      { text: '[', className: 'text-orange-700' },
    ],
  },
  {
    arr: [
      {
        Component: Socials,
      },
    ],
  },
  {
    words: [{ text: ']', className: 'text-orange-700' }, { text: ',' }],
  },
]

interface JSONWriterProps {
  lines: LineItem[]
  onComplete?: () => void
}

function JSONWriter({ lines, onComplete }: JSONWriterProps) {
  const [lineWriting, setLineWriting] = useState(0)

  return lines.map((line, idx) => {
    const isLast = idx === lines.length - 1

    if (idx > lineWriting) {
      return null
    }

    if (line.Component) {
      const Component = line.Component
      return (
        <LineWrapper key={idx} className="md:ml-8 ml-4">
          <Component
            trigger={lineWriting >= lines.length}
            onComplete={() => {
              if (onComplete) onComplete()
              setLineWriting((e) => Math.max(e + 1, idx + 1))
            }}
          />
        </LineWrapper>
      )
    }

    if (line.arr) {
      return (
        <LineWrapper key={idx} className="md:ml-8 ml-4">
          <JSONWriter
            lines={line.arr}
            onComplete={() => {
              setLineWriting((e) => Math.max(e + 1, idx + 1))
            }}
          />
        </LineWrapper>
      )
    }

    if (line.words) {
      return (
        <LineWrapper key={idx}>
          <TypewriterEffectSmooth
            onComplete={() => {
              setTimeout(() => {
                setLineWriting(idx + 1)
                if (isLast && onComplete) {
                  onComplete()
                }
              }, 100)
            }}
            className="md:ml-8 ml-4"
            key={idx}
            words={line.words.map((e) => ({
              ...e,
              className: cn(textClasses, e.className),
            }))}
            cursorClassName={cn({
              invisible: idx !== lineWriting,
            })}
          />
        </LineWrapper>
      )
    }

    return null
  })
}

interface TypewriterChangeProps {
  words: { text: string; className?: string }[]
  trigger: boolean
  onComplete?: () => void
}

const TypewriterChange = ({
  words,
  trigger,
  onComplete,
}: TypewriterChangeProps) => {
  const [index, setIndex] = useState(0)
  const [typedFirst, setTypedFirst] = useState(false)
  const word = words[index]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (trigger) {
      setIndex((prev) => (prev + 1) % words.length)
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length)
      }, 5000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [trigger, setIndex, words.length])

  return (
    <AnimatePresence mode="wait">
      <TypewriterEffectSmooth
        onComplete={() => {
          onComplete && onComplete()
          setTypedFirst(true)
        }}
        delay={1}
        key={word.text}
        cursorClassName={cn({
          invisible: typedFirst && !trigger,
        })}
        words={[
          {
            text: word.text,
            className: cn(textClasses, word.className),
          },
        ]}
      />
    </AnimatePresence>
  )
}

const socialsLinks = [
  {
    Icon: <LinkedInLogoIcon width={42} height={42} className="text-blue-600" />,
    url: 'https://www.linkedin.com/in/daniel-porto-nunez/',
  },
  {
    Icon: (
      <GitHubLogoIcon
        width={42}
        height={42}
        className="text-gray-600 dark:text-gray-200"
      />
    ),
    url: 'https://github.com/dpnunez',
  },
]

function Socials({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div className="flex items-start flex-col">
      {socialsLinks.map((link, idx) => {
        const isLast = idx === socialsLinks.length - 1
        return (
          <motion.a
            href={link.url}
            target="_blank"
            key={idx}
            initial={{
              opacity: 0,
              translateZ: 200,
              rotate: -15,
              x: -40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              rotate: 0,
              transition: {
                delay: idx * 0.3,
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            className={cn(textClasses, 'flex cursor-pointer my-2 origin-right')}
            onAnimationComplete={() => {
              if (isLast) {
                onComplete()
              }
            }}
          >
            {'"'}
            {link.Icon}
            {'"'},
          </motion.a>
        )
      })}
    </motion.div>
  )
}
