import { useState } from "react";
import "./FeaturedProductsSection.css";
import { Link } from 'react-router-dom';

const products = [
  // 
  {
    img: "/images/model-2_grande.webp",
    name: "UPKO Luxury BDSM Vertical Trunk Kit",
    hoverImg: "https://www.upkoofficialshop.com/cdn/shop/files/UPKO_14_-1.jpg",
    oldPrice: "$1,699.99",
    price: "$1,499.99",
    discount: "-12%",
    tab: 'Gift Sets',
    slug: "upko-luxury-bdsm-vertical-trunk-kit",
    index: 2
  },
  {
    img: "/images/upko-14-2.jpg",
    name: "UPKO Sade Trunk",
    hoverImg: "https://www.upkoofficialshop.com/cdn/shop/products/LEE_6885.jpg",
    oldPrice: "$611.10",
    price: "$549.99",
    discount: "-10%",
    tab: 'Gift Sets',
    slug: "upko-sade-trunk",
    index: 1
  },
  {
    img: "/images/wechatimg258.jpg",
    name: "UPKO Leather Kinky Tools Set",
    hoverImg: "https://www.upkoofficialshop.com/cdn/shop/files/WechatIMG262.jpg",
    oldPrice: "$611.10",
    price: "$549.99",
    discount: "-10%",
    tab: 'Gift Sets',
    slug: "upko-leather-kinky-tools-set",
    index: 31,
  },
  {
    img: "/images/1_2b0f5d8f.jpg",
    name: "Black Label Deluxe Kit",
    hoverImg: "https://www.upkoofficialshop.com/cdn/shop/products/1200.jpg",
    oldPrice: "$1,699.99",
    price: "$1,499.99",
    discount: "-12%",
    tab: 'Gift Sets',
    slug: "black-label-deluxe-kit",
    index: 32,
  },

  //
  {
    img: "/product-images/34_3_76bf607d-815d-4812-ae8e-1a994f3743a0.jpg",
    name: "UPKO Leather Thigh Cuffs",
    hoverImg: "/product-images-hover/34_6_e5db0095-af82-4c50-b97c-12fac88276e6.jpg",
    oldPrice: "$122.21",
    price: "$109.99",
    discount: "-10%",
    tab: 'Bondage',
    slug: "upko-leather-thigh-cuffs",
    index: 34,
  },
  {
    img: "/product-images/33_model-2_f296ea5d-3274-4215-bf47-b0bfea6da823.jpg",
    name: "UPKO Bondage Boutique Leather Hogtie",
    hoverImg: "/product-images-hover/33_detail.jpg",
    oldPrice: "$77.77",
    price: "$69.99",
    discount: "-10%",
    tab: 'Bondage',
    slug: "upko-leather-spanking-paddle",
    index: 35,
  },
  {
    img: "/product-images/55_1371.jpg",
    name: "Your Name Collection-Choker(Letters should be purchased separately)",
    hoverImg: "/product-images-hover/55_SKU2.jpg",
    oldPrice: "$102.21",
    price: "$91.99",
    discount: "-10%",
    tab: 'Bondage',
    slug: "your-name-collection-choker-letters-should-be-purchased-separately",
    index: 55,
  },
  {
    img: "/product-images/46_3_a973f921-1a21-4cde-a6a2-e466844fd781.jpg",
    hoverImg: "/product-images-hover/46_4_2951d8ba-0777-4b57-85db-8089c6ecd43d.jpg",
    name: "UPKO Leather Thin choker",
    oldPrice: "$55.54",
    price: "$49.99",
    discount: "-10%",
    tab: 'Bondage',
    slug: "upko-leather-thin-choker",
    index: 46,
  },

  //
  {
    img: "/product-images/36_10_1024x_1070fc70-41da-4872-90b7-764b329d1119.webp",
    name: "UPKO Leather Flogger",
    hoverImg: "/product-images-hover/36_6391ace427ade714b70fb966024ae804.jpg",
    oldPrice: "$155.54",
    price: "$139.99",
    discount: "-10%",
    tab: 'Spanking',
    slug: "upko-leather-flogger",
    index: 36,
  },
  {
    img: "/product-images/37_6_7807538b-043b-46c1-ba14-a241891ee462.jpg",
    hoverImg: "/product-images-hover/37_2_14d12cbf-257d-46d8-a852-2855a61a860e.jpg",
    name: "UPKO Spanking Stick",
    oldPrice: "$55.54",
    price: "$49.99",
    discount: "-10%",
    tab: 'Spanking',
    slug: "upko-spanking-stick",
    index: 37,
  },
  {
    img: "/product-images/39_7_1024x_2c3d216b-c55a-491c-aaa3-3cea3ae18874.webp",
    hoverImg: "/product-images-hover/39_1_893018a2-a491-4028-8a1b-29fdd9011509.jpg",
    name: "UPKO Leather Riding Crop",
    oldPrice: "$133.32",
    price: "$119.99",
    discount: "-10%",
    tab: 'Spanking',
    slug: "upko-leather-riding-crop",
    index: 39,
  },
  {
    img: "/product-images/26_22.jpg",
    hoverImg: "/product-images-hover/26_UPKOLeatherSoftWhip.jpg",
    name: "UPKO Leather Soft Whip",
    oldPrice: "$144.43",
    price: "$129.99",
    discount: "-10%",
    tab: 'Spanking',
    slug: "upko-leather-soft-whip",
    index: 26,
  },

  //
  {
    img: "/product-images/59_WechatIMG250.jpg",
    name: "Desire for Mouth Bondage Collection-Dildo-shaped Mouth Gag",
    hoverImg: "/product-images-hover/59_Productphoto-1-black_85d198a0-25ce-4eb3-a4de-6b0baecc6b88.jpg",
    oldPrice: "$69.99",
    price: "$49.99",
    discount: "-10%",
    tab: 'Gags',
    slug: "desire-for-mouth-bondage-collection-dildo-shaped-mouth-gag",
    index: 59,
  },
  {
    img: "/product-images/58_WechatIMG248.jpg",
    name: "Desire for Mouth Bondage Collection-Middle Heart-shaped Breathable Mouth Gag",
    hoverImg: "/product-images-hover/58_Productphoto-1-red_bf873379-e3ef-42ec-8905-6c9ac1f0739d.jpg",
    oldPrice: "$69.99",
    price: "$49.99",
    discount: "-10%",
    tab: 'Gags',
    slug: "desire-for-mouth-bondage-collection-middle-heart-shaped-breathable-mouth-gag",
    index: 58,
  },
  {
    img: "/product-images/60_WechatIMG251.jpg",
    name: "Desire for Mouth Bondage Collection-Knot-shaped Mouth Gag",
    hoverImg: "/product-images-hover/60_Collectivephoto-1.jpg",
    oldPrice: "$69.99",
    price: "$49.99",
    discount: "-10%",
    tab: 'Gags',
    slug: "desire-for-mouth-bondage-collection-knot-shaped-mouth-gag",
    index: 60,
  },
  {
    img: "/product-images/24_UPKOInvisiblemouthgag.jpg",
    hoverImg: "/product-images-hover/24_model-1.jpg",
    name: "UPKO Invisible Mouth Gag",
    oldPrice: "$88.88",
    price: "$79.99",
    discount: "-10%",
    tab: 'Gags',
    slug: "upko-invisible-mouth-gag",
    index: 24,
  },

    //
  {
    img: "/product-images/54_2_04.jpg",
    hoverImg: "/product-images-hover/54_1_eb1bff04-03f0-4d71-9550-a7b308863b94.jpg",
    name: "UPKO Black Overbust Corset",
    oldPrice: "$110.99",
    price: "$79.99",
    discount: "-10%",
    tab: 'Fetish Wear',
    slug: "upko-black-overbust-corset",
    index: 54,
  },
  {
    img: "/product-images/64_1200_6af0ab83-ab2c-4d51-a253-546ac1d72081.jpg",
    hoverImg: "/product-images-hover/64_2_ef8ec4ad-7f68-4082-84a4-69b1e6833de5.jpg",
    name: "UPKO Role Play Costume Collection-Bunny Girl Bodysuit Set",
    oldPrice: "$105.54",
    price: "$89.00",
    discount: "-10%",
    tab: 'Fetish Wear',
    index: 64,
    slug: "upko-role-play-costume-collection-bunny-girl-bodysuit-set",
  },
  {
    img: "/product-images/70_4_40110677-8a58-49ff-9eb6-723e710a0ac4.jpg",
    hoverImg: "/product-images-hover/70_3_1de537a2-916d-4ebf-af90-3da7dd86e1fd.jpg",
    name: "UPKO Role play costume collection-PLEASE",
    oldPrice: "",
    price: "$89.00",
    discount: "-10%",
    tab: 'Fetish Wear',
    slug: "upko-role-play-costume-collection-please",
    index: 70,
  },
  {
    img: "/product-images/75_1_3d613a94-decb-4530-82fa-1ddf15ff4fdc.jpg",
    hoverImg: "/product-images-hover/75_7_bd71dd02-031f-474e-8b6d-8817524d8df7.jpg",
    name: "UPKO Role play costume collection-Nurse",
    oldPrice: "",
    price: "$89.00",
    discount: "-10%",
    tab: 'Fetish Wear',
    slug: "upko-role-play-costume-collection-nurse",
    index: 75,
  },
  {
    img: "",
    name: "START",
    hoverImg: "",
    oldPrice: "$0",
    price: "$0",
    discount: "-12%",
    tab: 'START',
    slug: "START",
    index: 88
  },

  //
  {
    img: "/images/foto1.png",
    name: "Your product's name",
    oldPrice: "$59.00",
    hoverImg: "/images/foto1.png",
    price: "$39.00",
    discount: "-10%",
    tab: 'Chastity'
  },
  {
    img: "/images/foto2.png",
    name: "Your product's name",
    hoverImg: "/images/foto2.png",
    oldPrice: "$59.00",
    price: "$39.00",
    discount: "-10%",
    tab: 'Chastity'
  },
  {
    img: "/images/foto3.png",
    name: "Your product's name",
    hoverImg: "/images/foto3.png",
    oldPrice: "$59.00",
    price: "$39.00",
    discount: "-10%",
    tab: 'Chastity'
  },
  {
    img: "/images/foto4.png",
    name: "Your product's name",
    hoverImg: "/images/foto4.png",
    oldPrice: "$59.00",
    price: "$39.00",
    discount: "-10%",
    tab: 'Chastity'
  },
];


