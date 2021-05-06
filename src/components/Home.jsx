import React from 'react';
import Product from './Product';

import './Home.css';

function Home() {
  return (
    <main className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner prime video"
        />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Buisinesses Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.__AC_SY400__.jpg"
            price={19.99}
            rating={3}
          />
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/514RLGf4c%2BL._AC_SX679_.jpg"
            price={239.0}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Nintendo Switch avec paire de Joy-Con Rouge N&eacute;on et Bleu N&eacute;on"
            image="https://images-na.ssl-images-amazon.com/images/I/71r5EDssKdL._AC_SX679_.jpg"
            price={329.99}
            rating={5}
          />
          <Product
            title="6 Pin PCI-e 1X to 16X Carte d'adaptateur de Riser Amplifi&eacute;e &amp"
            image="https://images-na.ssl-images-amazon.com/images/I/81A0nbQZyuL._AC_SX679_.jpg"
            price={29.99}
            rating={4}
          />
          <Product
            title="Regarder Pour des hommes - Skagen SKT5200"
            image="https://images-na.ssl-images-amazon.com/images/I/61hyvKdIClL._AC_UX522_.jpg"
            price={254.64}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title='Dell S2721D &Eacute;cran de PC 27" Quad HD IPS 75 Hz AMD FreeSync, Argent'
            image="https://images-na.ssl-images-amazon.com/images/I/819hVHPVu-L._AC_SX679_.jpg"
            price={249.99}
            rating={4}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
