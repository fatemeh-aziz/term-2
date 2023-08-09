import {useState} from "react";
import AddForm from "@/component/AddForm";

interface product {
    ID: number,
    name: string,
    price: number,
}

interface prop {
    mydata: Array<product>
}

export default function MyTable({mydata, caption}) {

    const [mydataState, setmydataState] = useState(mydata);

    const deleteHandler = (id: number) => {
        let result = mydataState.filter((item) => {
            return item.ID !== id
        });
        setmydataState(result);
    }
    return (
        <>
            <AddForm/>
            <table className={"w-full bg-white text-black text-center"}>
                {
                    caption && <caption style={{captionSide: "bottom"}}>{caption}</caption>
                }
                <tbody>
                {
                    mydataState.map((item: product, index: number) => {
                        return (
                            <tr>
                                <td className={"border"}>{item.ID}</td>
                                <td className={"border"}>{item.name}</td>
                                <td className={"border"}>{item.price}</td>
                                <td className={"border"}>
                                    <button onClick={() => {
                                        deleteHandler(item.ID)
                                    }}>delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}
