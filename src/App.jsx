import { useRef, useState } from "react";
import "./App.css";

import backgroundImage from "./assets/transparent (1).png";
import logoImage from "./assets/images.png";

import appleLogo from "./assets/apple-logo.png";
import googleLogo from "./assets/google.png";

import startIcon from "./assets/communication (1).png";
import programIcon from "./assets/communication (1).png";
import artistsIcon from "./assets/music-player (1).png";
import mapIcon from "./assets/location (5).png";
import vendorsIcon from "./assets/cutlery (3).png";
import menuIcon from "./assets/menu.png";

import ticketIcon from "./assets/ticket.png";
import heartIcon from "./assets/heart (4).png";
import trolleyIcon from "./assets/trolley (1).png";

import signalIcon from "./assets/signal (2).png";
import batteryIcon from "./assets/battery (2).png";

import locationSmallIcon from "./assets/location (4).png";
import clockIcon from "./assets/clock (2).png";

import navBg from "./assets/Untitled-2 copy.png";
import heroBg from "./assets/WAFG.png";
import cardFrame from "./assets/Untitled-2.pngg.png";

import vendorFrame from "./assets/asf.png";

import artist1Img from "./assets/images.jpeg";
import artist2Img from "./assets/images (1).jpeg";

import news1Img from "./assets/images (2).jpeg";
import news2Img from "./assets/344228_Bla-sol-festival-foto-Peter-Bay-Isak.jpg";

import vendor1Img from "./assets/360_F_508467148_aA7XU8U62XVYPBnqQntFPZlgXUuBje3R.jpg";
import vendor2Img from "./assets/download (2).jpeg";
import vendor3Img from "./assets/download (3).jpeg";
import vendor4Img from "./assets/download (4).jpeg";
import vendor5Img from "./assets/download (5).jpeg";
import vendor6Img from "./assets/download (6).jpeg";
import vendor7Img from "./assets/download (7).jpeg";

const artists = [
  { title: "Anastasia", image: artist1Img },
  { title: "Benjamin Hav", image: artist2Img },
];

const news = [
  { title: "News about Bla Sol", image: news1Img },
  { title: "About Us", image: news2Img },
];

const vendors = [
  {
    title: "Nordic Smash Burgers",
    category: "food",
    image: vendor1Img,
    distance: "0.3km",
    time: "5-10 min",
  },
  {
    title: "Randers Noodles",
    category: "food",
    image: vendor5Img,
    distance: "1.1km",
    time: "15-18 min",
  },
  {
    title: "Sol Pizza",
    category: "food",
    image: vendor2Img,
    distance: "0.4km",
    time: "8-15 min",
  },
  {
    title: "Loaded Fries Co.",
    category: "food",
    image: vendor6Img,
    distance: "1.6km",
    time: "20-25 min",
  },
  {
    title: "Bla Bar",
    category: "drink",
    image: vendor3Img,
    distance: "0.7km",
    time: "10-15 min",
  },
  {
    title: "Vore's",
    category: "drink",
    image: vendor4Img,
    distance: "1.0km",
    time: "12-18 min",
  },
  {
    title: "Coffee Lab",
    category: "drink",
    image: vendor7Img,
    distance: "1.2km",
    time: "2-3 min",
  },
];

const nordicPopupSections = [
  {
    title: "Burgers",
    items: [
      "Nordic Burger",
      "Special Burger",
      "Premium Burger",
      "Bacon Burger",
      "Double Burger",
    ],
  },
  {
    title: "Sides",
    items: [
      "Chicken Nuggets",
      "Chicken Tenders",
      "Hash Browns",
      "Fries",
    ],
  },
  {
    title: "Drinks",
    items: ["Coca Cola", "Pepsi Max", "Faxe Kondi"],
  },
];

function Card({ title, image }) {
  return (
    <div className="card">
      <div
        className="card-frame"
        style={{
          backgroundImage: `url(${cardFrame})`,
        }}
      >
        <div className="card-photo-wrap">
          <img
            className="card-photo"
            src={image}
            alt={title}
            draggable="false"
          />
        </div>
      </div>

      <p className="card-title">{title}</p>
    </div>
  );
}

