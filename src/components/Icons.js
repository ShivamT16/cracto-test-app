import fox_logo from "../assests/media/fox-logo.png"
import lonely_planet_logo from "../assests/media/lonelyplanet-logo.jpg"
import intuit_logo from "../assests/media/Intuit-logo.png"
import carvana_logo from "../assests/media/carvana-logo.jpg"
import kiva_logo from "../assests/media/kiva-logo.png"
import target_logo from "../assests/media/Target-Logo.jpg"
import devacurl_logo from "../assests/media/devaCurl-logo.png"

export const Icons = () => {
  return (
    <div className="icons-main">
        <img className="icons" src={fox_logo} alt="" />
        <img className="icons" src={lonely_planet_logo} alt="" />
        <img className="icons" src={intuit_logo} alt="" />
        <img className="icons" src={carvana_logo} alt="" />
        <img className="icons" src={kiva_logo} alt="" />
        <img className="icons" src={target_logo} alt="" />
        <img className="icons" src={devacurl_logo} alt="" />
    </div>
  )
}
