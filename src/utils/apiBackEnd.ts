import axios from "axios";
// import { baseURLGoogle } from "./constants";

const apiBackEnd = axios.create({
	baseURL: "https://back-end-company-finder.herokuapp.com/api/address-geocoding/v1/get-geocode-address",
	headers: {
		"X-Requested-With": "XMLHttpRequest",
	},
	withCredentials: false,
});

export default apiBackEnd;
