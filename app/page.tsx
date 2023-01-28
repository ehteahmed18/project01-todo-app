
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Addtodo from './add-new-todo'
import TodoList from './todolist'




export default function Page(){
  return (
    <>
      <div className={styles.page}>
      <Addtodo />
      </div>
      <div>
        {/* @ts-ignore */}
      <TodoList />
      </div>
</>
  )
}
