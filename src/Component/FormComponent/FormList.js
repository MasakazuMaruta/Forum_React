import React from "react";
import FormItem from "./FormItem"
function FormList({forms,deleteForm}){
    return(
        <ul>
            {forms.map(
                form => (
                    <FormItem 
                    key = {form.id}
                    form = {form}
                    deleteForm = {deleteForm}
                    />
                )
            )}
        </ul>
    );
}
export default FormList;