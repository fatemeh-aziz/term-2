import React, {useState} from 'react';

function SearchForm({city}) {
    const [nameState, setNameState] = useState<string>(city);

    const cityNameChangeHandler = (e) => {
        setNameState(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault()
    }

    return (
        <form onSubmit={}>
            <input type={"text"} name={cityName} className={"border rounded p-3"} onChange={cityNameChangeHandler}
                   value={nameState}/>
            <input type={"submit"} className={"bg-primary px-6 border rounded py-3 ml-3 text-white"} value={"search"}/>
        </form>
    );
}

export default SearchForm;