import Providers from "@modules/providers"
import { Bricolage_Grotesque } from "next/font/google"
import "styles/globals.css"

const bricolage = Bricolage_Grotesque({
  weight: ["200", "300"],
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
