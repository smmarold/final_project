import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading";
import { useNavigate } from "react-router-dom";

const TopRated = (props) => {
    const [filteredList, setFilteredList] = useState([]);
    const {data, loading, error} = useFetch('movies');
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleBackButtonClick = (id) => {
        navigate("../movie-details/" + id);
    }

    //filter based on rating.
    useEffect(()=> {
        const newList = data.filter((value) => {
            return value.rating > 90;
        });
        setFilteredList(newList);
    }, [data])
    
    if(loading){
        //return <Loading />;
        return <Loading />
    }

    if(error){
        return <p>Error Loading Products</p>
    }
    
    return <div className='homePage'>
            <div style={({backgroundColor: theme.background, color: theme.forground})} >
                <div className='h1-home'><h1>Current Top Rated Movies</h1></div>
                {filteredList.length && 
                filteredList.map((element) => {
               return <div key={element.id} className="box-container">
                 <img className="preview-image" src={element.image} alt={element.id} />
                 <h2>{element.title}</h2>
                 <div className='ratings-div'>
                    <p>Rating: {element.rating}%</p>
                 </div>
                 <button className="button go-back" onClick={() => {handleBackButtonClick(element.id)}}>View Details</button>
                 </div>;
            })}
            </div>
          </div>;
  };

  export default TopRated;