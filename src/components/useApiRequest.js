import { useState, useEffect } from 'react'
import axios from 'axios'

const useApiRequest = (url) => {
    const [request, setRequest] = useState({data: null, errorMessage: null});

    useEffect(() => {
        axios.get(url)
        .then(response => setRequest({data: response.data}) )
        .catch((error) => {
            if (error.response) {
                console.log("Request made and the server responded with a status code");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);

                setRequest({errorMessage: "API request made and the server responded with a status code"});

            } else if (error.request) {
                console.log("Request made but no response was received");
                console.log(error.request);

                setRequest({errorMessage: "API request made but no response was received"});
                
            } else {
                console.log("Something happened in setting up the request that triggered an Error");
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

    }, [url]);

    return request;
}

export default useApiRequest;