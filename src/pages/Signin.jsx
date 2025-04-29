import Input from "../components/Input";

function SigninPage() {
  return (
    <div className="flex flex-col justify-center justify-items-center mt-10  lg:ml-[630px] sm:border-none w-2xl h-2/4 border-1 border-blue-950 shadow-lg shadow-blue-100">
      <h1 className="text-3xl text-center mt-4">SignIn</h1>
      <form className="flex justify-center justify-items-center">
        <div className="flex flex-row justify-center gap-4 mt-5">
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <Input
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="text-xl outline-none focus:outline-none"
          />
        </div>
      </form>
    </div>
  );
}

export default SigninPage;
