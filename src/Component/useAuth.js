import { useState, useEffect } from "react";
import { getAuth } from "./Auth";
import { useNavigate } from 'react-router-dom';

export const useAuth = (user, pass) => {
	const navigate = useNavigate();
	const [status,setStatus] = useState();
	useEffect(() => {
		getAuth(user, pass).then((res) => {
            console.log("あいうえお");
            setStatus(res.status);
            if(res.data === 200){
                navigate('/form')
            }
			else{
                navigate('/');
            }
		}).catch((err) => {
            console.log(err);
			setStatus(err.response.status);
			navigate('/');
		});
	}, []);
	return status;
}