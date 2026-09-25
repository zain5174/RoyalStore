import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Adminlogin = () => {
  const { isAdmin, setIsAdmin, navigate } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin");
    }
  }, [isAdmin, navigate]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    setIsAdmin(true);
  };

  return (
    !isAdmin && (
      <form
        onSubmit={onSubmitHandler}
        className="bg-gray-100 #5D3FD3 min-h-screen flex flex-cols m-auto"
      >
        <div className="bg-white m-auto w-[80%] p-10">
          <p className="text-primary font-bold text-2xl mb-5 text-center">
            Admin <span className="text-secondary">Login</span>
          </p>

          <div className="mb-5">
            <p>Email</p>
            <input
              className="border border-primary rounded-md pl-2 w-full"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <p>Password</p>
            <input
              className="border border-primary rounded-md pl-2 w-full"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="bg-secondary text-white font-medium w-full h-10 mt-7 text-center rounded-lg"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default Adminlogin;
