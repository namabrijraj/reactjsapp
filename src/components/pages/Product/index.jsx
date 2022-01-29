import React, { useEffect, useState } from "react"
import axios from "axios"

const Product = () => {

    const [products,setProducts] = useState({})

    useEffect(() => {
        getProduct()
    },[])

    const getProduct = async () => {
        const result = await axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',
            responseType: 'json'
        })
        .then((res) => {
            setProducts(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <h3>Product Grid</h3>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="product_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                    <h2>
                        Our <span>products</span>
                    </h2>
                    </div>
                    <div className="row">
                    {
                        products.map((data) => {
                            return  (
                                <div className="col-sm-6 col-md-4 col-lg-3" key={data.id}>
                                    <div className="box">
                                        <div className="option_container">
                                            <div className="options">
                                            <a href="" className="option1">
                                            Add To Cart
                                            </a>
                                            <a href="" className="option2">
                                            Buy Now
                                            </a>
                                            </div>
                                        </div>
                                        <div className="img-box">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                            {data.title}
                                            </h5>
                                            <h6>
                                            ${data.price}
                                            </h6>
                                        </div>
                                    </div>
                                </div> )
                            
                        })
                    }
                    </div>
                    <div className="btn-box">
                    <a href="">
                    View All products
                    </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product