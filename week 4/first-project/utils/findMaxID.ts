interface Data {
    ID: number;
    [key: string]: any;
}


const findMaxID = (dataArray: Array<Data>) => {
    let MaxID: number = 0;
    for (let i: number = 0; i < dataArray.length; i++) {
        const data: Data = dataArray[i];
        if (data.ID > MaxID) {
            MaxID = data.ID;
        }
    }
    return (MaxID);
}
export default findMaxID;