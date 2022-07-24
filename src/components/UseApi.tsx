import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "process";
import { body } from "ionicons/icons";

function UseApi(url: any ){
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };

        setLoading(true);
        axios.get(url, config)
        .then((Response) => {setData(Response.data);})
        .catch((err) => {setError(err);})
        .finally(() => {setLoading(false); });
    },[url]);

    const refetch = (body: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };
        
        setLoading(true);
        axios
        .post(url, body, config)
        .then((Response) => {setData(Response.data);})
        .catch((err) => {setError(err); })
        .finally(() => {setLoading(false); })
    };

    const deleteData = (path: any) => {
        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };
    
        axios.delete(`${url}/${path}`).then((Response) => {setData(Response.data.id); })
        .catch((err) => {setError(err); })
        .finally(() => {setLoading(false); })
    };

    const UpdateData = (path: any, body :any) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        setLoading(true);
        axios
            .put(`${url}/${path}`, body, config)
            .then((response) => { setData(response.data); })
            .catch((err) => {setError(err); })
            .finally(() => {setLoading(false); })
    };

    return {data, loading, error, refetch, deleteData, UpdateData}

}

export default UseApi;