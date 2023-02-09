import React from "react";
import { useSelector } from "react-redux";

// import components
import Login from "../../Components/Login/Login";
import User from "../../Components/User/User";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  return <>{currentUser ? <User /> : <Login />}</>;
};

export default Home;

