import { Heart } from "lucide-react";
import Button from "./Button";

function Card({ ...props }) {
  return (
    <div
      className="w-[350px] h-[550px]
      flex flex-col justify-center items-center text-center 
      rounded-lg p-4 m-2 border-[1px] border-gray-300 bg-white min-h-[360px]
      shadow-lg shadow-gray-400 transition duration-300 hover:scale-110 hover:shadow-2xl "
    >
      <img
        src={props.src}
        alt={props.altText}
        className="object-cover min-h-60 shadow:lg shadow-stone-600 rounded-xl"
      />

      <div className="flex flex-col justify-center mt-5 flex-grow ">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-gray-600 text-wrap text-justify">
          {props.description}
        </p>
        <p>{props.creator}</p>
        <span className="text-base font-medium mt-1">${props.price}</span>
      </div>

      <div className="flex flex-row justify-center items-center mt-4 gap-3 w-full px-2 min-h-16">
        <Heart className="hover:fill-red-500 w-6 h-6 cursor-pointer transition duration-300 hover:scale-130" />
        <Button
          onClick={props.onClick}
          className="flex-1 h-10 bg-amber-300 rounded-lg hover:bg-amber-400 hover:shadow-lg shadow-stone-600"
        >
          View
        </Button>
      </div>
    </div>
  );
}

export default Card;
