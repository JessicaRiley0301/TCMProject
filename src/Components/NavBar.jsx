import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/solid'
import logo from '../Images/logo.jpeg'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div>
        <nav className="bg-black position:sticky">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <img class="w-10 h-10" src={logo} alt="logo"/> 

            <div className="flex-shrink-0">
            
                <a
                href="/"
                className="text-white hover:text-gray-500 text-lg font-medium pl-2"
                >
                BEIJING CHINESE MEDICAL CENTER
                </a>
            </div>
                <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">

                <a
                href="/about"
                className="text-white hover:text-gray-500 text-lg font-medium"
                >
                ABOUT
                </a>

                <a
                href="/services"
                className="text-white hover:text-gray-500 text-lg font-medium"
                >
                SERVICES
                </a>

                <a
                href="/store"
                className="text-white hover:text-gray-500 text-lg font-medium"
                >
                STORE
                </a>

                <a
                href="/blog"
                className="text-white hover:text-gray-500 text-lg font-medium"
                >
                BLOG
                </a>
                <a
                href="/classes"
                className="text-white hover:text-gray-500 text-lg font-medium"
                >
                CLASSES
                </a>
                <a href="#footer"

                className="text-white hover:text-gray-500 text-lg font-small"
                >
                CONTACT
                </a>
                <a
                href="tel:310-458-1488"
                className="hover:bg-red-900 bg-red-600 text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                SCHEDULE NOW
                </a>
                </div>

            </div>
            </div>
            <div className="-mr-2 flex md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                ) : (
                <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                )}
            </button>
            </div>
        </div>
        </div>

        <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
        {(ref) => (
            <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">

                <a
                    href="/about"
                    className="hover:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                    ABOUT
                </a>

                <a
                    href="/services"
                    className="hover:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                    SERVICES
                </a>

                <a
                href="/store"
                className="hover:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                STORE
                </a>

                <a
                href="/blog"
                className="hover:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                BLOG
                </a>
                <a
                href="/classes"
                className="hover:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                CLASSES
                </a>
                <a
                href="/contact"
                className="hover:bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                CONTACT
                </a>
                <a
                href="/"
                className="hover:bg-gray-900 text-red-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                SCHEDULE NOW
                </a>
            </div>
            </div>
        )}
        </Transition>
    </nav>


    </div>
    );
}

export default NavBar;