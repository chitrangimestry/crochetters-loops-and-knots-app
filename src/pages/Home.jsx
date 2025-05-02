import Card from "../components/Card";

import { useNavigate } from "react-router-dom";

import products from "../data.json";

function HomePage() {
  const navigate = useNavigate();

  function handleProductView(productId) {
    navigate(`/product-detail/${productId}`);
  }
  return (
    <>
      <div className="w-full h-full flex flex-wrap justify-center items-center mt-12 gap-5 sm: flex-row ml-5 sm:gap-y-10 ">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            src={product.image}
            creator={product.creator}
            altText={product.title}
            onClick={() => handleProductView(product.id)}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
