import { Fragment, useState } from "react";

import classes from "../../../style/channelsAreaSearcherModal.module.css";

const EntertainmentAndLifestyle_Channels_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Entertainment&Lifestyle_Channels_Icons";
const Entertainment_AddOn_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Entertainment_Add-on_Icons";
const Espanolchannels_AddOn_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Espanolchannels_Add-on_Icons";
const FamilyAndKids_Channels_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Family&Kids_Channels_Icons";
const Live_Local_Channels_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Live_Local_Channels_Icons";
const Movies_Channels_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Movies_Channels_Icons";
const News_Channels_Icons_Path = "/assets/welcomePage-assets/channels_Icons/News_Channels_Icons";
const Premium_Channels_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Premium_Channels_Icons";
const Sports_AddOn_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Sports_Add-on_Icons";
const Sports_Channels_Icons_Path = "/assets/welcomePage-assets/channels_Icons/Sports_Channels_Icons";

const ChannelsAreaSearcherModal = () => {
  const [zipCodeValue, setZipCodeValue] = useState("");
  const [zipCode, setZipCode] = useState(null);

  const changeZipValue__FUNC = (inputValue) => inputValue.length <= 5 && setZipCodeValue(inputValue);

  const submitZipCodeForm__FUNC = (e) => {
    e.preventDefault();
    const zipCode_InputValue = e.target.zipCode.value;

    zipCode_InputValue.length === 5 && setZipCode(zipCode_InputValue);
  }

  return (
    <Fragment>
      <div className={classes["searchChannelsByZip_content--CONTAINER"]}>
        <h3 className={classes["ChannelsAreaSearcherModal_title--EL"]}>Channels in your area</h3>

        <form className={classes["searchChannelsByZip_form--EL"]} onSubmit={submitZipCodeForm__FUNC}>
            <label htmlFor="zipCode">Enter your home ZIP code for channels available in your area.</label>
            <div className={`f-center-between ${classes["searchChannelsByZip_input--CONTAINER"]}`}>
              <input type="number" onChange={e => changeZipValue__FUNC(e.target.value) } value={zipCodeValue} placeholder="Enter Zip Code" id="zipCode" name="zipCode" required/>
              <button type="submit" className={classes["submitZipForm_btn--EL"]} >submit</button>
            </div>

        </form>
        <p className={classes["searchChannelsByZip_Typo--EL"]}>The channels below are available in your ZIP code for this plan. Live TV is available for those live local, regional, and national channels available in your area, which are subject to change. Select channels may offer only on demand content. Certain channels or content may not be available in all locations or on all devices.</p>


        {
          !!zipCode && (
            <Fragment>
              <hr />

              <div className={classes["channels--CONTAINER"]}>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${EntertainmentAndLifestyle_Channels_Icons_Path}/adult-swim-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${EntertainmentAndLifestyle_Channels_Icons_Path}/ae-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${EntertainmentAndLifestyle_Channels_Icons_Path}/bet-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${EntertainmentAndLifestyle_Channels_Icons_Path}/bravo-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${EntertainmentAndLifestyle_Channels_Icons_Path}/discovery-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${EntertainmentAndLifestyle_Channels_Icons_Path}/e-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${EntertainmentAndLifestyle_Channels_Icons_Path}/fx-network-logo.svg`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Entertainment_AddOn_Icons_Path}/cnbc-world-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Entertainment_AddOn_Icons_Path}/destination-america-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Entertainment_AddOn_Icons_Path}/discovery-life-network-channel.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Entertainment_AddOn_Icons_Path}/mhi-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Entertainment_AddOn_Icons_Path}/mtv2-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Entertainment_AddOn_Icons_Path}/mtv-classic-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Entertainment_AddOn_Icons_Path}/nick-toons-network-logo.png`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Espanolchannels_AddOn_Icons_Path}/discovery-en-espanol-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Espanolchannels_AddOn_Icons_Path}/discovery-familia-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Espanolchannels_AddOn_Icons_Path}/espn-deportes-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Espanolchannels_AddOn_Icons_Path}/fox-deportes-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Espanolchannels_AddOn_Icons_Path}/history-channel-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Espanolchannels_AddOn_Icons_Path}/nbc-universo-network-logo.png`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${FamilyAndKids_Channels_Icons_Path}/boomerang-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${FamilyAndKids_Channels_Icons_Path}/cartoon-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${FamilyAndKids_Channels_Icons_Path}/disney-channel-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${FamilyAndKids_Channels_Icons_Path}/disney-junior-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${FamilyAndKids_Channels_Icons_Path}/disney-xd-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${FamilyAndKids_Channels_Icons_Path}/nickelodeon-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${FamilyAndKids_Channels_Icons_Path}/universal-kids-network-logo.png`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Live_Local_Channels_Icons_Path}/2abc.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Live_Local_Channels_Icons_Path}/11-WBALTV.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Live_Local_Channels_Icons_Path}/abc_Local.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Live_Local_Channels_Icons_Path}/fox-45.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Live_Local_Channels_Icons_Path}/O13.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Live_Local_Channels_Icons_Path}/sports_washington.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Live_Local_Channels_Icons_Path}/sports_washington+.png`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Movies_Channels_Icons_Path}/fxm-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Movies_Channels_Icons_Path}/tcm-network-logo.png`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${News_Channels_Icons_Path}/abc-news-live-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${News_Channels_Icons_Path}/cbs-news-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${News_Channels_Icons_Path}/cheddar-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${News_Channels_Icons_Path}/cnbc-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${News_Channels_Icons_Path}/cnn-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${News_Channels_Icons_Path}/foxbusiness-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${News_Channels_Icons_Path}/msnbc-network-logo.png`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Premium_Channels_Icons_Path}/cinemax-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Premium_Channels_Icons_Path}/hbo-max-logo.jpg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Premium_Channels_Icons_Path}/showtime-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Premium_Channels_Icons_Path}/starz-network-logo.jpg`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_AddOn_Icons_Path}/mavtv-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_AddOn_Icons_Path}/nfl-redzone-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_AddOn_Icons_Path}/outdoor-channel-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_AddOn_Icons_Path}/sportsman-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_AddOn_Icons_Path}/tvg-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_AddOn_Icons_Path}/tvg2-network-logo.png`} alt="" />
                    </div>

                  </div>
                </div>
                <div className={classes["channel_category--EL"]}>
                  <h5 className={classes["channelCategory_title--EL"]}>Live Local Channels</h5>
                  
                  <div className={classes["channelCategoty_networkIcons--CONTAINER"]}>
                    
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_Channels_Icons_Path}/sportsWashington+.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_Channels_Icons_Path}/accn-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_Channels_Icons_Path}/cbs-sports-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_Channels_Icons_Path}/espnews-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_Channels_Icons_Path}/espn-network-logo.png`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_Channels_Icons_Path}/espn2-network-logo.svg`} alt="" />
                    </div>
                    <div className={classes["channelCategoty_networkIcon--CONTAINER"]}>
                      <img src={`${Sports_Channels_Icons_Path}/golf-network-logo.png`} alt="" />
                    </div>

                  </div>
                </div>
              </div>
            </Fragment>
          )
        }
      </div>
    </Fragment>
  )
};

export default ChannelsAreaSearcherModal;
