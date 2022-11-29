import './App.css';

import Header from './assets/componentes/layout/Header/Header.js';
import Inicio from './assets/componentes/layout/Inicio/Inicio.js';

import SquaresGM from './assets/componentes/layout/Squares/squares-geminis.js';
import Testament from './assets/componentes/layout/Testamento/testament.js';
import FourIMG from './assets/componentes/layout//Four_Images/four_imgs.js';
import Footer from './assets/componentes/layout/Footer/footer.js';


function App() {
  return (
    <div className="App">
      <Inicio>
      <Header/>
      </Inicio>
 
      <main>
   <SquaresGM/>
   <Testament/>
<FourIMG img1={require("./assets/images/desktop/image-gallery-milkbottles.jpg")}
img2={require("./assets/images/desktop/image-gallery-orange.jpg")}
img3={require("./assets/images/desktop/image-gallery-cone.jpg")}
img4={require("./assets/images/desktop/image-gallery-sugarcubes.jpg")}
/>

      </main>
      <Footer/>
    </div>
  );
}

export default App;
