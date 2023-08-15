import  {useState} from 'react';
import type {ChangeEvent, Dispatch, FormEvent, SetStateAction} from 'react';
import findMaxID from "../../utils/findMaxID";
import type Product from "@/types/Product";


interface Prop{
    setmydataState:Dispatch<SetStateAction<Product[]>>;
}

function AddForm({setmydataState}:Prop) {

    const [nameState, setNameState] = useState("");
    const [priceState, setPriceState] = useState("");

    const changeNameHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNameState(e.target.value);
    }
    const changePriceHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setPriceState(e.target.value);
    }
    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setmydataState((prevState:Product[])=>{
            let result:Product={
                name: nameState,
                price:Number(priceState),
                ID:findMaxID(prevState)+1
            }
            return[
                ...prevState,result
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