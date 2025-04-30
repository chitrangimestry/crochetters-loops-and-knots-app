import { Heart, X } from "lucide-react";
import Button from "./Button";

function Card({ ...props }) {
  return (
    <>
      <div
        className="w-1/6 h-3xs flex flex-col justify-center 
      text-center border-1 border-stone-400 rounded-lg p-3 ml-4 md:w-70 
      shadow-lg scale-100 transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        {/* <div
                className="flex flex-row justify-center items-center mt-3 border-2
                border-stone-800 rounded-2xl "
            >
            </div> */}
        <img
          src={props.src}
          alt={props.altText}
          className="object-fill border-1 border-stone-500 rounded-xl"
        />

        <div className="flex flex-col justify-center mt-3">
          <h2>{props.title}</h2>
          <p className="text-sm">{props.description}</p>
          <span>${props.price}</span>
        </div>

        <div className="flex flex-row justify-center items-center mt-3 gap-3">
          <Heart className="hover:fill-red-500 w-10 h-10" />

          <Button className="w-full h-10 text-center m-3 bg-amber-300 rounded-lg hover:bg-amber-400  hover:shadow-lg">
            View
          </Button>
        </div>
      </div>
    </>
  );
}

export default Card;
