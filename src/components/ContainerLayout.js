import React  from "react";
import Header from "./header";
import Footer from "./footer";
import '../App.css';

const ContainerLayout =({children})=>{
    return(
        <div className="container" >
            <Header />
            <main>{children}</main>  
            <Footer/>
        </div>
    )
}

export default ContainerLayout