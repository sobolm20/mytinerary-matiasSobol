import React from "react";
import './Footer.css';
import "bootstrap-icons/icons/youtube.svg"

const Footer = () => {
    return(
        <footer className="pie-pagina">
        <div className="grupo-1">
            <div className="box">
                <figure>
                    <a href="https://mindhublab.com/pluginfile.php/1/theme_moove/favicon/1689006640/favicon.ico" rel="shortcut icon"></a>
                </figure>
            </div>
            <div className="box">
                <h2>FOLOW US</h2>
                <div className="red-social">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i class="bi bi-youtube"></i>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>Argentina Programa</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    )
}

export default Footer 