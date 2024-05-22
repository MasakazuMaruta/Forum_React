import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoginUrl } from '../Data/URL';
import axios from 'axios';

function LoginPage(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/form");
    }
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    // フォームの入力値を更新するハンドラー
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    // ログインボタンがクリックされたときの処理
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post(getLoginUrl(), userData);
        if (response.status === 200) { // ステータスコードが成功を示す場合
            console.log('ログイン成功:', response.data);
            navigate("/form");
        } else {
            console.error('ログインエラー:', response.data); // エラーが返された場合
            setError('ログインエラーが発生しました');
        }
        } catch (error) {
        console.error('ログインエラー:', error.response.data.message);
        setError(error.response.data.message);
        }
    };

    // 登録ボタンがクリックされたときの処理
    const handleRegisterSubmit = () => {
        navigate("/register");
    };
    return(
        <>
        <form style={{ textAlign: "center" }}>
            <span>ID:</span>
            <input name = 'username' type='text' value = {userData.username} onChange={handleChange}/>
            <br></br>
            <span>Password:</span>
            <input name = 'password' type='text' value = {userData.password} onChange={handleChange}/>
            <br></br>
            <button onClick={() => navigate('/auth',{state:{user:userData.username,pass:userData.password},replace : true})}>送信</button>
        </form>
        <form >
            <button onClick={handleRegisterSubmit}>登録サイトへ</button>
        </form>
        {error && <p>{error}</p>}
        </>
    );
}

export default LoginPage;