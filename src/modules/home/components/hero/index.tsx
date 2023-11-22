import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32">
        <Heading
          level="h2"
          className="text-3xl leading-10 text-ui-fg-subtle font-normal"
        >
          Developed by Minority Studio
        </Heading>
      </div>
    </div>
  )
}

export default Hero
