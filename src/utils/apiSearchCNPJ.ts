import axios from "axios";
import { baseURLCNPJ } from "./constants";

const apiSearchCNPJ = axios.create({
	baseURL: baseURLCNPJ,
	headers: {
		"X-Requested-With": "XMLHttpRequest",
	},
});

export default apiSearchCNPJ;
