import Todo from "./todo";

const getTodos = async () => {
  let todos = fetch("https://todoapi-virid.vercel.app/api/todo/list")
  return (await (todos)).json();
}


export default async function TodoList() {
  const { todos } = await getTodos();
  return <>{
    <div>
      <ul style={{ margin: "10px 10px" }}>
        {todos.map((t: any) => {
          return (

            <li key={t.id} style={{ padding: "5px 0px" }}>
              <Todo todo={t} />
            </li>

          )
        })}
      </ul>
    </div>
  }</>;
}