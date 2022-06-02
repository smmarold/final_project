import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:3000/";

const useFetch = (urlSegment) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${baseUrl}${urlSegment}`);
                setData(response.data);
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [urlSegment]);

    return {data, loading, error}
}

export default useFetch;