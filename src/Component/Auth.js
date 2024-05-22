import axios from "axios";
import { getUrl,getLoginUrl } from "../Data/URL";
export const getAuth =  async(user,pass) => {
	const data ={
		auth: {username:user,password:pass}
	};
    const ddata = JSON.stringify(data);
    const response = await axios.post(getLoginUrl(),ddata);
	return response;
}
