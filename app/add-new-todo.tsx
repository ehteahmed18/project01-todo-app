"use client";
import { useRouter } from "next/navigation";
import {useState} from "react";
import style from "./page.module.css";


async function addToDo(name:any , refresh:any){
    await fetch("/api/todo/add",{
        method: "POST",
        body: JSON.stringify({name})
    })

refresh();
}


export default function Addtodo() {
    const router = useRouter();
    let [name, setName] = useState("");
    return (
        <div>
            <input className= {style.box}type="text" onChange={(e) => setName(e.target.value)}
            value = {name}
            />
            <button className={style.addbutton} onClick={async () => {await addToDo(name,router.refresh); setName("");
        }}>Add</button>
        </div>
    )
}