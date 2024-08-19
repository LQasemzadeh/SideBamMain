import { Nunito } from 'next/font/google'
import '@/app/global.css'
import LoginLinks from '@/app/LoginLinks'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="fa" dir='rtl' className={nunitoFont.className}>

            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'SideBam',
}

export default RootLayout
