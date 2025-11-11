'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaInstagram, FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa"
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed w-full top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              alt="Peoplet Lab logo"
              src="/assets/peoplet-logo.png"
              className="h-12 w-auto block dark:hidden"
              width={100}
              height={100}
            />
            <Image
              alt="Peoplet Lab logo dark"
              src="/assets/peoplet-logo.png"
              className="h-12 w-auto hidden dark:block"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-900 dark:text-neutral-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#0066ff] ${
                pathname === item.href
                  ? 'text-[#0066ff]'
                  : 'text-neutral-900 dark:text-neutral-200'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </PopoverGroup>

        {/* Social icons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">
          <a href="https://www.instagram.com/peoplet.io/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#0066ff] transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/peoplet/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#0066ff] transition-colors">
            <FaLinkedinIn />
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
              <Image
                alt="Peoplet Lab logo"
                src="/assets/peoplet-logo.png"
                className="h-10 w-auto block dark:hidden"
                width={100}
                height={100}
              />
              <Image
                alt="Peoplet Lab logo dark"
                src="/assets/peoplet-logo.png"
                className="h-10 w-auto hidden dark:block"
                width={100}
                height={100}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-neutral-900 dark:text-neutral-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg transition-colors ${
                  pathname === item.href
                    ? 'text-[#0066ff]'
                    : 'text-neutral-900 dark:text-neutral-200 hover:text-[#0066ff]'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-8 flex gap-5">
              <a href="https://www.instagram.com/peoplet.io/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#0066ff] transition-colors">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/peoplet/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#0066ff] transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
