import {useRef,useState,useEffect} from "react";

import style from "./Header.module.css";

import Button from "../../reutilizados/button.js";

import bars from "../../../images/bars.png"

function Header() {

const fullscreen_menu = useRef(null);

let state_menu = false;

const Exibir_menuMobile = (e) =>{
e.preventDefault();
if(state_menu == false){
fullscreen_menu.current.style.display = "flex";
state_menu = true;
}else{
fullscreen_menu.current.style.display = "none";
state_menu = false;
}
} 

const [largura,Setlargura] = useState(window.innerWidth);

const Func_Setlargura = () =>{
Setlargura(window.innerWidth);
}

useEffect(() => {
window.addEventListener("resize",Func_Setlargura);

if(largura > 924){
fullscreen_menu.current.style.display = "flex";
}else{
    fullscreen_menu.current.style.display = "none";
}
},[largura])

return(

<header className={style.container}>
<nav>
<h6>sunnyside</h6> 

<div className={style.itens} ref={fullscreen_menu}>
<a href="a"> Sobre </a>
<a href="a"> Serviços </a>
<a href="a"> Projetos </a>

<Button texto={"CONTATO"}/>

</div>

<div className={style.mobile_menu} onClick={Exibir_menuMobile}>
<img src={bars} alt="Barras Menu Mobile"></img>
</div>
</nav>
</header>
)
}


export default Header;