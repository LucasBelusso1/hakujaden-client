import axios from "axios";
import React, { useCallback, useState } from "react";

const useAxios = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setError(null);
            setLoading(true);
            response = await axios(url, options);
            json = response.data;
        } catch (error) {
            json = null;
            setError(error.response.data.error);
        } finally {
            setData(json);
            setLoading(false);
            return { response, json };
        }
    }, []);

    return {
        data,
        loading,
        error,
        request,
    };
};

export default useAxios;
