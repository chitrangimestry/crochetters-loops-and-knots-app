import { useState } from "react";
import Input from "../components/Input";
import { User } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");

  const classes =
    "peer text-lg w-[350px] h-10 placeholder-transparent outline-none focus:outline-none focus:border-blue-500 border-b-1 border-blue-950 rounded-lg text-gray-600";

  function handleEmailChange(e) {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  function handleEmailBlur() {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError("");
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    console.log(e.target.value);
  }

  function handlePasswordBlur() {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(password)) {
      setPasswordError("Need a strong password!");
    } else {
      setPasswordError("");
    }
  }

  return (
    <div className="flex flex-col justify-center justify-items-center mt-10 md:ml-[120px] lg:ml-[630px] rounded-2xl sm:border-none w-2xl h-2/4 border- border-blue-950 shadow-xl shadow-blue-200">
      <div className="flex justify-center items-center gap-4 mt-5">
        <User className="w-10 h-10" />
        <h1 className="text-3xl text-center">Sign In</h1>
      </div>

      <form className="flex justify-center justify-items-center ">
        <div className="flex flex-col justify-center gap-4 mt-5 mb-5">
          <div className="relative mt-5">
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              className={classes}
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            <label
              htmlFor="email"
              className="text-md text-gray-600 absolute left-0 -top-3.5 transition-all
               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
               peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
            >
              Email Address
            </label>
            {emailError && (
              <p className="text-red-500 text-sm text-wrap"> {emailError}</p>
            )}
          </div>

          <div className="relative mt-5">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className={classes}
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            <label
              htmlFor="password"
              className="text-md text-gray-600 absolute left-0 -top-3.5 transition-all
               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
               peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
            >
              Enter Password
            </label>
            {passwordError && (
              <p className="text-red-500 text-sm text-wrap"> {passwordError}</p>
            )}
          </div>
          <p className="flex justify-center items-center w-full text-white ">
            <Button className="mt-5 border-green-950 bg-green-400 text-xl m-3 w-6/12 rounded-lg shadow-lg shadow-green-300 hover:bg-green-500 hover:">
              <p className="m-2">Sign In</p>
            </Button>
          </p>
          <span className="flex flex-col justify-center items-center text-center">
            <p>Not a member?</p>
            <p className="hover:underline underline-offset-4 ">
              <Link to="/signup">Sign Up</Link>
            </p>
          </span>
        </div>
      </form>
    </div>
  );
}

export default SigninPage;
