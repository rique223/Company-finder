import axios from "axios";
// import { baseURLGoogle } from "./constants";

const apiBackEnd = axios.create({
	baseURL: "https://back-end-company-finder.herokuapp.com/getGeocodedAddress",
	headers: {
		"X-Requested-With": "XMLHttpRequest",
	},
	withCredentials: false,
});

export default apiBackEnd;
