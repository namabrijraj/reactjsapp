import {UserContext} from '../../App'
import React, { useContext, useEffect, useState } from "react";
import { NavLink , useNavigate} from 'react-router-dom'
import logo from '../../logo.png';
import axios from 'axios';


const Header = () => {
    const {state,dispatch} = useContext(UserContext);
    
    const [categorieslist,setCategorieslist] = useState({});

    const navigate = useNavigate();
    const handleAuth = () => {
        dispatch({type:'USER',user:''})
        navigate('login')
    }
    //console.log(state)

    useEffect(() => {
        getCategories();
    },[])

    const getCategories = async () => {
        const categories = await axios({
            method : 'GET',
            url : 'http://localhost:8000/api/categories',
            responseType : 'json'
        }).then((res)=>{
            setCategorieslist(res.data.categories);   
                     
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    const categoriesData = categorieslist.map((cat) => {
                
    });
    console.log(categoriesData);
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-secondary py-2 px-xl-5">
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-flex align-items-center">
                            <NavLink className="text-dark" to="">FAQs</NavLink>
                            <span className="text-muted px-2">|</span>
                            <NavLink className="text-dark" to="">Help</NavLink>
                            <span className="text-muted px-2">|</span>
                            <NavLink className="text-dark" to="">Support</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <NavLink className="text-dark px-2" to="">
                                <i className="fab fa-facebook-f"></i>
                            </NavLink>
                            <NavLink className="text-dark px-2" to="">
                                <i className="fab fa-twitter"></i>
                            </NavLink>
                            <NavLink className="text-dark px-2" to="">
                                <i className="fab fa-linkedin-in"></i>
                            </NavLink>
                            <NavLink className="text-dark px-2" to="">
                                <i className="fab fa-instagram"></i>
                            </NavLink>
                            <NavLink className="text-dark pl-2" to="">
                                <i className="fab fa-youtube"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center py-3 px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <NavLink to="" className="text-decoration-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                        </NavLink>
                    </div>
                    <div className="col-lg-6 col-6 text-left">
                        <form action="">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search for products" />
                                <div class="input-group-append">
                                    <span class="input-group-text bg-transparent text-primary">
                                        <i class="fa fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 col-6 text-right">
                        <a href="" class="btn border">
                            <i class="fas fa-heart text-primary"></i>
                            <span class="badge">0</span>
                        </a>
                        <a href="" class="btn border">
                            <i class="fas fa-shopping-cart text-primary"></i>
                            <span class="badge">0</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: '65px', marginTop: '-1px', padding: '0 30px'}}>
                            <h6 className="m-0">Categories</h6>
                            <i className="fa fa-angle-down text-dark"></i>
                        </a>
                        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                            <div className="navbar-nav w-100 overflow-hidden" style={{height: '410px'}}>
                                <div className="nav-item dropdown">
                                    <a href="#" class="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                                    <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <NavLink to="" className="dropdown-item">Men's Dresses</NavLink>
                                        <NavLink to="" className="dropdown-item">Women's Dresses</NavLink>
                                        <NavLink to="" className="dropdown-item">Baby's Dresses</NavLink>
                                    </div>
                                </div>                                
                                <NavLink to="" className="nav-item nav-link">Shirts</NavLink>
                                <NavLink to="" className="nav-item nav-link">Jeans</NavLink>
                                <NavLink to="" className="nav-item nav-link">Swimwear</NavLink>
                                <NavLink to="" className="nav-item nav-link">Sleepwear</NavLink>
                                
                            </div>
                        </nav>
                    </div>
                    <div class="col-lg-9">
                        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" class="text-decoration-none d-block d-lg-none">
                                <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                            </a>
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div class="navbar-nav mr-auto py-0">
                                    <a href="index.html" class="nav-item nav-link active">Home</a>
                                    <a href="shop.html" class="nav-item nav-link">Shop</a>
                                    <a href="detail.html" class="nav-item nav-link">Shop Detail</a>
                                    <div class="nav-item dropdown">
                                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <a href="cart.html" class="dropdown-item">Shopping Cart</a>
                                            <a href="checkout.html" class="dropdown-item">Checkout</a>
                                        </div>
                                    </div>
                                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                                </div>
                                <div class="navbar-nav ml-auto py-0">
                                    <a href="" class="nav-item nav-link">Login</a>
                                    <a href="" class="nav-item nav-link">Register</a>
                                </div>
                            </div>
                        </nav>
                        <div id="header-carousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" style={{height: 410}}>
                                    <img class="img-fluid" src="img/carousel-1.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{maxWidth: 700}}>
                                            <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                            <h3 class="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                            <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item" style={{height: 410}}>
                                    <img class="img-fluid" src="img/carousel-2.jpg" alt="Image" />
                                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div class="p-3" style={{maxWidth: 700}}>
                                            <h4 class="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                            <h3 class="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                            <a href="" class="btn btn-light py-2 px-3">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                                <div class="btn btn-dark" style={{width: 45, height: 45}}>
                                    <span class="carousel-control-prev-icon mb-n2"></span>
                                </div>
                            </a>
                            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                                <div class="btn btn-dark" style={{width: 45, height: 45}}>
                                    <span class="carousel-control-next-icon mb-n2"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header