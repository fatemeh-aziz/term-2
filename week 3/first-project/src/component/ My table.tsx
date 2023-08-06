
interface product {
    ID:number,
    name:string,
    price:number,
}
interface prop{
    mydata:Array<product>
}



export default function MyTable({mydata}:prop) {
    console.log(mydata)
    return (
        <table className={"w-full bg-white"}>
            <tbody>
            {
                mydata.map((item:product,index:number)=> {
                    return(
                    <tr>
                        <td>{mydata.ID}</td>
                        <td>{mydata.name}</td>
                        <td>{mydata.price}</td>
                    </tr>
                    )
                })
            }
            </tbody>

        </table>
    )
}
