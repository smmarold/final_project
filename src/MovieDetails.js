import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading"
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from './context/ThemeContext';
import { useContext } from "react";
import PlatformIcons from "./PlatformIcons";
import { AddToQueue } from "./features/queue/AddToQueue";

const MovieDetails = (props) => {
    const {theme} = useContext(ThemeContext);
    const {movieID} = useParams();
    const {data, loading, error} = useFetch(`movies/${movieID}`);
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    }
    
    if(loading){
        //return <Loading />;
        return <Loading />
    }

    if(error){
        return <p>Error Loading Products</p>
    }

    return (
        <div className="product-details-box" style={({backgroundColor: theme.background, color: theme.forground})}>
            <h1 className="movie-title">{data.title}</h1>
            <div className="product">
                <img className="full-image" src={data.image} alt={data.id} />
                <div className="product-info">
                    <p><strong>Rotten Tomatoes Rating: </strong>{data.rating}</p>
                    <div className="description">
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
            <strong>Where To Watch {data.title}: </strong>
            <PlatformIcons {...data.platforms} />
                <AddToQueue {...data} />
                <button className="button go-back" onClick={handleBackButtonClick}>Go Back</button>
        </div>);
};

export default MovieDetails;