import axios from "axios";
// import { baseURLGoogle } from "./constants";

const apiBackEnd = axios.create({
	baseURL: "http://localhost:8080/getGeocodedAddress",
	headers: {
		"X-Requested-With": "XMLHttpRequest",
	},
	withCredentials: false,
});

export default apiBackEnd;
