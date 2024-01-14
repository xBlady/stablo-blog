return (
    <Container>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={handleMobileMenuToggle}>
          {/** Zmiana tutaj: przeniesienie linków do nakładki **/}
          {/** Iteracja przez elementy menu **/}
          {leftmenu.map((item, index) => (
            <Fragment key={`${item.label}${index}`}>
              {/** Sprawdzenie, czy element menu ma dzieci **/}
              {item.children && item.children.length > 0 ? (
                <DropdownMenu
                  menu={item}
                  key={`${item.label}${index}`}
                  items={item.children}
                />
              ) : (
                {/** Renderowanie linku **/}
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
      )}
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:flex-nowrap md:gap-10 h-24 border-b-2 border-gray-100">
                <div className="flex w-full items-center justify-between">
                  <Link href="/" className="w-48 dark:hidden">
                    {props.logo ? (
                      {/** Renderowanie obrazu logo **/}
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
                      {/** Renderowanie alternatywnego obrazu logo **/}
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
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto pt-4 h-full rounded-md px-2 py-1 text-gray-500 focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden "  onClick={handleMobileMenuToggle} >
                    
                    <svg
                      className="h-8 w-8 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
)
