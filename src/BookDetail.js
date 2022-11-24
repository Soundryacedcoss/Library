import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextData } from "./App";
import "./App.css";
export const BookDetail = () => {
  const BookDetail2 = useContext(contextData);
  console.log(BookDetail2.BookDetail1);
  return (
    <div className="LandingPage">
      <Link to="/">
        <button className="HomeButton">Home</button>
      </Link>
      <div className="BookDiv">
        {BookDetail2.BookDetail1.map((item) => (
          <div className="wrap">
            <div>
              <img
                src={`//covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
                alt=""
              />
            </div>{" "}
            <div>
              <h2>{item.title}</h2> <br /> First Publish Year{" "}<br />
                   {item.first_publish_year} <br />
                <b>Auther's Name</b><p>{item.author_name[0]}</p>
            <p>{item.first_sentence}</p>{" "}
             <hr />
             </div> 
          </div>
        ))}
      </div>
    </div>
  );
};
