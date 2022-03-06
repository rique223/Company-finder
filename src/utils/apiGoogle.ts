import axios from "axios";
import { baseURLGoogle } from "./constantsGoogle";

const apiGoogle = axios.create({
	baseURL: baseURLGoogle,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Access-Control-Allow-Origin": "*",
	},
	data: "jsonp",
	withCredentials: false,
});

export default apiGoogle;
