import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
  ]);

  const onTodoDataFetch = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    setTodos(json);
  };
  return (
    <>
      <p>데이터 fecthing과 useEffect 훅</p>
      <hr/>
      <button onClick={onTodoDataFetch}>서버에서 데이터 가져오기</button>
      <p>할일 목록</p>
      <ul>
        {
          todos.map(todo => <li>{todo.title} - {todo.completed ? '완료' : '잔행중'}</li>)
        }
      </ul>
    </>
  );
}