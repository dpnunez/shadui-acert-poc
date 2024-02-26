import Image from 'next/image'
import { TypewritingHero } from './Typewriting'
import { CardBody, CardContainer, CardItem, ModeToggle } from '@/components/ui'

export function Hero() {
  return (
    <div className="flex flex-col flex-1">
      <CardContainer className="inter-var">
        <CardBody className="bg-foreground/5 relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl p-6">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white flex w-full"
          >
            <div className="flex gap-4 items-center flex-1">
              <Image
                className="rounded-full w-16 group-hover/card:shadow-xl transition-all"
                src="/me.jpg"
                alt="me"
                width={200}
                height={200}
              />
              <div className="flex justify-between flex-1">
                <div className="flex flex-col">
                  <h2 className="font-bold text-lg">Daniel Pôrto Núñez</h2>
                  <span className="text-primary font-normal opacity-45">
                    @dpnunez
                  </span>
                </div>
                <ModeToggle />
              </div>
            </div>
          </CardItem>
          <CardItem
            translateZ={160}
            className="mt-6 bg-orange-500 text-white  rounded-md px-2 py-1 font-mono text-sm ml-auto group-hover/card:shadow-xl transition-all"
          >
            Me.json
          </CardItem>
          <CardItem translateZ={100} className="w-full mt-4">
            <div className="ring-1 ring-orange-400/20 p-4 bg-foreground/5 rounded-xl group-hover/card:shadow-xl transition-all">
              <TypewritingHero />
            </div>
          </CardItem>
          {/* <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div> */}
        </CardBody>
      </CardContainer>
    </div>
  )
}
