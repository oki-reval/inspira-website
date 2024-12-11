import React  from "react";
import Header from "./header";
import Footer from "./footer";

const ContainerLayout =({children})=>{
    return(
        <div>
            <Header />
            <main>{children}</main>  
            <Footer/>
        </div>
    )
}

export default ContainerLayout