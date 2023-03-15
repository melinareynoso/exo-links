import React from "react";
import "./cards.css";

export default function Card({ id, title, image , setSelected, setPromotion}) {
  
    const clickHandler = (e) => {
        e.preventDefault();
        setPromotion(undefined)
        setSelected(id);
        
      };

    const clickPromotion = (e) => {
      e.preventDefault();
      setPromotion(true)
      setSelected(id)
      
    }  

    
      return (

    <div id="contenedor" >
            <div className="overflow">
                 <img src={image} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body">
                 <h4 className="card-title">{title}</h4>
                 <div className="card-info" >
                    <ul class="slide-foot">
									    <li>
                        <a href="/#" onClick={clickHandler} >
                          <i className="fa-plus"   class="fa fa-plus "></i> 
                          <span>Más informacion</span>
                        </a>
                      </li>
									    <li>
                        <a href="/#" onClick={clickPromotion} >
                          <i class="fa fa-smile-o "  ></i> 
                          <span>Promociones</span>           
                        </a>
                        
                      </li>
				            </ul>
                 </div>
  
            </div>
    </div>
    
    
  );
}