const categories = ["Gift Sets", "Bondage", "Spanking", "Gags", "Fetish Wear"];

// const hoverImages = [
//   "https://www.upkoofficialshop.com/cdn/shop/files/UPKO_14_-1.jpg",
//   "https://www.upkoofficialshop.com/cdn/shop/products/LEE_6885.jpg",
//   "https://www.upkoofficialshop.com/cdn/shop/files/WechatIMG262.jpg",
//   "https://www.upkoofficialshop.com/cdn/shop/products/1200.jpg",
  
//   "/product-images-hover/34_6_e5db0095-af82-4c50-b97c-12fac88276e6.jpg"
// ];

export default function FeaturedProductsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Gift Sets");

  const filteredProducts = products.filter((p) => p.tab === activeCategory);

  return (
    <section className="featured-products">
      <div className="container">
        <div className="fp-title">
          <h2>FEATURED PRODUCTS</h2>
          <div className="fp-divider" />
        </div>

        <ul className="fp-filters">
          {categories.map((cat) => (
            <li
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>

        <div className="fp-grid">
          {filteredProducts.map((p, i) => (
            <div className="fp-card" key={i}>
              <Link
                to={`/product/${p.slug}/${p.index}`} key={p.index}
                className="fp-img-wrap"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: "relative", display: "block", overflow: "hidden" }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className={`fp-img ${hovered === i ? "fp-img-fade-out" : "fp-img-fade-in"}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "opacity 0.3s ease",
                    opacity: hovered === i ? 0 : 1,
                    zIndex: hovered === i ? 1 : 2,
                  }}
                />
                <img
                  src={p.hoverImg}
                  alt={p.name}
                  className={`fp-img ${hovered === i ? "fp-img-fade-in" : "fp-img-fade-out"}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? "scale(1.05)" : "scale(1)",
                    zIndex: hovered === i ? 2 : 1,
                  }}
                />
                <span className="fp-discount">{p.discount}</span>
              </Link>

              <div className="fp-card-content">
                <h3 className="fp-name">{p.name}</h3>
                <div className="fp-prices">
                  {p.oldPrice && <del className="fp-old">{p.oldPrice}</del>}
                  <span className="fp-price">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}