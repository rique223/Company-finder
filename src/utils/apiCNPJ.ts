import axios from "axios";
import { baseURLCNPJ } from "./constants";

const apiCNPJ = axios.create({
	baseURL: baseURLCNPJ,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
		"Access-Control-Allow-Origin": "*",
	},
	data: "jsonp",
});

export default apiCNPJ;
