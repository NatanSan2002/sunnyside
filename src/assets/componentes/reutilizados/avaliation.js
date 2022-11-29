import style from "./avaliation.module.css";

function Avaliation({type,photo,text,name,funcao}) {
return(
<div className={`${style.container} ${style[type]}`}>

<img src={photo} alt="Foto Do Cliente"></img>

<p className={style.texto}> {text} </p>

<h6>{name}</h6>
<p className={style.func}>{funcao}</p>
</div>
)
}


export default Avaliation;