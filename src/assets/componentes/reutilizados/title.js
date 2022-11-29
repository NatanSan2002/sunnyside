import style from "./title.module.css";

function Title({texto}) {
return(
<h6 className={style.title}>{texto}</h6>
)
}


export default Title;