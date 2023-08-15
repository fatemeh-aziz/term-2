import React, {useState} from 'react';


function AddForm({ setmydataState}) {

    const [nameState, setNameState] = useState("");
    const [priceState, setPriceState] = useState("");

    const changeNameHandler = (e) => {
        setNameState(e.target.value);
    }
    const changePriceHandler = (e) => {
        setPriceState(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setmydataState((prevState)=>{
            return[
                ...prevState,{
                    name: nameState,
                    price: priceState,
                }
            ]
        })
        setPriceState("");
        setNameState("")
    }
    return (
        <form className={"mb-8 p-12 border rounded-xl bg-gray-100"} onSubmit={submitHandler}>
            <input type={"text"} name={"name"} value={nameState} placeholder={"name"} className={"mr-3 p-2 rounded border"}
                   onChange={changeNameHandler}/>
            <input type={"number"} name={"price"} value={priceState} placeholder={"price"} className={"mr-3 p-2 rounded border"}
                   onChange={changePriceHandler}/>
            <input type={"submit"} value={"Add product"} className={"bg-green-400 cursor-pointer rounded p-2 text-white rounded "}/>
        </form>
    );
}

export default AddForm;