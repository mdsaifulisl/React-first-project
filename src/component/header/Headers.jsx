import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/images/able";
import "./header.css";
import { useState, useEffect } from "react";
const Headers = () => {
  const [menu, setMenu] = useState("");
  const [headerTop, setHeaderTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderTop(false); 
      } else {
        setHeaderTop(true); 
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <>
      <header>
        <div className={`header_t opp ${headerTop ? "" : "hide"}`}>
          <div className="container">
            <div className="header__top">
              <div className="ht__left">
                <div className="ht__contact__icon">
                  <i className="fa-solid fa-phone"></i>
                  <p className="p">(414) 857 - 0107</p>
                </div>
                <div className="ht__contact__icon">
                  <i className="fa-regular fa-envelope"></i>
                  <p className="p">yummy@bistrobliss</p>
                </div>
              </div>

              <div className="ht__left ht__right">
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="main__header pt-2">
          <div className="container">
            <div className="header">
              <div className="header__logo">
                <a href="#">
                  <img src={Img.Logo} alt="Logo" />
                </a>
              </div>

              <nav className={`nav ${ isMenuOpen ? "open" : ""}`}>
                <ul className="nav__list">
                  <li
                    onClick={() => setMenu("home")}
                    className={menu === "home" ? "active" : ""}
                  >
                    Home
                  </li>
                  <li
                    onClick={() => setMenu("about")}
                    className={menu === "about" ? "active" : ""}
                  >
                    About
                  </li>
                  <li
                    onClick={() => setMenu("menu")}
                    className={menu === "menu" ? "active" : ""}
                  >
                    {" "}
                    Menu
                  </li>
                  <li
                    onClick={() => setMenu("page")}
                    className={menu === "page" ? "active" : ""}
                  >
                    Page
                  </li>
                  <li
                    onClick={() => setMenu("contact")}
                    className={menu === "contact" ? "active" : ""}
                  >
                    Contact
                  </li>

                  <a href="#" className="nev_book_list a">
                    Book A Table
                  </a>
                </ul>
              </nav>

              <div className="book_a_table">
                <a href="#" className="book_a_table__link a">
                  Book A Table
                </a>

                <i className={`fa-solid ${ isMenuOpen ? "fa-xmark" : "fa-bars"} `} onClick={toggleMenu}></i>              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};


export default Headers;







