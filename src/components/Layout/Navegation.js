import React, { Component } from 'react';

class Navegation extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand navbar-light bg-light">
         <div className="container">
         <a className="navbar-brand" href="index.html">Softtekiada</a>
            <div className="collapse navbar-collapse">
         <ul className="navbar-nav ml-auto">
         <li className="nav-item"><a href="domain.html" className="nav-link">Historia</a></li>
         <li className="nav-item"><a href="domain.html" className="nav-link">Disciplinas</a></li>
         <li className="nav-item"><a href="domain.html" className="nav-link">Partidos</a></li>
            <li className="nav-item"><a href="galeria.html" className="nav-link">Galeria</a></li>
            <li className="nav-item"><a href="domain.html" className="nav-link">Redes Sociales</a></li>
         </ul>
         <button type="button" className="btn btn-outline-warning">Login</button>
            </div>
         </div>  
         </nav>
      );
   }
}

export default Navegation;