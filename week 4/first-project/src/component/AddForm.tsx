import React from 'react';


function AddForm({mydataState, setmydataStates}) {

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
        setmydataState([...mydataState, {
            name: nameState,
            price: priceState,
            ID: Math.random()
        }])
        setPriceState("");
        setNameState("")
    }
    return (
        <form className={"mb-8 p-12 border"} onSubmit={submitHandler}>
            <input type={"text"} name={"name"} value={nameState} placeholder={"name"} className={"mr-3 border"}
                   onChange={changeNameHandler}/>
            <input type={"number"} name={"price"} value={priceState} placeholder={"price"} className={"mr-3 border"}
                   onChange={changePriceHandler}/>
            <input type={"submit"} value={"Add product"} className={"bg-blue-400 text-white rounded "}/>
        </form>
    );
}

export default AddForm;