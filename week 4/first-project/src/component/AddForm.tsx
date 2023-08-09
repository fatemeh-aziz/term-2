import React from 'react';

function AddForm(props) {
    return (
        <form className={"mb-8 p-12 border"}>
            <input type={"text"} name={"name"} placeholder={"name"} className={"mr-3 border"}/>
            <input type={"number"} name={"price"} placeholder={"price"} className={"mr-3 border"}/>
            <input type={"submit"} value={"Add product"} className={"bg-blue-400 text-white rounded "}/>
        </form>
    );
}

export default AddForm;