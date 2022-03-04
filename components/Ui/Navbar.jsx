import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import classes from "../../style/Navbar.module.css";

const Navbar = ({ changeModalStateHandler, page, params }) => {
  const [navbarMenuIsOpen, setNavbarMenuIsOpen] = useState(true);

  const navbarLogoPath = page
    ? "/assets/signupPage-assets/logos/hulu-dark.svg"
    : "/assets/welcomePage-assets/logos/logo.png";

  const accountIconsPath = "/assets/accountPage-assets/icons";

  const router = useRouter();
  const { asPath } = useRouter();
  const { accountID } = router.query;

  const changeNavbarMenuState = () => setNavbarMenuIsOpen((prev) => !prev);

  useEffect(() => {
    const navbar_menu_EL = document.querySelector(
      `.${classes["accountSubpages_links--CONTAINER"]}`
    );
    if (!!navbar_menu_EL) {
      const classNameCheck = navbar_menu_EL.classList.contains(
        classes["openNavbarMenu"]
      );
      classNameCheck &&
        navbar_menu_EL.classList.remove(classes["openNavbarMenu"]);
    }
  }, [asPath]);

  return (
    <Fragment>
      {page === "accountNavbar" ? (
        <nav
          className={`f-center-between ${classes["mainNavbar--EL"]} ${classes["accountNavbar--EL"]}`}
        >
          <button
            className={classes["navbar_menu--BTN"]}
            onClick={changeNavbarMenuState}
          >
            <img
              src="/assets/accountPage-assets/icons/menu.png"
              alt="close navbar menu icon"
            />
          </button>

          <ul
            className={`${classes["accountSubpages_links--CONTAINER"]} ${
              navbarMenuIsOpen && classes["openNavbarMenu"]
            }`}
          >
            <li>
              <Link href={`/account/${accountID}`}>
                <a
                  className={`${classes["account_subpage_link--EL"]} ${
                    classes["homeLink"]
                  } ${params === "home" ? classes["activeLink"] : ""}`}
                >
                  <img src={`${accountIconsPath}/home.png`} alt="Home" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/account/${accountID}/watchlist`}>
                <a
                  className={`${classes["account_subpage_link--EL"]} ${
                    classes["playlistLink"]
                  } ${params === "watchlist" ? classes["activeLink"] : ""}`}
                >
                  <img
                    src={`${accountIconsPath}/video-playlist.png`}
                    alt="Playlist"
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/account/${accountID}/movies`}>
                <a
                  className={`${classes["account_subpage_link--EL"]} ${
                    classes["moviesLink"]
                  } ${params === "movies" ? classes["activeLink"] : ""}`}
                >
                  <img src={`${accountIconsPath}/movie.png`} alt="Movie" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/account/${accountID}/tvShows`}>
                <a
                  className={`${classes["account_subpage_link--EL"]} ${
                    classes["tvShowsLink"]
                  } ${params === "tvShows" ? classes["activeLink"] : ""}`}
                >
                  <img src={`${accountIconsPath}/tv-show.png`} alt="TV Show" />
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/account/${accountID}/actors`}>
                <a
                  className={`${classes["account_subpage_link--EL"]} ${
                    classes["usersLink"]
                  } ${params === "actors" ? classes["activeLink"] : ""}`}
                >
                  <img src={`${accountIconsPath}/users.png`} alt="Actors" />
                </a>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/SalahSajar/FakeHulu"
                target="_blank"
                className={`${classes["account_subpage_link--EL"]} ${classes["githubLink"]}`}
              >
                <img src={`${accountIconsPath}/github.png`} alt="Github" />
              </a>
            </li>
          </ul>

          <h1 role="heading" className={`${classes["hulu_nav_logo--WRAPPER"]}`}>
            <img
              src="/assets/accountPage-assets/logos/hulu-white.png"
              alt="white hulu"
            />
          </h1>
        </nav>
      ) : (
        <nav
          className={`f-center-between ${classes["mainNavbar--EL"]} ${
            !!page && classes["signupPage_navbar--EL"]
          }`}
        >
          <h1 role="heading" className={`${classes["hulu_nav_logo--WRAPPER"]}`}>
            <img src={navbarLogoPath} alt="hulu logo" />
          </h1>

          {!page && (
            <a
              href="#"
              onClick={(e) => changeModalStateHandler(e, "logIn", true)}
            >
              log in
            </a>
          )}
        </nav>
      )}
    </Fragment>
  );
};

export default Navbar;
