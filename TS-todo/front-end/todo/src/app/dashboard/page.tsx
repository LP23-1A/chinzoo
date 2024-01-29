"use client"
import BoardTodo from "@/components/BoardTodo"
import BoardProgress from "@/components/BoardProgress"
import BoardComplated from "@/components/BoardComplated"
import { ChangeEvent, useState } from "react"
import { log } from "console"

export default function Page(){

    const [task, SetTask] = useState<string>("")
    const [deadline, Setdeadline] = useState<number>(0)
    const [todo, SetTodo] = useState<string>()

    function addtask (){

    }


    return(
        <div className="bg-white w-[100%] h-[100vh] text-black flex flex-col items-center justify-center">
            <div className="flex items-start flex-col justify-between gap-10">
                <div className=" flex gap-3">
                    <input onChange={(e) => SetTodo(e.target.value)} type="text" className="bg-gray-200 rounded-[5px] p-[5px]" />
                    <select id="category">
                        <option value="todo">todo</option>                       
                        <option value="progress">progress</option>                       
                        <option value="complate">complate</option>  
                    </select>
                    <p className="bg-red-200">{todo}</p>                     
                    <button onClick={addtask}>add task</button>
                </div>
               <div className="flex gap-5">
                    <BoardTodo/>
                    <BoardProgress/>
                    <BoardComplated/>
               </div>
            </div>
        </div>
    )
}