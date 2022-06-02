import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const {data, loading, error} = useFetch('movies');
    const [filteredList, setFilteredList] = useState([]);
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();

    useEffect(() => {
        setFilteredList(data);
    },[data])

    const handleBackButtonClick = (id) => {
        navigate("../movie-details/" + id);
    }

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value;
        if(searchTerm.length > 0){
            const newList = data.filter((value) => {
                return value.title.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setFilteredList(newList);
        } else {
            setFilteredList(data);
        }
        
    };
    
    if(loading){
        //return <Loading />;
        return <Loading />
    }

    if(error){
        return <p>Error Loading Products</p>
    }
    
    return <div className='homePage'>
            <div className='search-section' style={({backgroundColor: theme.background, color: theme.forground})} >
                <div>
                <div className='h1-home'><h1>Welcome to PinPointTV!</h1></div>
                <div className='search-field'>
                    <input
                        className='search-bar' 
                        type="text"
                        onChange={handleSearchChange}
                        placeholder="Search Movies..."
                        size={50}
                    />
                </div>
                </div>
                {filteredList.length > 0 && 
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
            {filteredList.length === 0 && <div>No Results</div>}
            </div>
            {}
          </div>;
  };

  export default Home;