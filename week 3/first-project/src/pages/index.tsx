import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyTable from "@/component/ My table";
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  let product=[
    {ID:1,name:"product 1",price:3000},
    {ID:2,name:"product 2",price:3200},
    {ID:3,name:"product 3",price:3500},
  ]
  let product2=[
    {ID:4,name:"product 4",price:8200},
    {ID:5,name:"product 5",price:2200},
    {ID:6,name:"product 6",price:1200},
  ]

  return (
    <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    product && <MyTable mydata={product} caption={"product list 1"}/>
    product2 &&<MyTable mydata={product2} caption={"product list 2"}/>
    </main>
  )
}
