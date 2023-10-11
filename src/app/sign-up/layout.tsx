import { Navigation } from '@/routes/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
