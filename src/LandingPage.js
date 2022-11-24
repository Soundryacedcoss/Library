import React, { useContext,useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { contextData } from "./App";
import { contextSearchData } from "./App";
import { ContextTheame } from "./App";
import BookData from "./BookData";
import CircularIndeterminate from "./Loading.js";
import { Carousel } from "./carousel";
import { Footer } from "./Footer";

export const LandingPage = () => {
  console.log(BookData);
  const [input, setInput] = useState();
  const[display,setDisplay]=useState({display:"none"})
  const value = useContext(contextData);
  const SearchResult = useContext(contextSearchData);
  const theme1=useContext(ContextTheame)
  const InputHandler = (e) => {
    setInput(e.target.value);
  };
  const displayResult=()=>{
    setDisplay({display:"block"})
    console.log(value.BookDetail);
    fetch(`https://openlibrary.org/search.json?q=${input}&has_fulltext=true`)
      .then((response) => response.json())
      .then((val) => {
        let temp=val.docs.slice(0,10)
        if(temp.length>0){
          setDisplay({display:"none"})
        }
        SearchResult.setDetail(temp)
        console.log(temp);
      });
  }
  const SearchHandler = () => {
    displayResult()
  };
  // setDisplay({display:"none"})
  const ImageHandler = (val) => {
    for (let i = 0; i < SearchResult.detail.length; i++) {
      if (val === SearchResult.detail[i].key) {
        value.setBookDetail1([SearchResult.detail[i]])
        console.log(value.BookDetail);
      }
    }
  };
  // search via keyboard
  const keyHandler=(e)=>{
    if(e.key==="Enter"){
      displayResult()
    }
  }
  return (
    <>
    <div className="LandingPage">
      <Carousel/>
      <input onKeyDown={keyHandler} type="search" onChange={InputHandler} /> {" "}
      <button className="SearchBUtoon" onClick={SearchHandler}>
        Search
      </button>
      
      <div style={display} className="loaderDiv"> <CircularIndeterminate/></div>
      <div>
      
      </div>
      <div className="BookDiv">
        {SearchResult.detail.map((item) => (
          <>
            <div className="wrap">
              <Link onClick={() => ImageHandler(item.key)} to={"/BookDetail"}>
                <img
                  src={`//covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
                  alt=""
                />
              </Link>{" "}
              <h4>{item.title}</h4>
              <br /> First Publish Year {item.first_publish_year}
            </div>
           
          </>
         
        ))}
      </div>
      <h3 className="POpulerhead">Popular Books</h3>
      <div className="POpularBookDiv">
      {BookData.map((item)=><div className="wrap1">
        <div className="Row1">
          <img src={item.image} alt="" />
          <h4>{item.name}</h4>
          <h5>{item.author_name}</h5>
          <p>{item.first_publish_year}</p>
          </div>
        </div>)}
        </div>
    </div>
    <Footer/>
    </>
  );
};
