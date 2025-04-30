/*import { Heart, X } from "lucide-react";
import Button from "./Button";

function Card({ ...props }) {
  return (
    <>
      <div
        className="w-1/6 h-3xs flex flex-col justify-center 
      text-center border-1 border-stone-400 rounded-lg p-3 ml-4 md:w-70 
      shadow-lg scale-100 transition duration-300 hover:scale-105 hover:shadow-2xl "
      >
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
          <Heart className="hover:fill-red-500 w-10 h-10 sm:w-5 sm:w-5" />

          <Button className="w-full h-10 text-center m-3 bg-amber-300 rounded-lg hover:bg-amber-400  hover:shadow-lg">
            View
          </Button>
        </div>
      </div>
    </>
  );
}

export default Card;
*/

import { Heart } from "lucide-react";
import Button from "./Button";

function Card({ ...props }) {
  return (
    <div
      className="w-full sm:w-[300px] md:w-[250px] lg:w-[200px] 
      flex flex-col justify-center items-center text-center 
      border border-stone-400 rounded-lg p-4 m-2 
      shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={props.src}
        alt={props.altText}
        className="object-cover w-full h-[180px] border border-stone-500 rounded-xl"
      />

      <div className="flex flex-col justify-center mt-3">
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p className="text-sm text-gray-600">{props.description}</p>
        <span className="text-base font-medium mt-1">${props.price}</span>
      </div>

      <div className="flex flex-row justify-center items-center mt-4 gap-3 w-full px-2">
        <Heart className="hover:fill-red-500 w-6 h-6 cursor-pointer" />

        <Button className="flex-1 h-10 bg-amber-300 rounded-lg hover:bg-amber-400 hover:shadow-lg">
          View
        </Button>
      </div>
    </div>
  );
}

export default Card;
