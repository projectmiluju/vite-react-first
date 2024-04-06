import { useState } from "react";

export default function App() {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    {title: '고객에게 메일보내기', completed: false},
    {title: '저녁 미팅', completed: false},
    {title: '집 청소하기', completed: true},
  ]);

  const increase = () =>{
    setCount(count + 1)
  }

  const decrease = () =>{
    setCount(count -1)
  }

  const onTodoType = e =>{
    setText(e.target.value);
  };

  const onAddTodo = () =>{
    // array에 아이템을 추가하기 위해서 immutable 한 방식을 사용한다.
    setTodos([
      ...todos,
      {title: text, completed: false}
    ])
  };

  return (
    <>
      <button onClick={decrease}>-</button> {count} <button onClick={increase}>+</button>
      <hr/>
      <h3>할일 목록</h3>
      <input type="text" value={text} onChange={onTodoType}/>
      <button onClick={onAddTodo}>할일추가</button>
      <ul>
        {/* <li>고객에게 메일보내기</li>
        <li>저녁 미팅</li>
        <li>집 청소하기</li> */}
        {
          todos.map(todo => <li>{todo.title} - {todo.completed ? '완료' : '진행중'}</li>)
        }
      </ul>
    </>
  )
}