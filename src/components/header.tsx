"use client"

import { cn } from "@/lib/utils";
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from "@headlessui/react";
import { BotIcon, ChevronDown, HomeIcon, Menu, MoveRightIcon, PhoneIcon, Plane, PlayCircleIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";

interface Action {
  name: string;
  description?: string;
  href: string;
  icon: React.FC<{ className?: string }>;
}

const products: Action[] = [
  {
    name: "Book a Stay",
    description: "Find a place to stay",
    href: "/stays",
    icon: HomeIcon
  },
  {
    name: "Book a Flight",
    description: "Find a flight",
    href: "/flights",
    icon: Plane
  },
  {
    name: "Contact our Support Team",
    description: "Get help with your account",
    href: "/support",
    icon: BotIcon
  }
];

const callsToAction: Action[] = [
  { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
  { name: "Contact Support", href: "#", icon: PhoneIcon }
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#f9812a]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">TravelAround</span>
            <Image className="h-12 w-auto" src="/favicon.png" alt="logo" width={1000} height={1000} />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button 
            type="button" 
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDown className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </PopoverButton>

            <Transition 
              as={Fragment}
              enter="transition ease-out duration-200" 
              enterFrom="opacity-0 translate-y-1" 
              enterTo="opacity-100 translate-y-0" 
              leave="transition ease-in duration-150" 
              leaveFrom="opacity-100 translate-y-0" 
              leaveTo="opacity-0 translate-y-1">
              <PopoverPanel 
                className="absolute bg-white -left-8-top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div 
                        key={ item.name }
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                          <item.icon className="h-6 w-6 text-[#f05e23] group-hover:text-[#f9812a]" aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-semibold text-[#f05e23]">
                            { item.name }
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-[#f05e23]">
                            { item.description }
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a 
                        key={ item.name }
                        href={ item.href }
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-[#f05e23] hover:bg-gray-100">
                        <item.icon className="h-5 w-5 flex-none text-[#f05e23]" aria-hidden="true" />
                        { item.name }
                      </a>
                    ))}
                  </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <a href="/flights" className="text-sm font-semibold leading-6 text-white">Flights</a>
          <a href="/attractions" className="text-sm font-semibold leading-6 text-white">Attractions</a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <a href="/auth" className="text-sm font-semibold leading-6 text-white">
            Log in
            <MoveRightIcon className="h-4 w-4 ps-1 inline-block" aria-hidden="true" />
          </a>
        </div>
      </nav>

      <Dialog 
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10">
          <DialogPanel
            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#f05e23] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">TravelAround</span>
                  <Image className="h-8 w-auto" src="/public/favicon.png" alt="logo" />
                </Link>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divine-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:[#f9812a]">
                            Stays
                            <ChevronDown className={cn(open ? "rotate-180": "", "h-5 w-5 flex-none")} aria-hidden="true" />
                          </DisclosureButton>
                          <DisclosurePanel className="mt-2 space-y-2">
                            {[...products, ...callsToAction].map((item) => (
                              <DisclosureButton 
                                  key={ item.name }
                                  as="a"
                                  href={ item.href }
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:[#f9812a]">
                                { item.name }
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>

                    <a href="/flights" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:[#f9812a]">Flights</a>
                    <a href="/attractions" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:[#f9812a]">Attractions</a>
                  </div>

                </div>
              </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  )
}

export default Header;