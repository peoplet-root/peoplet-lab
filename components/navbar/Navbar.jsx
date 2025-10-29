'use client'

import { useState, useEffect } from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
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
import LightDarkToggle from "@/components/theme/LightDarkToggle"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'experience', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed w-full top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <button onClick={() => scrollToSection('home')} className="-m-1.5 p-1.5">
            <Image
              alt=""
              src="/assets/logo-black.png"
              className="h-10 w-auto block dark:hidden"
              width="100"
              height="100"
            />
            <Image
              alt=""
              src="/assets/logo-white.png"
              className="h-10 w-auto hidden dark:block"
              width="100"
              height="100"
            />
          </button>
        </div>

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

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <button
            onClick={() => scrollToSection('about')}
            className={`text-sm/6 transition-colors ${activeSection === 'about' ? '' : ''
              }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`text-sm/6 transition-colors ${activeSection === 'services' ? '' : ''
              }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`text-sm/6 transition-colors ${activeSection === 'projects' ? '' : ''
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`text-sm/6 transition-colors ${activeSection === 'experience' ? '' : ''
              }`}
          >
            Experiences
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-sm/6 transition-colors ${activeSection === 'contact' ? '' : ''
              }`}
          >
            Contact
          </button>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors">
            <FaLinkedinIn />
          </a>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection('home')} className="-m-1.5 p-1.5">
              <Image
                alt=""
                src="/api/placeholder/100/100"
                className="h-10 w-auto block dark:hidden"
                width="100"
                height="100"
              />
              <Image
                alt=""
                src="/api/placeholder/100/100"
                className="h-10 w-auto hidden dark:block"
                width="100"
                height="100"
              />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-neutral-900 dark:text-neutral-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="flex flex-col gap-5 mt-8">
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`text-sm/6 transition-colors ${activeSection === 'about' ? 'text-blue-500 dark:text-blue-400' : ''
                      }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className={`text-sm/6 transition-colors ${activeSection === 'services' ? 'text-blue-500 dark:text-blue-400' : ''
                      }`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className={`text-sm/6 transition-colors ${activeSection === 'projects' ? 'text-blue-500 dark:text-blue-400' : ''
                      }`}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('experiences')}
                    className={`text-sm/6 transition-colors ${activeSection === 'projects' ? 'text-blue-500 dark:text-blue-400' : ''
                      }`}
                  >
                    Experiences
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`text-sm/6 transition-colors ${activeSection === 'contact' ? 'text-blue-500 dark:text-blue-400' : ''
                      }`}
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="py-6">
                <div className="flex flex-row gap-5 mb-5">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors">
                    <FaBehance />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 transition-colors">
                    <FaGithub />
                  </a>
                </div>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-neutral-800 hover:bg-neutral-700 text-sm/6 text-white py-2 px-5 rounded-full flex items-center w-28 transition-colors"
                >
                  Contact <span aria-hidden="true" className="font-semibold">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}