import style from "./four_imgs.module.css";

function Four_Imgs({img1,img2,img3,img4}){
return(
<article className={style.container}>
<img src={img1} alt="Imagem Ilustrativa"></img>
<img src={img2} alt="Imagem Ilustrativa"></img>
<img src={img3} alt="Imagem Ilustrativa"></img>
<img src={img4} alt="Imagem Ilustrativa"></img>
</article>
)
}

export default Four_Imgs;