import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Nike - Jordan',
  description: 'Generated by create next app',
}

type Props = {
  children: ReactNode
}
const Layout = ({ children }: Props) => {

  return (
    <html>
      <head>
        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout;