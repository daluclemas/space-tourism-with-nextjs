import React, { useState } from "react";
import Link from "next/link";
import navbarStyles from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  const [closeIcon, setCloseIcon] = useState(false);

  const href = [
    {
      name: "home",
      url: "/",
      id: 0,
    },

    {
      name: "destination",
      url: "/destination",
      id: 1,
    },

    {
      name: "crew",
      url: "/crew",
      id: 2,
    },

    {
      name: "technology",
      url: "/technology",
      id: 3,
    },
  ];

  const showNav = () => {
    setCloseIcon(true);
  };

  const hideNav = () => {
    setCloseIcon(false);
  };

  return (
    <div className={navbarStyles.container}>
      <header className={navbarStyles.header}>
        <section className={navbarStyles.logoAndHamburer}>
          <div className={navbarStyles.logo}>
            <Image
              src="/assets/shared/logo.svg"
              width="90%"
              height="90%"
              alt="logo"
            />
          </div>

          <div className={navbarStyles.linethrough}></div>

          <div className={navbarStyles.hamburgerIcon}>
            {!closeIcon ? (
              <div className={navbarStyles.hamburger} onClick={showNav}>
                <Image
                  src="/assets/shared/icon-hamburger.svg"
                  width="100%"
                  height="100%"
                  alt="hamburger-icon"
                />
              </div>
            ) : (
              <div
                className={`${navbarStyles.closeIcon} ${
                  closeIcon ? "show" : ""
                }`}
                onClick={hideNav}
              >
                <Image
                  src="/assets/shared/icon-close.svg"
                  width="100%"
                  height="100%"
                  alt="close-icon"
                />
              </div>
            )}
          </div>
        </section>

        <nav
          className={`${navbarStyles.nav} ${
            closeIcon ? `${navbarStyles.show}` : ""
          }`}
        >
          <ul className={navbarStyles.navigation}>
            {href.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${navbarStyles.navLink} ${
                    router.asPath === item.url ? `${navbarStyles.active}` : ""
                  }`}
                >
                  <Link href={item.url}>
                    <a>
                      <span>0{item.id}</span> {item.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
