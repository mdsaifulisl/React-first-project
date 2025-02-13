import React from "react";
import { useRef } from "react";
import "./Home.css";
import Headers from "../../component/header/Headers";
import Img from "../../assets/images/able";

import Footers from "../../component/footer/Footers";

const Home = () => {

  const sliderRef = useRef(null);
  const handleWheel = (evt, sliderRefs) => {
    evt.preventDefault();
    sliderRefs.current.scrollLeft += evt.deltaY;
  };

  return (
    <>
      <div>
        <Headers />
      </div>
      <div style={{ paddingTop: "7rem" }}></div>

      {/* Hero */}
      <div className="hero">
        <div className="container">
          <div className="hero_content">
            <div className="heading">Best food for your taste</div>
            <p className="mb-2">
              Discover delectable cuisine and unforgettable moments in our
              welcoming, culinary haven.
            </p>

            <div className="hero_btn mt-3">
              <a href="#" className="a">
                Book A Table
              </a>
              <a href="#" className="a">
                Explore Menu
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero end */}



      {/* Browse Our Menu */}
      <div className="container my-5 py-5">
        <div className="browse_menu">
          <div className="browse_menu_heading text-center">
            <h2> Browse Our Menu</h2>
          </div>

          <div className="browse_menu_items">
            <div className="row g-4 mt-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="menu text-center">
                  <img className="mb-3" src={Img.Menu1} alt="" />
                  <h3 className="pb-2">Breakfast</h3>
                  <p className="p pb-4">
                    In the new era of technology we look in the future with
                    certainty and pride for our life.
                  </p>
                  <a href="#" className="a">
                    Explore Menu
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="menu text-center">
                  <img className="mb-3" src={Img.Menu2} alt="" />
                  <h3 className="pb-2">Main Dishes</h3>
                  <p className="p pb-4">
                    In the new era of technology we look in the future with
                    certainty and pride for our life.
                  </p>
                  <a href="#" className="a">
                    Explore Menu
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="menu text-center">
                  <img className="mb-3" src={Img.Menu3} alt="" />
                  <h3 className="pb-2">Drinks</h3>
                  <p className="p pb-4">
                    In the new era of technology we look in the future with
                    certainty and pride for our life.
                  </p>
                  <a href="#" className="a">
                    Explore Menu
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="menu text-center">
                  <img className="mb-3" src={Img.Menu4} alt="" />
                  <h3 className="pb-2">Desserts</h3>
                  <p className="p pb-4">
                    In the new era of technology we look in the future with
                    certainty and pride for our life.
                  </p>
                  <a href="#" className="a">
                    Explore Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Browse Our Menu End */}



      {/* We provide healthy food for your family. */}
      <div className="provide my-5">
        <div className="container">
          <div className="row g-5 mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="provide_contact">
                <div className="contact_items">
                  <h3 className="pb-3">Come and visit us</h3>

                  <div className="icon_address mb-2">
                    <i class="fa-solid fa-phone"></i>
                    <p className="p">(414) 857 - 0107</p>
                  </div>
                  <div className="icon_address mb-2">
                    <i class="fa-regular fa-envelope"></i>
                    <p className="p">happytummy@restaurant.com</p>
                  </div>
                  <div className="icon_address mb-2">
                    <i class="fa-solid fa-location-dot"></i>
                    <p className="p">
                      837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="provide_content">
                <h2>We provide healthy food for your family.</h2>
                <p>
                  Our story began with a vision to create a unique dining
                  experience that merges fine dining, exceptional service, and a
                  vibrant ambiance. Rooted in city's rich culinary culture, we
                  aim to honor our local roots while infusing a global palate.
                </p>
                <p className="p">
                  At place, we believe that dining is not just about food, but
                  also about the overall experience. Our staff, renowned for
                  their warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>

                <div className="mt-3">
                  <a href="#" className="btns">
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* We provide healthy food for your family. End */}



      {/* We also offer unique services for your events */}
      <div className="services my-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="services_heading">
                We also offer unique services for your events
              </h2>
            </div>
          </div>

          <div className="services_slider mt-5">
            <div
              className="services_items"
              onWheel={(e) => handleWheel(e, sliderRef)}
              ref={sliderRef}
            >
              <div className="services_box">
                <img src={Img.services} alt="" />
                <h3 className="mt-3">Caterings</h3>
                <p className="p">
                  In the new era of technology we look in the future with
                  certainty for life.
                </p>
              </div>
              <div className="services_box">
                <img src={Img.services2} alt="" />
                <h3 className="mt-3">Birthdays</h3>
                <p className="p">
                  In the new era of technology we look in the future with
                  certainty for life.
                </p>
              </div>
              <div className="services_box">
                <img src={Img.services3} alt="" />
                <h3 className="mt-3">Weddings</h3>
                <p className="p">
                  In the new era of technology we look in the future with
                  certainty for life.
                </p>
              </div>

              <div className="services_box">
                <img src={Img.services4} alt="" />
                <h3 className="mt-3">Events</h3>
                <p className="p">
                  In the new era of technology we look in the future with
                  certainty for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  We also offer unique services for your events. End */}



      {/* Fastest Food Delivery in City. Start */}
      <div className="fastest_food my-5">
        <div className="container">
          <div className="row flex-row-reverse g-5">

          <div className="col-lg-6">
              <div className="food_content">
                <h2>Fastest Food Delivery in City</h2>
                <p>Our visual designer lets you quickly and of drag a down your way to customs for both keep desktop. </p>
                
              </div>
            </div>


            <div className="col-lg-6">
                <div className="food_img">
                  <div className="food_shaef">
                    <img src={Img.Food} alt="" />
                  </div>
                  

                  <div className="food_img_all mt-3">
                    <img src={Img.Food2} alt="" />
                    <img src={Img.Food3} alt="" />
                  </div>

                </div>

            </div>

          </div>
        </div>
      </div>
      {/* Fastest Food Delivery in City. End */}



      {/* What Our Customers Say. Start */}
      <div className="our_customer my-5 py-5">
        <div className="container">

          <div className="our_customer_heading text-center mb-5">
            <h2>What Our Customers Say</h2>
          </div>

          <div className="row g-3">

            <div className="col-lg-4 col-md-6">
              <div className="customer_content">
                <div className="customer_i">
                  <h3 className="mb-3">“The best restaurant”</h3>
                  <p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
                </div>
                <div className="customer_id pt-3">
                  <img src={Img.Customers} alt="" />
                  <div className="cus_name">
                    <p className="bold">Sophire Robson</p>
                    <p className="p">Los Angeles, CA</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="col-lg-4 col-md-6">
              <div className="customer_content">
                <div className="customer_i">
                  <h3 className="mb-3">“Simply delicious”</h3>
                  <p>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
                </div>
                <div className="customer_id pt-3">
                  <img src={Img.Customers2} alt="" />
                  <div className="cus_name">
                    <p className="bold">Matt Cannon</p>
                    <p className="p">San Diego, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="customer_content">
                <div className="customer_i">
                  <h3 className="mb-3">“One of a kind restaurant”</h3>
                  <p>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
                </div>
                <div className="customer_id pt-3">
                  <img src={Img.Customers3} alt="" />
                  <div className="cus_name">
                    <p className="bold">Andy Smith</p>
                    <p className="p">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
      {/* What Our Customers Say. End */}



      {/* Our Blog & Articles. Start */}
      <div className="article mt-5 py-5">
        <div className="container">

          <div className="article_heading text-center mb-5">
            <h2>Our Blog & Articles</h2>
            <a href="#" className="btns2 a">Read All Articles</a>
          </div>

          <div className="row g-3 my-5">
            <div className="col-lg-6">
              <div className="article_item">
                <div className="article_img">
                  <img src={Img.Articles} alt="" />
                </div>
                <div className="article_content mt-5">
                  <p className="p pb-3">January 3, 2023</p>
                  <p className="pp bold pb-3">The secret tips & tricks to prepare a perfect burger & pizza for our customers</p>
                  <p className="p">Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.</p>
                </div>
              </div>
            </div>


            <div className="col-lg-6">
              <div className="article_items">

                <div className="article_box">
        
                  <div className="article_imgs">
                    <img src={Img.Articles2} alt="" />
                    <div className="article_content mt-3">
                      <p className="p pb-3">January 3, 2023</p>
                      <p className="pp bold pb-3">How to prepare the perfect french fries in an air fryer</p>
                    </div>
                  </div>

                  <div className="article_imgs">
                    <img src={Img.Articles3} alt="" />
                    <div className="article_content mt-3">
                      <p className="p pb-3">January 3, 2023</p>
                      <p className="pp bold pb-3">How to prepare delicious chicken tenders</p>
                    </div>
                  </div>
                </div>


                <div className="article_box">
        
                  <div className="article_imgs">
                    <img src={Img.Articles4} alt="" />
                    <div className="article_content mt-3">
                      <p className="p pb-3">January 3, 2023</p>
                      <p className="pp bold pb-3">7 delicious cheesecake recipes you can prepare</p>
                    </div>
                  </div>

                  <div className="article_imgs">
                    <img src={Img.Articles5} alt="" />
                    <div className="article_content mt-3">
                      <p className="p pb-3">January 3, 2023</p>
                      <p className="pp bold pb-3">5 great pizza restaurants you should visit this city</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>




        </div>
      </div>
      {/* Our Blog & Articles. End */}

      {/* Footer */}
      <Footers />
      



    </>
  );
};

export default Home;
