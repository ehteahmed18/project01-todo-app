"use client"
import {useRouter} from "next/navigation";
import style from "./page.module.css";

async function update(id:any, isDone:any, refresh:any) {
    await fetch("https://todoapi-virid.vercel.app/api/todo/update",{
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({id, isDone})
    })
    refresh();
}

async function deleteTools(id:any,refresh:any){
    await fetch(`/api/todo/delete?id=${id}`,{
    method: "DELETE",
})

refresh();
}

export default function Todo({todo}:any) {

const router = useRouter();

    return (
    <>
    <input style={{ margin: "2px 10px" }} type="checkbox" onChange={(e) => update(todo.id , e.target.checked, router.refresh)}
    checked={todo.isDone}
    />
    <span>{todo.name}</span>
    <button className={style.delete} onClick  = {() => deleteTools(todo.id,router.refresh)}>Delete</button>
    </>
    )
}


