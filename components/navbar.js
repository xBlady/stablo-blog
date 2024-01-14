"use client"

import { Fragment, useState, useEffect } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useTransition, animated } from 'react-spring';

const leftmenu = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Contact",
    href: "/contact"
  },
  {
    label: "Archive",
    href: "/archive"
  },
];

export default function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const mobilemenu = [...leftmenu];

  return (
<Container>
  <nav>
    {/** Pasek z logo i przyciskiem **/}
    <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10 h-24 border-b-2 border-gray-100">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="w-48 dark:hidden">
          {props.logo ? (
            <Image 
              {...urlForImage(props.logo)}
              alt="Logo"
              priority={true}
              sizes="(max-width: 1040px) 100vw, 400px"
            />
          ) : (
            <span className="block text-center">
              Ideato
            </span>
          )}
        </Link>
        <div className="hidden md:flex md:items-center md:justify-start pt-5 lg:pt-8">
      {leftmenu.map((item, index) => (
        <Fragment key={`${item.label}${index}`}>
          {item.children && item.children.length > 0 ? (
            <DropdownMenu
              menu={item}
              key={`${item.label}${index}`}
              items={item.children}
            />
          ) : (
            <Link
              href={item.href}
              key={`${item.label}${index}`}
              className="px-5 py-2 text-xl font-serif font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noopener" : ""}>
              {item.label}
            </Link>
          )}
        </Fragment>
      ))}
    </div>

        <button
          aria-label="Toggle Menu"
          className="ml-auto pt-4 h-full rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden "  onClick={handleMobileMenuToggle} >
          
          <svg
            className="h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            {isMobileMenuOpen && (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}
            {!isMobileMenuOpen && (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
    {isMobileMenuOpen && (
      <div className="fixed inset-0 bg-white z-50 pt-6" onClick={handleMobileMenuToggle}>
        <div className="flex flex-wrap justify-between  md:flex-nowrap md:gap-10 h-24 border-b-2 border-gray-100">
          <div className="flex w-full items-center container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
            <Link href="/" className="w-48 dark:hidden">
              {props.logo ? (
                <Image 
                  {...urlForImage(props.logo)}
                  alt="Logo"
                  priority={true}
                  sizes="(max-width: 1040px) 100vw, 400px"
                />
              ) : (
                <span className="block text-center">
                  Ideato
                </span>
              )}
            </Link>
            <Link href="/" className="hidden w-48 dark:block">
              {props.logoalt ? (
                <Image
                  {...urlForImage(props.logoalt)}
                  alt="Logo"
                  priority={true}
                  sizes="(max-width: 1040px) 100vw, 400px"
                />
              ) : (
                <span className="block text-center">
                  Ideato
                </span>
              )}
            </Link>
            <button
              aria-label="Toggle Menu"
              className="ml-auto pt-4 h-full rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden "  onClick={handleMobileMenuToggle} >
              
              <svg
                className="h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                {isMobileMenuOpen && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!isMobileMenuOpen && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-5 lg:pt-8">
        {leftmenu.map((item, index) => (
          <Fragment key={`${item.label}${index}`}>
            {item.children && item.children.length > 0 ? (
              <DropdownMenu
                menu={item}
                key={`${item.label}${index}`}
                items={item.children}
              />
            ) : (
              <Link
                href={item.href}
                key={`${item.label}${index}`}
                className="px-5 py-2 text-xl font-serif font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                target={item.external ? "_blank" : ""}
                rel={item.external ? "noopener" : ""}>
                {item.label}
              </Link>
            )}
          </Fragment>
        ))}
      </div>
      </div>
    )}

  </nav>
</Container>
  );
}