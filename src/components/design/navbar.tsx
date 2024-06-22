"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import Logo from "@/../public/images/logo.png";
import Image from "next/image";
import { Text } from "../ui/text";
import Link from "next/link";
import { Button } from "../ui/button";

import { navLinks } from "@/data/navLinks";

import MenuOpen from "@/../public/icons/menu-open.svg";
import MenuClose from "@/../public/icons/menu-close.svg";

const Navbar = () => {
  const pathname = usePathname();
  const [MobileNavbar, setMobileNavbar] = useState(true);

  function handleClick() {
    setMobileNavbar(!MobileNavbar);
  }

  function mobileLinkHandleClick() {
    if (!MobileNavbar) {
      setMobileNavbar(!MobileNavbar);
    }
  }

  return (
    <>
      <nav className="sticky top-0 bg-white lg:flex items-center justify-between w-full py-0.5 lg:py-0 lg:px-5 xl:px-52 shadow-md z-50">
        <div className="flex justify-between items-center my-5">
          <div>
            <Link href="/home">
              <Image
                className="w-36 lg:w-52"
                src={Logo}
                alt="Digenie"
                width={200}
                height={200}
              />
            </Link>
          </div>
          {/* Mobile Navbar */}
          <div className="md:hidden mr-4">
            <button onClick={handleClick}>
              {MobileNavbar ? (
                <Image src={MenuOpen} alt="Menu Open" width={35} height={35} />
              ) : (
                <Image
                  src={MenuClose}
                  alt="Menu Close"
                  width={35}
                  height={35}
                />
              )}
            </button>
          </div>
        </div>

        <div
          className={
            MobileNavbar
              ? "hidden md:flex md:z-0 md:relative md:top-0 md:w-auto justify-center items-center"
              : "bg-white p-5 w-full fixed z-30 h-full"
          }
        >
          <ul className="lg:flex items-center lg:space-x-10">
            {navLinks.map((nav, index) => {
              let isActive = pathname.startsWith(nav.href);
              if (nav.name === "Home" && pathname === "/") {
                isActive = true;
              }
              return (
                <li className={MobileNavbar ? "" : "mb-5"} key={index}>
                  <Text className="font-semibold" variant="body1">
                    <Link
                      className={isActive ? "" : ""}
                      href={nav.href}
                      onClick={mobileLinkHandleClick}
                    >
                      {nav.name}
                    </Link>
                  </Text>
                </li>
              );
            })}
          </ul>
          <div className="xl:ml-10 md:hidden xl:block">
            <Link href="/home#contact-form">
              <Button variant="default" border="round">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
