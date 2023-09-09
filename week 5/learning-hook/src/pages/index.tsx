import Image from 'next/image'
import {Inter} from 'next/font/google'
import {useState} from "react";
import Message from "@/components/Message";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    const [counter, setCounter] = useState(1)
    const [showMessage, setShowMessage] = useState(true)

    const incClickHandler = () => {
        setCounter(prevState => prevState + 1)
    }
    const toggleClickHandler = () => {
        setShowMessage(prevState => !prevState)
    }


    return (
        <main className={'flex min-h-screen flex-col item-center p-24'}>
            <ul className={'text-2xl leading-10 mx-auto my-3'}>
                <li>{counter}</li>
                <li>2</li>
                <li>3</li>
                <li>
                    {showMessage &&< Message msg={"hello"}/>}
                </li>
            </ul>
            <button className={'rounded border p-3 mx-auto my-2 w-[200px]'} onClick={incClickHandler}>inc counter</button>
            <button className={'rounded border p-3 mx-auto my-2 w-[200px]'} onClick={toggleClickHandler}>toggle show message</button>
        </main>
    )
}
