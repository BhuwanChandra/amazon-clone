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
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries"
          price={11.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
        />
        <Product
          id="1234"
          title="Echo Plus (2nd Gen) – Premium sound, powered by Dolby, built-in Smart Home hub (Grey)"
          price={149.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries"
          price={11.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
        />
        <Product
          id="1234"
          title="Echo Plus (2nd Gen) – Premium sound, powered by Dolby, built-in Smart Home hub (Grey)"
          price={149.99}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="1234"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Eric Ries"
          price={11.95}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PAIR77wJL._SL500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
