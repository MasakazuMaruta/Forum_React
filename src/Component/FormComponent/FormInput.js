import React,{ useState } from "react";

function FormInput({addForm}){
    const [name,setName] = useState('');//書き込み者
    const [text,setText] = useState('');//書き込み内容
    //書き込み内容を追加
    function handleSubmit(e){
        e.preventDefault();
        let _date = new Date();
        var date = _date.getFullYear() + '/' + ('0' + (_date.getMonth() + 1)).slice(-2) + '/' +('0' + _date.getDate()).slice(-2) + ' ' +  ('0' + _date.getHours()).slice(-2) + ':' + ('0' + _date.getMinutes()).slice(-2) + ':' + ('0' + _date.getSeconds()).slice(-2) + '.' + _date.getMilliseconds(); 
        const form = {
            userId : -1,
            name : name,
            text : text,
            time : date,
        }
        addForm(form);
        setName('');
        setText('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <button 
            type="submit">書き込む</button>
            <span>名前：</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <br></br>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </form>
    );
}

export default FormInput;