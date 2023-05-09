import { Azeret_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { type ReactNode } from 'react'
import styles from './styles.module.scss'

const tagada = localFont({
  src: '../../assets/fonts/Tagada-Regular.otf',
  weight: '400',
  style: 'normal',
  variable: '--tagada-font'
})

const azeret = Azeret_Mono({
  subsets: ['latin']
})

interface PageLayoutProps {
  children: ReactNode
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className={`${azeret.className} ${tagada.variable} ${styles.layout}`}>
      {children}
    </main>
  )
}

export default PageLayout
