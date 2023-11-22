import SectionTitle from "./sectionTitle"

const data = [
  {
    heading: "Qualità Garantita",
    body: "Siamo impegnati a offrire gioielli di alta qualità, sinonimo di artigianato eccellente e materiali pregiati.",
  },
  {
    heading: "Tendenze all'Avanguardia",
    body: "Il nostro assortimento riflette sempre le ultime tendenze, garantendo che i tuoi clienti possano godere di prodotti moderni e alla moda.",
  },
  {
    heading: "Spedizione Veloce e Sicura",
    body: "Con la nostra spedizione rapida e affidabile, i tuoi ordini arriveranno in modo sicuro e tempestivo.",
  },
  {
    heading: "Processo di Ordinazione Semplificato",
    body: "Il nostro sistema B2B semplifica il processo di acquisto, assicurando efficienza e consegne veloci.",
  },
  {
    heading: "Assortimento Esclusivo",
    body: "Dall'innovativo al classico, offriamo una vasta gamma di stili e design per soddisfare i gusti diversi dei tuoi clienti.",
  },
  {
    heading: "Sconti per Quantità",
    body: "Approfitta del nostro programma di sconti per quantità, rendendo l'acquisto all'ingrosso con noi ancora più conveniente.",
  },
]

const FeatureGrid = () => {
  return (
    <section className="py-6">
      <div className="mx-auto">
        <SectionTitle
          subtitle={"Diventa Nostro Partner"}
          heading={"Prodotti, servizio"}
        />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {/* <div className=" flex flex-wrap gap-2"> */}
          {data.map((d, i) => {
            return <ServiceCard key={i} title={d.heading} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid

const ServiceCard = ({
  icon,
  title,
  details,
}: {
  icon?: any
  title: string
  details?: string
}) => {
  return (
    <>
      {/* w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 */}
      <div className="flex w-full flex-col items-center justify-center rounded-md border bg-white p-4">
        <div className="bg-primary mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-2xl fill-neutral-800">
          {icon ?? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-10 w-10"
            >
              <path
                fillRule="evenodd"
                d="M11.622 1.602a.75.75 0 01.756 0l2.25 1.313a.75.75 0 01-.756 1.295L12 3.118 10.128 4.21a.75.75 0 11-.756-1.295l2.25-1.313zM5.898 5.81a.75.75 0 01-.27 1.025l-1.14.665 1.14.665a.75.75 0 11-.756 1.295L3.75 8.806v.944a.75.75 0 01-1.5 0V7.5a.75.75 0 01.372-.648l2.25-1.312a.75.75 0 011.026.27zm12.204 0a.75.75 0 011.026-.27l2.25 1.312a.75.75 0 01.372.648v2.25a.75.75 0 01-1.5 0v-.944l-1.122.654a.75.75 0 11-.756-1.295l1.14-.665-1.14-.665a.75.75 0 01-.27-1.025zm-9 5.25a.75.75 0 011.026-.27L12 11.882l1.872-1.092a.75.75 0 11.756 1.295l-1.878 1.096V15a.75.75 0 01-1.5 0v-1.82l-1.878-1.095a.75.75 0 01-.27-1.025zM3 13.5a.75.75 0 01.75.75v1.82l1.878 1.095a.75.75 0 11-.756 1.295l-2.25-1.312a.75.75 0 01-.372-.648v-2.25A.75.75 0 013 13.5zm18 0a.75.75 0 01.75.75v2.25a.75.75 0 01-.372.648l-2.25 1.312a.75.75 0 11-.756-1.295l1.878-1.096V14.25a.75.75 0 01.75-.75zm-9 5.25a.75.75 0 01.75.75v.944l1.122-.654a.75.75 0 11.756 1.295l-2.25 1.313a.75.75 0 01-.756 0l-2.25-1.313a.75.75 0 11.756-1.295l1.122.654V19.5a.75.75 0 01.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="text-center">
          <h4 className="mb-2 text-xl leading-tight">{title}</h4>
          <p className="text-sm text-neutral-500">{details}</p>
        </div>
      </div>
    </>
  )
}
