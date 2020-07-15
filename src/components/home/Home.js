import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="main promotion banner"
      />
      <div className="home__row">
        <Product
          id="1234"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
        />
        <Product
          id="1234"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
        />
        <Product
          id="1234"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
        />
        <Product
          id="1234"
          title="The Lean Startup: How Constant Innovation Creates"
          price={11.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;