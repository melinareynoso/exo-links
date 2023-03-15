import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './Links.css';

const Links = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showShipping, setShipping] = useState(false);

  const handleOpenAbout = () => {
    setShowAbout(true);
  }

  const handleCloseAbout = () => {
    setShowAbout(false);
  }

  const handleOpenShipping = () => {
    setShipping(true);
  }

  const handleCloseShipping = () => {
    setShipping(false);
  }

  return (
    <section className='content'>
      <ul>
         <li>
         <Link to='/catalogo' className='link'>
            Catalogo
          </Link>
         </li>
         <li>
            <a onClick={handleOpenAbout} className='link'>
              Quienes somos
            </a>
         </li>
         <li>
            <a onClick={handleOpenShipping} className='link'>
              Envios
            </a>
         </li>
         <li>
            <a className='link'>
              WhatsApp
            </a>
         </li>
         <li>
            <a className='link'>
              Instagram
            </a>
         </li>
      </ul>
      {showAbout && (
        <div className="popup-link">
          <div className="popup-link-content">
          <h2 className="popup-link-title">Quienes somos</h2>
          <p className="popup-link-text">Desde 2005, somos una PYME familiar ubicada en Córdoba Capital,
              que se dedica a la comercializacion y distribucion de productos de peluqueria,
              para negocios comerciales o salones de belleza
              Nuestra mision principal es poder distribuir a todos los puntos del pais, 
              los productos de la marca Estereo-Color y Bonmetique, 
              que gracias a su precio/calidad van tomando mas relevancia en el mundo del cuidado capilar
            </p>
            <button className="popup-link-close-btn" onClick={handleCloseAbout}>Cerrar</button>
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
            <button className="popup-link-close-btn" onClick={handleCloseShipping}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Links;
