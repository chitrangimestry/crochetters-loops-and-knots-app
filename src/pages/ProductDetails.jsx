// import yarnscrochetImg from "../assets/images/crochetImg.jpg";
// import crochetTopImg from "../assets/images/crochetTop1.jpg";
// import crochetTopImg2 from "../assets/images/crochetTop2.jpg";
// import yarnImg from "../assets/images/yarnsimg.jpg";
// import toysimg from "../assets/images/Arigurumi.webp";
import { Link, useParams } from "react-router-dom";
import productData from "../../data.json";
import Button from "../components/Button";
import { ArrowLeft, Star } from "lucide-react";
import ReviewTab from "../components/ReviewTab";
import products from "../../products.json";
import user from "../../users.json";

function ProductDetailsPage() {
  const { id } = useParams();
  console.log(id);

  // if (productData) {
  //   const product = product.find((prod) => prod.id === id);
  // }
  const product = productData.find((p) => p.id === id);

  // if not found
  if (!product) return <p className="text-center mt-10">Product not found.</p>;
  let cssClasses = "w-full h-12 rounded-lg";

  return (
    <div className="flex flex-col gap-14 lg:flex-row p-8 m-8">
      <Link to="/">
        <ArrowLeft />
      </Link>
      <div className=" w-full lg:w-1/2 flex flex-col ">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-lg shadow-xl shadow-stone-500 "
        />
        <div className="flex flex-row justify-center items-center gap-4 mt-7  ml-2 lg:ml-0">
          <img
            src={products[0].images[0]}
            alt={product.title}
            className="rounded-lg w-50 h-40 lg:w-39 lg:h-35"
          />
          <img
            src={products[0].images[1]}
            alt={product.title}
            className="rounded-lg w-50 h-40 lg:w-39 lg:h-35"
          />
          <img
            src={products[0].images[2]}
            alt={product.title}
            className="rounded-lg w-50 h-40 lg:w-39 lg:h-35"
          />
          <img
            src={products[0].images[3]}
            alt={product.title}
            className="rounded-lg w-50 h-40 lg:w-39 lg:h-35"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 ml-15 lg:ml-25 ">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 my-4">{product.description}</p>
          <p className="text-gray-500 my-2">{product.creator}</p>
          <p className="text-xl font-semibold my-2">${product.price}</p>
          <div className="flex flex-row gap-1 mt-2">
            <Star className="fill-amber-400" />
            <Star className="fill-amber-400" />
            <Star className="fill-amber-400" />
            <Star className="fill-amber-400" />
            <Star />
          </div>
          <div className="mt-2">
            <ul>
              <li>Size: {product.size}</li>
              <li>Category: {product.category}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-5 mt-5 w-2/4">
          <Button className={`${cssClasses} bg-green-600`}>Add to Cart</Button>
          <Button className={`${cssClasses} bg-amber-300`}>
            Add to Wishlist
          </Button>
        </div>
        <div className="mt-5 flex flex-col">
          <h2>Reviews</h2>
          <ReviewTab userName={user[0].userName} review={user[0].reviews[0]} />
          <ReviewTab userName={user[0].userName} review={user[0].reviews[1]} />
          <ReviewTab userName={user[0].userName} review={user[0].reviews[2]} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
