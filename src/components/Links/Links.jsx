import React, { useState } from 'react';
import './Links.css';
import Cardlist from "../card/Cardlist";

const Links = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showShipping, setShipping] = useState(false);
  const [showCatalog ,  setShowCatalog] =  useState(false)

  const handleOpenCatalog = () => {
    setShowCatalog(!showCatalog);
  }


  const handleAbout = () => {
    setShowAbout(!showAbout);
  }

  const handleShipping = () => {
    setShipping(!showShipping);
  }


  return (
    <section className='content'>
      <ul>
         {/* <li>
            <a href="/#" onClick={handleOpenCatalog} className='link'>
              Catalogo
            </a>
         </li> */}
         <li>
            <a href="/#" onClick={handleAbout} className='link'>
              Quienes somos
            </a>
         </li>
         {/* <li>
            <a href="/#" onClick={handleShipping} className='link'>
              Envios
            </a>
         </li> */}
         <li>
         <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5493516361611" class="link" target="_blank"> 
              <i className="fa-plus"   class="fa fa-whatsapp "></i> 
              WhatsApp
            </a>
         </li>
         <li>
         <a rel="noopener noreferrer" href="https://www.instagram.com/exodigitalcba/" class="link" target="_blank"> 
              <i className="fa-plus"   class="fa fa-instagram "></i> 
              Instagram
            </a>
         </li>
      </ul>
      {showAbout && (
        <div className="popup-link">
          <div className="popup-link-content">
          <h2 className="popup-link-title">Quienes somos</h2>
          <p className="popup-link-text">
            Somos Marketing NO convencional 📣<br></br><br></br>
            

Somos APASIONADOS-DISRUPTIVOS-CREATIVOS✨<br></br><br></br>

Tenés una idea? <br></br>Te ayudamos a explotar al máximo su potencial🚀<br></br><br></br>

Somos Exo Digital 🟣
            </p>
            <button className="popup-link-close-btn" onClick={handleAbout}>Cerrar</button>
          </div>
        </div>
      )}
      {showShipping && (
        <div className="popup-link">
          <div className="popup-link-content">
          <h2 className="popup-link-title">Envios a todo el pais</h2>
          <p className="popup-link-text">
           Realizamos envíos a toda Argentina por Correo Argentino.
           Ofrecemos el envío a domicilio o la sucursal cercana de Correo Argentino.
           La demora de entrega es de <strong> 3 a 6 días hábiles</strong> aproximadamente, como asi el costo de envio,
           depende siempre de la localidad de destino.
            </p>
            <button className="popup-link-close-btn" onClick={handleShipping}>Cerrar</button>
          </div>
        </div>
      )}
      {showCatalog && (
        <div className="popup-link-cards">
          <div className="popup-link-content-cards">
            <Cardlist handleOpenCatalog={handleOpenCatalog} />
          </div>
          
        </div>
      )}
    </section>
  );
};

export default Links;
