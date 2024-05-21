import React, { useState,useEffect} from 'react';
import {getFormUrl} from '../Data/URL';
import FormInput from './FormComponent/FormInput';
import FormList from './FormComponent/FormList';
import axios from 'axios';

function PostPage() {
  const [forms,setForms] = useState([]);
  //通信
  useEffect(() => {
    axios.get(getFormUrl())
        .then(response => {
            setForms(response.data);
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
  }, []);
  //書き込み追加処理
  const addForm = (form) => {
    axios.post(getFormUrl(), form)
      .then(response => {
        setForms([...forms, response.data]);
      })
      .catch(error => {
        console.error('Error adding form:', error);
      });
  }
  //書き込み削除処理
  const deleteForm = (id) => {
    axios.delete(getFormUrl()+ `/${id}`)
      .then(response => {
        const updatedForms = forms.filter(form => form.id !== id);
        const updatedFormsWithNumber = updatedForms.map((form,index) => {
          return {...form,number:index+1};
        })
        setForms(updatedFormsWithNumber);
      })
      .catch(error => {
        console.error('Error deleting form:', error);
      });
  }
  return (
    <>
      <FormList forms = {forms} deleteForm = {deleteForm} />
      <FormInput addForm={addForm} /> 
    </>
  );
}

export default PostPage;
