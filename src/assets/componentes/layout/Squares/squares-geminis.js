import { useState,useEffect } from "react";

import style from "./squares-geminis.module.css";

import Square from "../../reutilizados/square";




function Squares_Geminis () {



const [Window_size,setWindow_size] = useState(window.innerWidth);


useEffect( () => {

const Resize_Screen = () =>{
setWindow_size(window.innerWidth);
}

window.addEventListener("resize",Resize_Screen);

},[Window_size])





return (
<article className={style.container}>

    



{window.innerWidth > 768 ? (

    <>

<Square classe="text" title="Transforme sua marca" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis. " line="yellow" />
    
    <Square classe="img" img={require('../../../images/desktop/image-transform.jpg')} />

    <Square classe="img" img={require('../../../images/desktop/cup.jpg')} />

<Square classe="text" title="Destaque-se para o público certo" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis." line="red" />


</>
) : (
    <>
<Square classe="img" img={require('../../../images/desktop/image-transform.jpg')} />

<Square classe="text" title="Transforme sua marca" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis. " line="yellow" />


<Square classe="img" img={require('../../../images/desktop/cup.jpg')} />

<Square classe="text" title="Destaque-se para o público certo" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis." line="red" />
</>
)}


<Square classe="dual" title="Graphic Design" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis." img={require("../../../images/desktop/cereja.jpg")} />

<Square classe="dual" title="Fotografia" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis." img={require("../../../images/desktop/mexerica.jpg")} />





</article>
)
}

export default Squares_Geminis;