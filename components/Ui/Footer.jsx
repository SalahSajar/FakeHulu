import Layout from "../Layout/Layout";

import classes from "../../style/Footer.module.css";

const Footer = () => {

    const changeFooterContentColumnState__FUNC = (e) => {
        const currentFooterContentColumnState = e.target.getAttribute("aria-expanded");

        currentFooterContentColumnState === "false" ? e.target.setAttribute("aria-expanded" , "true") : e.target.setAttribute("aria-expanded" , "false");
    }
  return (
    <footer id="welcomePage_footer--EL" className={classes["welcomePage_footer--EL"]}>
        <Layout>
            <div className={`f-start-between ${classes["welcomePage_footer_content--CONTAINER"]}`}>
                <div className={`${classes["footer_contentColumn--CONTAINER"]} ${classes["browseHuluNetworks_contentColumn--EL"]}`}>
                    <h5 className={classes["footer_contentColumn_title--EL"]}>BROWSE</h5>
                    <h5 onClick={changeFooterContentColumnState__FUNC} role="button" aria-expanded="false" className={classes["footer_contentColumn_title--EL"]}>BROWSE</h5>
                    <div className={`f-start-between ${classes["footer_column_content--CONTAINER"]}`}>
                        <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                            <li><a href="#">streaming library</a></li>
                            <li><a href="#">live tv</a></li>
                            <li><a href="#">live news</a></li>
                            <li><a href="#">live sports</a></li>
                        </ul>
                        <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                            <li><a href="#">tv shows</a></li>
                            <li><a href="#">movies</a></li>
                            <li><a href="#">originals</a></li>
                            <li><a href="#">networks</a></li>
                            <li><a href="#">kids</a></li>
                            <li><a href="#">fx</a></li>
                        </ul>
                        <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                            <li><a href="#">HBO Max™</a></li>
                            <li><a href="#">cinamax</a></li>
                            <li><a href="#">showtime</a></li>
                            <li><a href="#">starz</a></li>
                        </ul>
                        <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                            <li><a href="#">Hulu, Disney+, and ESPN+</a></li>
                            <li><a href="#">Hulu(No Ads), Disney+, and ESPN+</a></li>
                            <li><a href="#">Student discount</a></li>
                        </ul>
                    </div>
                </div>
                <div className={classes["footer_contentColumn--CONTAINER"]}>
                    <h5 className={classes["footer_contentColumn_title--EL"]}>help</h5>
                    <h5 onClick={changeFooterContentColumnState__FUNC} role='button' aria-expanded="false" className={classes["footer_contentColumn_title--EL"]}>help</h5>
                    <div className={classes["footer_column_linksGrid--CONTAINER"]}>
                        <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                            <li><a href="#">Account & billing</a></li>
                            <li><a href="#">plans & pricing</a></li>
                            <li><a href="#">supported devices</a></li>
                            <li><a href="#">accessibility</a></li>
                        </ul>
                    </div>
                </div>
                <div className={classes["footer_contentColumn--CONTAINER"]}>
                    <h5 className={classes["footer_contentColumn_title--EL"]}>about us</h5>
                    <h5 onClick={changeFooterContentColumnState__FUNC} role='button' aria-expanded="false" className={classes["footer_contentColumn_title--EL"]}>about us</h5>
                    <div className={classes["footer_column_linksGrid--CONTAINER"]}>
                        <ul className={classes["footer_column_contentColumn--CONTAINER"]}>
                            <li><a href="#">shop hulu</a></li>
                            <li><a href="#">press</a></li>
                            <li><a href="#">jobs</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className={classes["footer_socialMedia_link--CONTAINER"]}>
                <ul>
                    <li>
                        <a href="https://twitter.com/hulu">
                            <img src="/assets/welcomePage-assets/icons/twitter.svg" alt="Hulu twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/hulu">
                            <img src="/assets/welcomePage-assets/icons/facebook.svg" alt="Hulu facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCE5mQnNl8Q4H2qcv4ikaXeA">
                            <img src="/assets/welcomePage-assets/icons/youtube.svg" alt="Hulu youtube" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/hulu">
                            <img src="/assets/welcomePage-assets/icons/instagram.svg" alt="Hulu instagram" />
                        </a>
                    </li>
                </ul>
            </div>

            <nav className={classes["footer_final_navbar--EL"]}>
                <ul className="f-center-between">
                    <li>&#169; 2022 Hulu, LLC</li>
                    <li><a href="#">about ads</a></li>
                    <li><a href="#">terms of use</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">Do Not Sell My Personal Information</a></li>
                    <li><a href="#">Your California Privacy Right</a></li>
                    <li><a href="#">TV Parental Guidelines</a></li>
                    <li><a href="#">sitemap</a></li>
                </ul>
            </nav>
        </Layout>
    </footer>
);
};

export default Footer;
