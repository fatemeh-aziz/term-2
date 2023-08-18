import React, {useState} from 'react';

function SearchForm({city,getWeatherData}) {
    const [nameState, setNameState] = useState<string>(city);

    const cityNameChangeHandler = (e) => {
        setNameState(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        getWeatherData(city)

    }

    return (
        <form onSubmit={submitHandler} className={"flex m-auto border-b-2 pb-6 mb-6 justify-center"}>
            <input type={"text"} className={"border rounded  p-3"} onChange={cityNameChangeHandler}
                   value={nameState}/>
            <input type={"submit"} className={"bg-primary px-6 border rounded py-3 ml-3  text-white"} value={"search"}/>
        </form>
    );
}

export default SearchForm;