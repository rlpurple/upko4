import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductItemInfo.css";
import { ProductData } from "../../../utils/getProductData";
import { QuantityCounter } from "../../../components/QuantityCounter";
import { addItem, toggleCart } from "../../../store/cartSlice";
import { addToWishlist } from "../../../store/wishlistSlice";
import { RootState } from "../../../store/store";
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';

dayjs.extend(advancedFormat) 

interface ProductItemInfoProps {
  productData: ProductData;
  onBesideChange?: (index: number) => void;  // новый проп для связи с галереей
}

const ProductItemInfo: React.FC<ProductItemInfoProps> = ({ productData, onBesideChange }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const [selectedBesidesIndex, setSelectedBesidesIndex] = useState<number>(0);

  // Вычисляем цену и скидку для выбранного besides
  const selectedBesides = productData.besides ? productData.besides[selectedBesidesIndex] : null;

  const calculateDiscount = (oldPriceStr: string, newPriceStr?: string | null) => {
    if (!newPriceStr) return null;

    const cleanPrice = (price: string) => parseFloat(price.replace(/[^0-9.]/g, ""));
    const oldPrice = cleanPrice(oldPriceStr);
    const newPrice = cleanPrice(newPriceStr);

    const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
    return discount > 0 ? discount : null;
  };

  // Используем цену из selectedBesides, если есть, иначе из productData
  const oldPrice = selectedBesides?.price || productData.price || "";
  const newPrice = selectedBesides?.newPrice || productData.newPrice || null;
  const discount = calculateDiscount(oldPrice, newPrice);

  // вычисляем дату примерной доставки
  const calcDate = ()=> {
    const dayNow = dayjs();
    const dayStart = dayNow.add(5, 'day') // минимальная доставка на 5 дней больше
    const dayEnd = dayNow.add(14, 'day') // максимальная дата доставки через  14дней
    return `Order in the next 18 hours 18 minutes to get it between ${dayStart.format('dddd, Do MMMM')} and <b>${dayEnd.format('dddd, Do MMMM')}</b>`
  }

  const handleAddToCart = () => {
  dispatch(
    addItem({
      id: productData.index,
      selectedBesidesIndex: selectedBesidesIndex, // индекс выбранного подтовара
      title: selectedBesides?.productName || productData.title,
      price: selectedBesides?.newPrice || selectedBesides?.price || productData.price || '',
      quantity,
      image: selectedBesides?.productImgList?.[0] || productData.img,
    })
  );
  dispatch(toggleCart());
  };

  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.index === productId);
  };

  const handleAddToWishlist = (e: React.MouseEvent, product: ProductData) => {
    e.preventDefault();
    dispatch(addToWishlist(product));
  };

const handleBesideClick = (index: number) => {
  setSelectedBesidesIndex(index);
  if (onBesideChange) {
    onBesideChange(index);
  }
};

  return (
    <div className="product-item__info">
      <h1 className="product-item__title">{productData.title}</h1>
      <div className="product-item__price-row">
        {newPrice ? (
          <>
            <span className="product-item__old-price">{oldPrice}</span>
            <span className="product-item__price">{newPrice}</span>
            {discount && <span className="product-item__badge">SAVE {discount}%</span>}
          </>
        ) : (
          <span className="product-item__price">{oldPrice}</span>
        )}
      </div>

      {productData.besides && (
        <div className="besides_list">
          <p className="besides_name">
            Style: {selectedBesides ? selectedBesides.productName : productData.besides[0].productName}
          </p>
          {productData.besides.map((item, index) => (
            <div
              key={index}
              className={`besides_item ${selectedBesidesIndex === index ? "active" : ""}`}
              onClick={() => handleBesideClick(index)}
            >
              {item.productName}
            </div>
          ))}
        </div>
      )}

      <div className="product-item__rating-row">
        <span className="product-item__stars">★★★★★</span>
        <span className="product-item__reviews">37 reviews</span>
      </div>
      <div className="product-item__actions">
        <QuantityCounter initialValue={1} onChange={setQuantity} />
        <button className="product-item__btn product-item__btn--main" onClick={handleAddToCart}>
          Add to cart
        </button>

        <div
          className={`add-to-wishlist-button-from-product-info ${isInWishlist(productData.index) ? "added" : ""}`}
          onClick={(e) => handleAddToWishlist(e, productData)}
        >
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
              strokeWidth="1"
              fill="none"
            ></path>
          </svg>
        </div>
      </div>
      <div className="product-item__availability">
        Availability: <span>In Stock</span>
      </div>
      <div className="product-item__discount-info">Discount Auto-apply at Checkout 🛒</div>
      <div dangerouslySetInnerHTML={{ __html: calcDate() }} className="product-item__delivery" />
      <div>
        <img src="/Safe_Checkout.png" alt="" />
      </div>
    </div>
  );
};

export default ProductItemInfo;