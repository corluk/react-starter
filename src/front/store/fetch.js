import axios from "axios";

const baseURL = "http://localhost";

axios.create({ baseURL: baseURL});

export const fetchDefault = async()=>{

    const response = await axios.get("/");
    return response.data;
};
