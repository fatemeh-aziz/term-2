let state:State;
type State={
    numberOne: Number|String;
    numberTwo: Number|String;
    operator: Boolean;
    currentResult:String;
}
function initState(currentResult:string = ""){
    printInResult(currentResult);
    state   = {
        numberOne: "",
        numberTwo: "",
        operator: false,
        currentResult: currentResult
    }
}
initState();
function setNumber(val:number){
    if(!state.operator) {  // fill number One
        state.currentResult = "";
        state.numberOne = state.numberOne + val;
        printInResult(state.numberOne);
    }
    else{
        state.numberTwo = state.numberTwo + val;
        printInResult(state.numberTwo,true);
    }
}

function setOperator(val){
    if((state.numberOne === "" && state.currentResult === "") || state.operator)
        return;
    state.operator = val;
    if(state.currentResult){
        state.numberOne = state.currentResult;
        state.currentResult = "";
    }
    printInResult(val,true);
}

function calc(){
    let result;

    if(state.numberTwo === "")
        return;

    state.numberOne= Number(state.numberOne);
    state.numberTwo= Number(state.numberTwo);

    if(state.operator === "+")
        result = state.numberOne + state.numberTwo;
    else if(state.operator === "-")
        result = state.numberOne - state.numberTwo;
    else if(state.operator === "*")
        result = state.numberOne * state.numberTwo;
    else
        result = state.numberOne / state.numberTwo;
    printInResult(result);
    printHistory(result);
    initState(result);
}

function printHistory(result:number){
    let div = document.createElement("div");
    div.innerText = state.numberOne + state.operator + state.numberTwo + " = " + result;
    document.getElementById("history").append(div);
}

function printInResult(str,append:boolean = false){
    document.getElementById("result").innerText = append ? document.getElementById("result").innerText + str : str;
