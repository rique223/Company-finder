import axios from "axios";
import { baseURLAddressGeocoding } from "./constants";


const apiAddressGeocoding = axios.create({
	baseURL: baseURLAddressGeocoding,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
	},
	withCredentials: false,
});

export default apiAddressGeocoding;
