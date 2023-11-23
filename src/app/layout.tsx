import Providers from "@modules/providers"
import { Bricolage_Grotesque } from "next/font/google"
import "styles/globals.css"

const bricolage = Bricolage_Grotesque({
  weight: ["200", "300"],
  subsets: ["latin"],
})

let iconPath = "/icon/icon-512.png"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href={iconPath} rel="icon" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href={iconPath}></link>

        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-title" content={"Milamiti"} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body className={bricolage.className}>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
