import style from "./footer.module.css";

import FB from "../../../images/icons/fb-icon.jpg";
import Twitter from "../../../images/icons/twitter-icon.png";
import Insta from "../../../images/icons/insta-icon.jpg";

function Footer(){
return(
<footer className={style.container}>

<h6>sunnyside</h6>
<p>sunnyside - 2022</p>

<div>
<a href="s"><img className={`${style.icon_vertical} ${style.white_img}`} src={FB} alt="Icone Facebook"></img></a>
<a href="s"><img className={style.white_img} src={Insta} alt="Icone Insta"></img></a>
<a href="s"><img src={Twitter} alt="Icone Twitter"></img></a>

</div>
</footer>
)
}

export default Footer;