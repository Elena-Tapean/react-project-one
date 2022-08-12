import axios from "axios";
import { useEffect, useState } from "react";

export const useResume = function (name) {
    const [data, setData] = useState({
        status: 'idle',
        data: {}
    });

    useEffect(() => {
        setData({...data, status: 'fetching'})
        axios.get(`/api/resume/${name}`)
          .then(({data}) => {
            setData({
                data, 
                status: 'success'
            })
          })
          .catch(err => {
            setData({status: 'error', ...data})
          })
    }, [])

    return {...data};
}