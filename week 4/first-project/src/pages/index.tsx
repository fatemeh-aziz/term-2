import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyTable from "@/component/My table"
const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  let product=[
    {ID:1,name:"product 1",price:3000},
    {ID:2,name:"product 2",price:3200},
    {ID:3,name:"product 3",price:3500},
  ]

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
      <MyTable mydata={product} caption={"product list 1"}/>
    </main>
  )
}
