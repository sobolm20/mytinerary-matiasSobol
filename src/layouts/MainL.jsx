import React from "react";
import Header from "../components/Header/Header.jsx";
import NavBar from "../components/NavBar/Nav.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Main({ children }) {
    return(
        <>
            <Header />
            <NavBar />
            { children }
            <Footer />        
        </>
    )
}

export default Main