import React from "react";

function FormItem({ form, deleteForm }) {
  //削除処理
  const handleDeleteForm = () => {
    deleteForm(form.id);
  };
  return (
    <li>
      <p>{form.number} 名前：{form.name}：{form.time} ID: {form.userId}</p>
      <p>{form.text}</p>
      <button onClick={handleDeleteForm}>削除</button>
    </li>
  );
}

export default FormItem;