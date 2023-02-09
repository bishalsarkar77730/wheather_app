import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./User.css"

// Redux Imports
import { logout } from "../../redux/Slices/UserSlice";

const User = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [wheather, setWheather] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fea1dab082mshec773af1d751821p1aefd4jsnacb2113b9339",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const wheatdata = async () => {
    var city = currentUser.city;
    try {
      const resdata = await axios.request(
        `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + city,
        options
      );
      setWheather(resdata.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogOut = async () => {
    await axios.post("/auth/signout");
    dispatch(logout());
    navigate("/");
  };
  wheatdata();
  return (
    <div className="container">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <div className="inner">
            <div>
              {currentUser.firstname} {currentUser.lastname}
            </div>
            <div className="color__gray">{currentUser.city}</div>
          </div>
        </div>
        <div className="card-footer">
          <div className="inner">
            <div>{wheather.humidity}</div>
            <div className="color__gray">humidity</div>
          </div>
          <div className="inner">
            <div>{wheather.max_temp}</div>
            <div className="color__gray">max-temp</div>
          </div>
          <div className="inner">
            <div>{wheather.min_temp}</div>
            <div className="color__gray">min-temp</div>
          </div>
        </div>
        <div className="card-footer">
          <div className="inner">
            <div>{wheather.temp}</div>
            <div className="color__gray">Temprature</div>
          </div>
          <div className="inner">
            <div>{wheather.wind_degrees}</div>
            <div className="color__gray">Wind degrees</div>
          </div>
          <div className="inner">
            <div>{wheather.wind_speed}</div>
            <div className="color__gray">Wind-Speed</div>
          </div>
        </div>
        <button onClick={handleLogOut}>LogOut</button>
      </div>
    </div>
  );
};

export default User;


// Available data in API

// cloud_pct : 5
// feels_like : 30
// humidity : 14
// max_temp : 32
// min_temp : 32
// sunrise : 1675818534
// sunset : 1675859281
// temp : 32
// wind_degrees : 290
// wind_speed : 1.74
