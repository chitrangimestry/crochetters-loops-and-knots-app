import { ArrowLeft, Star } from "lucide-react";
import userData from "../users.json";

function ReviewTab() {
  return (
    <div className="flex flex-col mt-8 w-[500px] h-28 justify-center bg-white rounded-lg shadow-md shadow-gray-400">
      <div className="flex flex-row items-center ml-10">
        <img
          src="/assets/images/profilepic.jpg"
          alt="user profile pic"
          className="w-20 h-20 rounded-full"
        />
        <div className="ml-5 flex-col">
          <h2>{userData[0].userName}</h2>
          <p>{userData[0].reviews[0]}</p>
          <div className="flex flex-row mt">
            <Star className="fill-amber-400" />
            <Star className="fill-amber-400" />
            <Star className="fill-amber-400" />
            <Star className="fill-amber-400" />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewTab;
