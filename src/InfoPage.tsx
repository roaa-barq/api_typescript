import React, { useEffect, useState } from "react";
import "./InfoPage.css";
import axios from "axios";

export const InfoPage = () => {
  const [user, setUser] = useState({
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  });
  const fetchData = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => setUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <form className="infoPage">
      <div className="compDiv">
        <h1>My Info</h1>
        <div className="infoLabel">User id : {user.userId}</div>
        <div className="infoLabel">Id : {user.id}</div>
        <div className="infoLabel">Title : {user.title}</div>
        <div className="infoLabel">Completed : {String(user.completed)}</div>
      </div>
      <img className="img" src="/login.jpg"></img>
    </form>
  );
};
