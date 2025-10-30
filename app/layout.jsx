import { Analytics } from "@vercel/analytics/react"
import { Poppins } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '400', '500', '600', '700'],
})

export const metadata = {
  title: "Robertino Puhanić - Portfolio",
  description: "Robertino Puhanić - Portfolio",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-black.png",
    shortcut: "/logo-black.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 antialiased pt-24`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme={false}
          disableTransitionOnChange
        >
    
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
