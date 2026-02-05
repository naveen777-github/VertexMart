import React from "react";
import Hero_Section from "./Hero_Section";
import image from "../../assets/iphone-14-pro.webp";
import image2 from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";
const HomePage = () => {
  return (
    <div>
      <Hero_Section
        title="Meet the iPhone 17 Pro"
        subtitle="Faster. Smarter. More Pro than ever."
        link="#shop-now"
        image={image}
      />

      <FeaturedProducts />

      <Hero_Section
        title="Build the ultimate setup"
        subtitle="your perfect tech bundle is here."
        link="#shop-now"
        image={image2}
      />
    </div>
  );
};

export default HomePage;
