import {Fragment} from 'react';

import classes from "../../style/SpotlightTabs.module.css"

const SpotlightTabs = ({spotlight, changeModalStateHandler}) => {
  return (
      <Fragment>

        <div className={classes["channel_content--CONTAINER"]}>
            <h3 className={classes["channelTap_headline--EL"]}>{!spotlight ? "live sports" : spotlight === 1 ? "breaking news" : "biggest events" }</h3>
            <p className={classes["channelTap_subheadline--EL"]}>
                {
                    !spotlight ?
                    "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.":
                    spotlight === 1 ?
                    "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.":
                    "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more."

                }
            </p>
            
            

            {
                !spotlight ? (
                    <div className={classes["channelTap_logosRow--EL"]}>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src={`/assets/welcomePage-assets/live-sports-logos/live-sports-logo-1.png`} alt="ESPN" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/live-sports-logos/live-sports-logo-2.png" alt="ESPN" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/live-sports-logos/live-sports-logo-3.png" alt="ESPN" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/live-sports-logos/live-sports-logo-4.png" alt="ESPN" />
                        </div>
                    </div>
                ) : spotlight === 1 ? (
                    <div className={classes["channelTap_logosRow--EL"]}>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src={`/assets/welcomePage-assets/breaking-news-logos/abc-news-live-network-logo.png`} alt="abc news network" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/breaking-news-logos/cnn-network-logo.svg" alt="cnn network" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/breaking-news-logos/foxnews-network-logo.svg" alt="fox news network" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/breaking-news-logos/msnbc-network-logo.png" alt="msn network" />
                        </div>
                    </div>
                ) : (
                    <div className={classes["channelTap_logosRow--EL"]}>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src={`/assets/welcomePage-assets/biggest-events-logos/emmys-logo-full.png`} alt="emmys" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/biggest-events-logos/golden-globe-logo-full.png" alt="golden globe" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/biggest-events-logos/grammys-logo-full.png" alt="grammys" />
                        </div>
                        <div className={classes["channelTap_logo--EL"]}>
                            <img src="/assets/welcomePage-assets/biggest-events-logos/oscars-logo-full.png" alt="oscars" />
                        </div>
                    </div>
                )
            }

            <p className={classes["channelTap_disclaimer--EL"]}>Live TV plan required. Regional restrictions, blackouts and additional terms apply.<a className={classes["channel_disclaimer_details_btn--EL"]} href="#" onClick={e => changeModalStateHandler(e, "livetvDislaimer" , true)}> See details</a></p>
        </div>

      </Fragment>
  )
};

export default SpotlightTabs;
