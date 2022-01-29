import React from "react";
import WhySection from "./WhySection"
import Arrival from "./Arrival"
import Product from "./Product"
import Subscibe from "./Subscribe"
import Client from "./Client"


const Home = () => {
    return (
        <>
            <WhySection />
            <Arrival />
            <Product />
            <Subscibe />
            <Product />
            <Client />
        </>
    )
}

export default Home