import style from "./square.module.css";

function Square({classe,img,title,texto,line}) {

return(
<div className={style.container}>
{classe == "dual" ? (

<div className={style.dual}>
<img src={img} alt="imagem ilustrativa"></img>
<div className={style.center}>
<h6>{title}</h6> 
<p>{texto}</p>
</div>
</div>

): ("")}
{classe == "img" ? (
<img src={img} alt="imagem ilustrativa"></img>
) : ("")}
{classe == "text" ? (
<div className={style[classe]}> 
<h6>{title}</h6> 
<p>{texto}</p>
<div className={style.effect}> 
<a href="s"><p className={style.more}>SAIBA MAIS</p></a>
<div className={style[line]}> </div>
</div>

</div>
): ("")
}


</div>
)
}

export default Square;