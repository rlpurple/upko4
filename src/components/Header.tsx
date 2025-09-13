import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {toggleCart} from "../store/cartSlice";
import upkoLogo from "../assets/upko_logo.png";
import {Link} from "react-router-dom";

// SVG icons from Figma (inline)
const IconHeart = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 19C11 19 3 13.5 3 8.5C3 5.5 5.5 3 8.5 3C10.1 3 11 4.5 11 4.5C11 4.5 11.9 3 13.5 3C16.5 3 19 5.5 19 8.5C19 13.5 11 19 11 19Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);
const IconCart = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="19" r="1.5" fill="currentColor" />
    <circle cx="16" cy="19" r="1.5" fill="currentColor" />
    <path
      d="M2 2H4L6.68 14.39C6.87 15.28 7.63 16 8.54 16H17.5C18.33 16 19.04 15.36 19.18 14.54L20.54 6.54C20.68 5.72 20.04 5 19.22 5H5.21"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const navLinkBase =
  "no-underline font-normal text-[14px] transition-colors duration-200 text-white hover:text-hero-hover mr-[20px]";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const {items} = useSelector((state: RootState) => state.cart);
  const itemsCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const { items: wishlistItems } = useSelector((state: RootState) => state.wishlist);
  const wishlistCount = wishlistItems.length;

  return (
    <>
      <style>{`
        .hover\\:text-hero-hover:hover {
          color: #ede8cc !important;
        }
        @keyframes t4s-icon-pop {
          0% { transform: scale(1) rotate(0deg);}
          10% { transform: scale(0.9) rotate(-3deg);}
          20% { transform: scale(1.15) rotate(-7deg);}
          30% { transform: scale(0.95) rotate(-9deg);}
          50% { transform: scale(1.05) rotate(-7deg);}
          57% { transform: scale(1) rotate(0deg);}
          100% { transform: scale(1) rotate(0deg);}
        }
        .icon-animate-parent:hover svg {
          animation: t4s-icon-pop .6s cubic-bezier(.25,.1,.25,1) 1;
        }
      `}</style>
      <header className="bg-[#574b35] text-white w-full min-h-[99px] px-[20px]">
        <div className="flex items-center justify-between w-full h-[99px] ">
          {/* Left: Navigation */}
          <nav className="flex gap-7 flex-1">
            <Link to="/" className={`${navLinkBase} `}>
              Home
            </Link>
            <Link to="/products" className={navLinkBase}>
              Products
            </Link>
            <Link to="/product/upko-gift-card/83" className={navLinkBase}>
              Gift Card
            </Link>
            <Link to="/about-us" className={navLinkBase}>
              About us
            </Link>
          </nav>
          {/* Center: Logo */}
          <div className="flex justify-center items-center w-[220px] h-full py-1 px-4 box-border ml-12">
            <img
              src={upkoLogo}
              alt="UPKO logo"
              className="h-full object-contain drop-shadow"
              style={{filter: "drop-shadow(0 1px 2px #0008)"}}
            />
          </div>
          {/* Right: Icons */}
          <div className="flex gap-7 items-center flex-1 justify-end ml-16">
            <Link
              to="/wishlist"
              title="Wishlist"
              className="icon-animate-parent text-white flex items-center ml-[20px] transition-colors duration-200 hover:text-hero-hover relative"
              style={{color: "white"}}
            >
              <IconHeart />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#c6b491] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => dispatch(toggleCart())}
              title="Cart"
              className="icon-animate-parent text-white flex items-center transition-colors duration-200 hover:text-hero-hover relative cart-button"
              style={{color: "white"}}
            >
              <IconCart />
              {itemsCount > 0 && (
                <span className="absolute -top-0 right-1 bg-[#c6b491] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
