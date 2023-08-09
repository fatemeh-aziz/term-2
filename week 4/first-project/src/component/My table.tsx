import {useState} from "react";

interface product {
    ID:number,
    name:string,
    price:number,
}
interface prop{
    mydata:Array<product>
}



export default function MyTable({mydata}:prop) {

 const [mydataState,setmydataState]=useState(mydata);

 const deleteHandler=(id:number) =>{
    let result=mydataState.filter((item)=>{
        return item.ID !== id
    });
    setmydataState(result);
 }
    return (
        <table className={"w-full bg-white text-black text-center"}>
            {
                caption && <caption style={{captionSide: "bottom"}}>{caption}</caption>
            }
            <tbody>
            {
                mydata.map((item:product,index:number)=> {
                    return(
                    <tr>
                        <td className={"border"}>{mydata.ID}</td>
                        <td className={"border"}>{mydata.name}</td>
                        <td className={"border"}>{mydata.price}</td>
                        <td className={"border"}>
                            <button onClick={()=>{deleteHandler(item.ID)}}>delete</button>
                        </td>
                    </tr>
                    )
                })
            }
            </tbody>

        </table>
    )
}
