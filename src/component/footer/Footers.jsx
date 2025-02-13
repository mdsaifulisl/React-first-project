import React from 'react';
import "./footer.css";
import Headers from '../header/Headers';
import Img from "../../assets/images/able";


const footers = () => {
    return (
        <>
        <div className="footer py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <img src={Img.Footerlogo} alt="" />
                        <p className="p pt-5">In the new era of technology we look a in the future with certainty and pride to for our company and.</p>

                        <div className="s_icon mt-5">
                            <a href="#" className="social-icon"><i class="fa-brands fa-twitter"></i></a >
                            <a href="#" className="social-icon"><i class="fa-brands fa-facebook"></i></a >
                            <a href="#" className="social-icon"><i class="fa-brands fa-instagram"></i></a >

                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer_link">
                            <h3 className='mb-3'>Page</h3>

                            <div className="footer_page">
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Menu</a>
                                <a href="#">Pricing</a>
                                <a href="#">Blog</a>
                                <a href="#">Contact</a>
                                <a href="#">Delivery</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer_link">
                            <h3 className='mb-3'>Utility Pages</h3>
                            <div className="footer_page">
                                <a href="#">Start Here</a>
                                <a href="#">Styleguide</a>
                                <a href="#">Password Protected</a>
                                <a href="#">404 Not Found</a>
                                <a href="#">Licenses</a>
                                <a href="#">Changelog</a>
                                <a href="#">View More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 footer_end">
                        <h3>Follow Us On Instagram</h3>

                        <div className="footer_img mt-4">
                            <div className="footer_t_img">
                                <div>
                                    <img src={Img.Footerimg} alt="" />
                                </div>
                                <div>
                                    <img src={Img.Footerimg2} alt="" />
                                </div>
                                
                            </div>
                            <div className="footer_t_img">
                                <div>
                                    <img src={Img.Footerimg3} alt="" />
                                </div>
                                <div>
                                    <img src={Img.Footerimg4} alt="" />
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
            
        </>
    );
};

export default footers;