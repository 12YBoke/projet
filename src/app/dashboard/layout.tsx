import { Navigation } from '@/routes/navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className='pl-[15vw]'>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
