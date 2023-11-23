import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense } from "react"
import Image from "next/image"
import SectionTitle from "@modules/sectionTitle"
import FeatureGrid from "@modules/featureGrid"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shop all available models only at the Milamiti. Secure Payment.",
}

export default async function Home() {
  const { collections, count } = await getCollectionsList(0, 3)

  return (
    <>
      {/* <Hero /> */}

      <div className="relative h-[590px] w-full">
        {/* <div className="small:text-left small:justify-end small:items-start absolute inset-x-0 top-auto bottom-0 z-10 flex flex-col items-center justify-center text-center text-white"> */}
        <div className="small:text-left small:justify-end small:items-start small:p-32 absolute inset-0 z-10 flex flex-col items-center justify-center pb-32 text-center text-white">
          <SectionTitle
            subtitle={"Milamiti"}
            heading={"Scopri la Nostra Nuova Collezione"}
            href={"/store"}
            linkText={"Visualizza ora"}
          />
        </div>
        <Image
          src="https://images.unsplash.com/photo-1538190962312-301b3e41a6e8?q=80&w=1200&h=1400&auto=format&fit=crop&crop=top"
          loading="eager"
          priority={true}
          quality={90}
          alt=""
          className="absolute inset-0"
          draggable="false"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className=" absolute inset-0 bg-neutral-900 opacity-20"></div>
      </div>

      <div className="content-container py-8">
        <SectionTitle
          subtitle={"Ultimi arrivati"}
          heading={
            "Esplora i nostri gioielli esclusivi: stile e qualità in ogni dettaglio"
          }
          href={"/store"}
          linkText={"Scopri ora"}
        />
        {/* <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8"> */}
        <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
          <FeaturedProducts collections={collections} />
        </Suspense>
        {/* </ul> */}
      </div>

      <section className="mx-auto my-2 max-w-screen-2xl gap-4 px-4 pb-4">
        {/* <CollectionView handle={'evidenza'} /> */}
        <FeatureGrid />

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
          <Card
            heading="-10% per il tuo primo acquisto!"
            body="Siamo entusiasti di darti il benvenuto, inizia il tuo viaggio con Milamiti"
          />
          <Card
            heading="Consegna gratuita per ordini superiori ai 199€"
            body=""
          />
        </div>
      </section>
    </>
  )
}

const Card = ({
  heading,
  body,
  href,
  linkText,
}: {
  heading: string
  body: string
  href?: string
  linkText?: string
}) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border p-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="absolute top-0 -z-10 -mx-6 h-full w-full bg-white">
        <div
          className="absolute bottom-auto left-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] 
      rounded-full bg-[rgba(240,228,163,0.5)] opacity-50 blur-[80px]"
        ></div>
      </div>

      {/* <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
  </svg> */}
      <a href="#">
        <h5 className="mb-2 text-2xl text-yellow-700 dark:text-white">
          {heading}
        </h5>
      </a>
      <p className="font-normal text-gray-500 dark:text-gray-400">{body}</p>
      {linkText && (
        <a
          href={href}
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          {linkText}
          <svg
            className="ms-2.5 h-3 w-3 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </a>
      )}
    </div>
  )
}
const DoubleImage = () => {
  return (
    <div className="-gap-4 relative flex w-full flex-col items-center justify-center">
      <div className="relative flex h-full w-full items-center justify-center py-80 md:py-96">
        <div className="thumbnail absolute inset-0 -z-0 h-full w-full overflow-hidden bg-fixed ">
          <Image
            className="rellax set-height w-full object-cover "
            src="https://mana.minority.studio/wp-content/uploads/2023/08/m3.jpg"
            alt={""}
          />

          <div className="absolute inset-8 overflow-hidden border-2 border-neutral-100 bg-neutral-50 bg-fixed sm:inset-16">
            <Image
              className="rellax set-height w-full object-cover"
              src="https://mana.minority.studio/wp-content/uploads/2023/08/m3.jpg"
              alt={""}
            />
          </div>
        </div>
        <div className="md:py-44"></div>
        <div className=" absolute inset-0 mx-6 flex flex-col items-center justify-center text-center text-4xl sm:mx-12 sm:text-6xl md:mx-auto md:max-w-2xl">
          <h1 className="serif mb-1 leading-tight text-white">Heading text</h1>
        </div>
      </div>
    </div>
  )
}
const BlurredGradient = () => {
  return (
    <div className="relative left-0 top-0 -mb-[40%] flex h-96 w-full items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden blur-[9vw] saturate-150">
        <div className="animate-orbit absolute h-full w-full">
          <div className="absolute left-[25%] top-[20%] w-[50%] rounded-full bg-sky-500 pb-[50%]"></div>
        </div>
        <div className="animate-orbit2 absolute h-1/2 w-full">
          <div className="absolute left-[25%] top-[15%] w-[40%] rounded-full bg-fuchsia-500 pb-[40%]"></div>
        </div>
        <div className="animate-orbit3 absolute h-full w-full">
          <div className="absolute left-[30%] top-[40%] w-[30%] rounded-full bg-cyan-400 pb-[30%]"></div>
        </div>
        <div className="animate-orbit4 absolute h-full w-1/2">
          <div className="absolute left-[25%] top-[20%] w-[30%] rounded-full bg-white pb-[30%]"></div>
        </div>
      </div>
      <h1 className="relative text-5xl font-bold text-white">Call to Action</h1>
    </div>
  )
}
