import Prose from "@modules/prose"
import type { Metadata } from "next"

import { notFound } from "next/navigation"

export const runtime = "edge"

export const revalidate = 43200 // 12 hours

const pages = {
  about: {
    title: "About Milamiti",
    body: `<h5>Design Innovativo:\n</h5>
  <p>Ogni pezzo è concepito con un design all'avanguardia, catturando l'essenza della moda contemporanea.</p>
  
  <h5>Artigianato Eccellente:\n</h5>
  <p>La maestria artigianale si fonde con la perfezione, creando gioielli che trasmettono un senso di bellezza senza tempo.</p>
  
  <h5>Materiali Preziosi:\n</h5>
  <p>Utilizziamo solo materiali di alta qualità, dalle pietre preziose alle leghe pregiate, garantendo una durata e uno </p>splendore duraturi.
  
  <h5>Versatilità Senza Limiti:\n</h5>
  <p>Dall'abbigliamento quotidiano alle occasioni speciali, questa collezione si adatta a ogni stile e situazione.</p>
  
  <h5>Espressione Individuale:\n</h5>
  <p>Ogni pezzo è progettato per essere un'espressione unica di stile personale, permettendoti di brillare in ogni momento.</p>`,

    description: "Descripiton here",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  policy: {
    title: "Consegne & Reso",
    body: `<h4>1. Consegne:</h4><h6>1.1 Spedizioni e Tempi di Consegna:</h6>Effettuiamo spedizioni rapide e sicure. I tempi di consegna possono variare in base alla destinazione e alle opzioni di spedizione selezionate durante il checkout. I dettagli specifici sulla spedizione verranno forniti al momento dell'ordine.<h6>1.2 Spese di Spedizione:</h6>Le spese di spedizione sono calcolate durante il processo di checkout e dipendono dalla destinazione, dalla dimensione del pacco e dalle opzioni di spedizione selezionate. Offriamo sconti o spedizioni gratuite in determinate circostanze, che verranno chiaramente indicate.<h6>1.3 Tracciabilità dell'Ordine:</h6>Ogni ordine è dotato di un numero di tracciamento, che verrà fornito al momento della spedizione. I clienti possono monitorare lo stato della consegna tramite il nostro sistema di tracciamento online.<h4>2. Resi:</h4><h6>2.1 Politica di Reso:</h6>Accettiamo resi entro [specificare il numero di giorni] giorni dalla data di ricezione del prodotto. I prodotti devono essere restituiti nelle condizioni originali, non utilizzati e con l'imballaggio intatto. I resi che soddisfano questi criteri saranno soggetti a un rimborso completo o a una sostituzione.<h6>2.2 Procedura di Reso:</h6>I clienti devono contattare il nostro servizio clienti per avviare il processo di reso. Sarà fornita un'etichetta di reso prepagata per semplificare il processo di restituzione. Una volta ricevuto il reso e verificata la conformità, verrà elaborato il rimborso o l'invio di un nuovo prodotto.<h6>2.3 Articoli Non Idonei al Reso:</h6>Alcuni articoli, come quelli personalizzati o a uso intimo, potrebbero non essere idonei al reso per motivi igienici o di personalizzazione. Si prega di verificare le restrizioni specifiche di reso per ciascun prodotto.<h4>3. Informazioni Aggiuntive:</h4><h6>3.1 Modifiche agli Ordini:</h6>Eventuali modifiche agli ordini in corso devono essere comunicate tempestivamente al nostro servizio clienti. Modifiche non garantite dopo la spedizione.<h6>3.2 Contattaci:</h6>Per domande o assistenza, contattaci via e-mail all'indirizzo [indirizzo e-mail] o telefonicamente al [numero di telefono].Questi termini e condizioni sono soggetti a modifiche. Si prega di consultare regolarmente questa pagina per eventuali aggiornamenti. Grazie per la tua comprensione e collaborazione.`,

    description: "Descripiton here",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
}

export async function generateMetadata({
  params,
}: {
  params: { page: string }
}): Promise<Metadata> {
  let page

  page = pages[params.page as keyof typeof pages]

  if (!page) return notFound()

  return {
    title: page.title,
    description: "",
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  let page = pages[params.page as keyof typeof pages]

  if (!page) return notFound()

  return (
    <div className="w-full">
      <div className="mx-8 max-w-2xl py-20 sm:mx-auto">
        <h1 className="mb-8 text-3xl font-bold">{page.title}</h1>
        <Prose className="whitespace-preline mb-8" html={page.body as string} />
        <p className="text-sm italic">
          {`This document was last updated on ${new Intl.DateTimeFormat(
            undefined,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          ).format(new Date(page.updatedAt))}.`}
        </p>
      </div>
    </div>
  )
}
