import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [visible, setVisible] = useState(8);

   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setIsLoading(false);
            console.log(response.data);
            if (response.data.results) {
                setData(response.data.results);
                console.log("data.results");
            } else {
                setData(response.data);
                console.log("data");
            }
        } catch (error) {
            setIsLoading(false);
        }
    };

    fetchData();

}, [url]);

const showMoreHandler = () => {
    setVisible((prevValue) => prevValue + 6)
};

    return { data, isLoading, visible, showMoreHandler }
}

export default useFetch;