function CarouselSection({ title, items }) {
  const carouselRef = useRef(null);

  const drag = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
  });

  const onPointerDown = (e) => {
    if (!carouselRef.current) return;

    drag.current.active = true;
    drag.current.startX =
      e.clientX - carouselRef.current.getBoundingClientRect().left;
    drag.current.scrollLeft = carouselRef.current.scrollLeft;

    try {
      carouselRef.current.setPointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerMove = (e) => {
    if (!drag.current.active || !carouselRef.current) return;

    e.preventDefault();

    const x = e.clientX - carouselRef.current.getBoundingClientRect().left;
    const walk = (x - drag.current.startX) * 1.5;

    carouselRef.current.scrollLeft = drag.current.scrollLeft - walk;
  };

  const stopDrag = () => {
    drag.current.active = false;
  };

  return (
    <section className="section-block">
      <h2 className="section-title">{title}</h2>

      <div
        className="carousel-row"
        ref={carouselRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onPointerLeave={stopDrag}
      >
        {items.map((item) => (
          <Card key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
    </section>
  );
}

function BottomNav({ page, setPage }) {
  return (
    <div
      className="bottom-nav"
      style={{
        backgroundImage: `url(${navBg})`,
      }}
    >
      <button
        className={page === "start" ? "nav-active" : ""}
        onClick={() => setPage("start")}
      >
        <img src={startIcon} alt="" />
        <span>Start</span>
      </button>

      <button>
        <img src={programIcon} alt="" />
        <span>Program</span>
      </button>

      <button>
        <img src={artistsIcon} alt="" />
        <span>Artists</span>
      </button>

      <button>
        <img src={mapIcon} alt="" />
        <span>Map</span>
      </button>

      <button
        className={page === "vendors" ? "nav-active" : ""}
        onClick={() => setPage("vendors")}
      >
        <img src={vendorsIcon} alt="" />
        <span>Vendors</span>
      </button>

      <button
        className={page === "menu" ? "nav-active" : ""}
        onClick={() => setPage("menu")}
      >
        <img src={menuIcon} alt="" />
        <span>Menu</span>
      </button>
    </div>
  );
}

function CheckoutPage({ setPage }) {
  return (
    <div className="checkout-page">
      <button className="checkout-back-btn" onClick={() => setPage("vendors")}>
        Back
      </button>
    </div>
  );
}

function VendorListCard({
  vendor,
  favourites,
  toggleFavourite,
  onOpenNordic,
}) {
  const isFavourite = favourites.some((fav) => fav.title === vendor.title);

  return (
    <div
      className="vendor-list-card"
      onClick={
        vendor.title === "Nordic Smash Burgers"
          ? onOpenNordic
          : undefined
      }
    >
      <div
        className="vendor-list-frame"
        style={{
          backgroundImage: `url(${vendorFrame})`,
        }}
      >
        <img
          src={vendor.image}
          alt={vendor.title}
          className="vendor-list-image"
        />
      </div>

      <div className="vendor-list-bottom">
        <div className="vendor-list-info">
          <div className="vendor-list-title">{vendor.title}</div>

          <div className="vendor-detail-row">
            <img src={locationSmallIcon} alt="" />
            <span>{vendor.distance}</span>
          </div>

          <div className="vendor-detail-row">
            <img src={clockIcon} alt="" />
            <span>{vendor.time}</span>
          </div>
        </div>

        <button
          className={`vendor-heart-btn ${
            isFavourite ? "vendor-heart-active" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavourite(vendor);
          }}
        >
          <img src={heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

function FavouritesPopup({
  open,
  onClose,
  favourites,
  toggleFavourite,
}) {
  if (!open) return null;

  return (
    <div className="vendor-popup-overlay">
      <div className="vendor-popup-shell">
        <div className="vendor-popup">
          <div className="vendor-popup-header">
            <h2 className="vendor-popup-title">FAVOURITES</h2>

            <button
              className="vendor-popup-close"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div className="vendor-popup-scroll">
            {favourites.length === 0 ? (
              <div className="empty-favourites">
                No favourites added yet.
              </div>
            ) : (
              <div className="vendors-list favourites-list">
                {favourites.map((vendor) => (
                  <VendorListCard
                    key={vendor.title}
                    vendor={vendor}
                    favourites={favourites}
                    toggleFavourite={toggleFavourite}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NordicPopupSection({ title, items }) {
  return (
    <section className="nordic-popup-section">
      <h3 className="nordic-popup-section-title">{title}</h3>

      <div className="nordic-popup-grid">
        {items.map((item) => (
          <div key={item} className="nordic-popup-item">
            <div className="nordic-popup-item-image" />

            <div className="nordic-popup-item-text">
              <div className="nordic-popup-item-name">{item}</div>

              <div className="nordic-popup-item-meta">
                Lorem ipsum dolor sit amet
              </div>

              <div className="nordic-popup-item-meta">
                Lorem ipsum dolor sit amet
              </div>
            </div>

            <button className="nordic-popup-plus">
              +
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function VendorPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="vendor-popup-overlay">
      <div className="vendor-popup-shell">
        <div className="vendor-popup">
          <div className="vendor-popup-header">
            <h2 className="vendor-popup-title">
              NORDIC SMASH BURGERS
            </h2>

            <button
              className="vendor-popup-close"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div className="vendor-popup-explore">
            Explore Menu
          </div>

          <div className="vendor-popup-scroll">
            {nordicPopupSections.map((section) => (
              <NordicPopupSection
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VendorsPage({
  setPage,
  favourites,
  toggleFavourite,
  showFavourites,
  setShowFavourites,
}) {
  const [vendorTab, setVendorTab] = useState("all");
  const [showNordicPopup, setShowNordicPopup] = useState(false);

  const filteredVendors =
    vendorTab === "all"
      ? vendors
      : vendors.filter((vendor) => vendor.category === vendorTab);

  return (
    <div className="home-page">
      <div className="fixed-top">
        <div className="iphone-status">
          <span className="status-time">10:58</span>

          <div className="status-icons">
            <img src={signalIcon} alt="" />
            <div className="four-g">4G</div>
            <img src={batteryIcon} alt="" />
          </div>
        </div>

        <div className="top-section">
          <div className="top-bar">
            <div className="top-circle">
              <img src={ticketIcon} alt="" />
            </div>

            <div className="top-logo">
              <div className="top-logo-title">
                BLÅ SOL
              </div>

              <div className="top-logo-date">
                6. JUNI 2026
              </div>
            </div>

            <button
              className="top-circle favourites-btn"
              onClick={() => setShowFavourites(true)}
            >
              <img src={heartIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="vendors-page-content">
        <h1 className="vendors-title">
          Browse Vendors
        </h1>

        <div className="vendors-filter-row">
          <button
            className={`vendor-filter-btn ${
              vendorTab === "all"
                ? "vendor-filter-active"
                : ""
            }`}
            onClick={() => setVendorTab("all")}
          >
            All
          </button>

          <button
            className={`vendor-filter-btn ${
              vendorTab === "food"
                ? "vendor-filter-active"
                : ""
            }`}
            onClick={() => setVendorTab("food")}
          >
            Food
          </button>

          <button
            className={`vendor-filter-btn ${
              vendorTab === "drink"
                ? "vendor-filter-active"
                : ""
            }`}
            onClick={() => setVendorTab("drink")}
          >
            Drink
          </button>
        </div>

        <div className="vendors-results-text">
          Showing {filteredVendors.length} Results
        </div>

        <div className="vendors-list">
          {filteredVendors.map((vendor) => (
            <VendorListCard
              key={vendor.title}
              vendor={vendor}
              favourites={favourites}
              toggleFavourite={toggleFavourite}
              onOpenNordic={() => setShowNordicPopup(true)}
            />
          ))}
        </div>
      </div>

      <button className="checkout-btn" onClick={() => setPage("checkout")}>
        <img src={trolleyIcon} alt="" />
      </button>

      <BottomNav page="vendors" setPage={setPage} />

      <VendorPopup
        open={showNordicPopup}
        onClose={() => setShowNordicPopup(false)}
      />

      <FavouritesPopup
        open={showFavourites}
        onClose={() => setShowFavourites(false)}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}

function StartPage({
  setPage,
  favourites,
  toggleFavourite,
  showFavourites,
  setShowFavourites,
}) {
  return (
    <div className="home-page">
      <div className="fixed-top">
        <div className="iphone-status">
          <span className="status-time">10:58</span>

          <div className="status-icons">
            <img src={signalIcon} alt="" />
            <div className="four-g">4G</div>
            <img src={batteryIcon} alt="" />
          </div>
        </div>

        <div className="top-section">
          <div className="top-bar">
            <div className="top-circle">
              <img src={ticketIcon} alt="" />
            </div>

            <div className="top-logo">
              <div className="top-logo-title">
                BLÅ SOL
              </div>

              <div className="top-logo-date">
                6. JUNI 2026
              </div>
            </div>

            <button
              className="top-circle favourites-btn"
              onClick={() => setShowFavourites(true)}
            >
              <img src={heartIcon} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="hero-box">
          <img src={heroBg} alt="" className="hero-bg" />

          <div className="hero-overlay-box">
            <h2>BLÅ SOL 2026</h2>
            <h3>HAPPENING NOW</h3>
          </div>
        </div>

        <CarouselSection title="ARTISTS" items={artists} />
        <CarouselSection title="NEWS" items={news} />
        <CarouselSection title="FOOD & DRINKS" items={vendors} />
      </div>

      <BottomNav page="start" setPage={setPage} />

      <FavouritesPopup
        open={showFavourites}
        onClose={() => setShowFavourites(false)}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}

function MenuPage({ setPage }) {
  return (
    <div className="menu-page">
      <div className="menu-fixed-top">
        <div className="iphone-status menu-status">
          <span className="status-time">10:58</span>

          <div className="status-icons">
            <img src={signalIcon} alt="" />
            <div className="four-g">4G</div>
            <img src={batteryIcon} alt="" />
          </div>
        </div>

        <div className="menu-title-bar">MENU</div>
      </div>

      <div className="menu-content">
        <div className="menu-profile">
          <div className="menu-profile-text">
            <div className="menu-name">Rasmus Jensen</div>
            <div className="menu-joined">Joined 06.05.2025</div>
          </div>
        </div>
      </div>

      <BottomNav page="menu" setPage={setPage} />
    </div>
  );
}

function LoginPage({ setPage }) {
  return (
    <>
      <img src={backgroundImage} alt="" className="background-image" />

      <div className="overlay" />

      <div className="content">
        <img src={logoImage} alt="" className="logo-image" />

        <h1 className="title">FESTIVAL APP</h1>

        <div className="phone-row">
          <div className="country-box">
            <span className="country-label">Country</span>

            <div className="country-value">🇩🇰 +45</div>
          </div>

          <div className="number-box">
            <input type="text" placeholder="Phone Number" />
          </div>
        </div>

        <p className="or-text">or</p>

        <button className="apple-btn" onClick={() => setPage("start")}>
          <img src={appleLogo} alt="" />
          Continue with Apple
        </button>

        <button className="google-btn" onClick={() => setPage("start")}>
          <img src={googleLogo} alt="" />
          Continue with Google
        </button>

        <p className="privacy">Privacy Statement</p>
      </div>
    </>
  );
}

/*function CheckoutPage({ setPage }) {
  return <div className="checkout-page" />;
}*/

export default function App() {
  const [page, setPage] = useState("login");
  const [showFavourites, setShowFavourites] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (vendor) => {
    const exists = favourites.some((fav) => fav.title === vendor.title);

    if (exists) {
      setFavourites(favourites.filter((fav) => fav.title !== vendor.title));
    } else {
      setFavourites([...favourites, vendor]);
    }
  };

  return (
    <div className="app">
      <div className="phone">
        {page === "login" && <LoginPage setPage={setPage} />}

        {page === "start" && (
          <StartPage
            setPage={setPage}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            showFavourites={showFavourites}
            setShowFavourites={setShowFavourites}
          />
        )}

        {page === "vendors" && (
          <VendorsPage
            setPage={setPage}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            showFavourites={showFavourites}
            setShowFavourites={setShowFavourites}
          />
        )}

        {page === "menu" && <MenuPage setPage={setPage} />}

        {page === "checkout" && <CheckoutPage setPage={setPage} />}
      </div>
    </div>
  );
}