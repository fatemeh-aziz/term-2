import {useState} from "react";
import AddForm from "@/components/AddForm"

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
            <AddForm  setmydataState={setmydataState} />
            <table className={"w-full bg-white text-black text-center bg-gray-100"}>
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
                                <td className={"border "}>
                                    <button className={" py-2 bg-red-500 px-6 rounded"} onClick={() => {
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
