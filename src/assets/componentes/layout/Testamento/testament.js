import {useRef} from "react";

import style from "./testament.module.css";

import Title from "../../reutilizados/title.js";
import Avaliation from "../../reutilizados/avaliation.js";

import arrow from "../../../images/arrow_carrosel.png";





function Testament() {

const carrosel = useRef(null);



    const RollingLeft = () =>{
   carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
   
   
    }

    const RollingRight = () =>{
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
        
         }

    
return(
<article className={style.container}>
<div>
<Title texto="Avaliação De Clientes"/>

<div ref={carrosel}>

<Avaliation type="small" photo={require("../../../images/image-emily.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Emily R." funcao="Diretora Marketing"/>

<Avaliation type="small" photo={require("../../../images/image-thomas.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Thomas S." funcao="Chefe Operacional"/>

<Avaliation type="small" photo={require("../../../images/image-jennie.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Jania F." funcao="Gestão de Negócio"/>

<Avaliation type="small" photo={require("../../../images/image-emily.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Ana L." funcao="Diretora Marketing"/>

<Avaliation type="small" photo={require("../../../images/image-thomas.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Flavio C." funcao="Chefe Operacional"/>

<Avaliation type="small" photo={require("../../../images/image-jennie.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Rosana R." funcao="Gestão de Negócio"/>

<Avaliation type="small" photo={require("../../../images/image-emily.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Carla A." funcao="Diretora Marketing"/>

<Avaliation type="small" photo={require("../../../images/image-thomas.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Gustavo B." funcao="Chefe Operacional"/>

<Avaliation type="small" photo={require("../../../images/image-jennie.jpg")} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." name="Marcia T." funcao="Gestão de Negócio"/>





</div>

<div className={style.arrowC}> 

<img className={style.arrowLeft} src={arrow} alt="Seta Esquerda" onClick={RollingLeft}></img>
<img className={style.arrowRight} src={arrow} alt="Seta Direita" onClick={RollingRight}></img>

</div>

</div>

</article>
)
}


export default Testament;