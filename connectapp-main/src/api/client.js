import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL

const client = axios.create({
    baseURL,
    headers: {
        "content-type": "application/json"
    }
});

export default client;