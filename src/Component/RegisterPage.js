import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRegisterUrl } from '../Data/URL';
import axios from 'axios';

function RegisterPage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ username: '', password: '', email: '' });
    const [error, setError] = useState('');

    // フォームの入力値を更新するハンドラー
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(getRegisterUrl(), userData);
            if (response && response.data !== undefined) {
                console.log('登録成功:', response.data);
                navigate("/form");
            } else {
                console.error('登録エラー: レスポンスが得られませんでした');
                setError('登録エラーが発生しました');
            }
        } catch (error) {
            console.error('登録エラー:', error.response ? error.response.data.message : error.message);
            setError(error.response ? error.response.data.message : error.message);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                <span>ID:</span>
                <input name="username" type="text" value={userData.username} onChange={handleChange} />
                <br></br>
                <span>Password:</span>
                <input name="password" type="text" value={userData.password} onChange={handleChange} />
                <br></br>
                <span>Email:</span>
                <input name="email" type="text" value={userData.email} onChange={handleChange} />
                <br></br>
                <button type="submit">登録</button> {/* フォームのサブミットボタンにtype="submit"を指定 */}
            </form>
            {error && <p>{error}</p>}
        </>
    );
}

export default RegisterPage;