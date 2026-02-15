import React from "react";
import "./SingleProductPage.css";

const product = {
  id: 1,
  title: "Product Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
  price: 9.99,
  images: [
    "https://placehold.co/500x500?text=Product+Image+1",
    "https://placehold.co/500x500?text=Product+Image+2",
    "https://placehold.co/500x500?text=Product+Image+3",
    "https://placehold.co/500x500?text=Product+Image+4",
  ],
  stock: 10,
};

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <section className="align-center single_product_page">
      <div className="align-center">
        <div className="single_product_thumbnails">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              className={selectedImage === index ? "selected_image" : ""}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>
      <img
        src={product.images[selectedImage]}
        alt={product.title}
        className="single_product_display"
      />
      <div className="align-center single_product_details">
        <h2 className="single_product_title">{product.title}</h2>
        <p className="single_product_description">{product.description}</p>
        <p className="single_product_price">
          Price: ${product.price.toFixed(2)}
        </p>
        <h2 className="single_product_stock">Stock: {product.stock}</h2>
        <div className="align_center quantity_input">
          <button className="quantity_input_button" disabled>
            -
          </button>
          <p className="quantity_input_count"> 1</p>
          <button className="quantity_input_button">+</button>
          <button className="search_button add_cart">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
