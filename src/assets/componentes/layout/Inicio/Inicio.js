import style from "./Inicio.module.css";

import image from "../../../images/desktop/image-header.jpg";
import image_portable from "../../../images/image-header_mobile.jpg";
import arrow from "../../../images/down-arrow.png";


function Inicio(props) {
return(
<article className={style.container}>
{props.children}

<div>
<h1>NÓS SOMOS CRIATIVOS</h1>
<img src={arrow} alt="Seta para baixo"></img>
</div>

<picture>
  <source media="(min-width:768px)" srcset={image}></source>
<img src={image_portable} alt="laranja e fundo azul"></img>
</picture>
</article>
)
}

export default Inicio;