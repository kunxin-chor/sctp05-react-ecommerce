import React, {useState, useEffect} from 'react'
import Header from "./Header"

import "./styles.css"
import ProductCard from './ProductCard'

export default function App() {

  const [isNavbarOpened, setNavBarOpen] = useState(false);

  useEffect(()=>{

    const syncNavbar = ()=>{
      if (window.innerWidth >= 992) {
        setNavBarOpen(true);
      } else {
        setNavBarOpen(false);
      }
    }

    // when the window is being resized
    window.addEventListener("resize", syncNavbar);

    return () => {
      window.removeEventListener("resize", syncNavbar);
    }

  }, []);  // the effect function is only ran once when the component is mounted

  const handleNavButtonClick = () => {
    // if (isNavbarOpened){
    //   setNavBarOpen(false);
    // }  else {
    //   setNavBarOpen(true);
    // }

    // setNavBarOpen( isNavbarOpened ? false : true);
    setNavBarOpen(!isNavbarOpened);
  }



  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">E-Shop</a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavButtonClick}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarOpened ? "show" : ""  }`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <Header title="ACME Hardware"/>

    <main className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
        <ProductCard 
           imageUrl="https://picsum.photos/id/1/300/200"
           productName="Anvil"
           price="$100"
         />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/1/300/200"
            productName="Tool Bag"
            price="$50"
          />
        </div>
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/26/300/200"
            productName="Hammer"
            price="$45"
          />
        </div>
        <div className="col-md-3 mb-4">
           <ProductCard
            imageUrl="https://picsum.photos/id/96/300/200"
            productName="Screwdirver"
            price="$13"
            />
        </div>
      </div>
    </main>
    
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>

    </>
  )
}