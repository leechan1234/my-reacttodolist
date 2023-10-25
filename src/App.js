import React, { useRef, useState } from "react";

import "./App.css";
import Header from "./Component/Header/Header";
import TodoEditor from "./Component/TodoEditor/TodoEditor";
import TodoItem from "./Component/TodoItem/TodoItem";
import TodoList from "./Component/TodoList/TodoList";

function App() {
  // 할 일 추가 상태 관리
  const [todo, setTodo] = useState([]);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
      //  id 증가값(이렇게 안하면 고정으로 0됨)
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    // 배열 todo를 newItem에 업데이트
    setTodo([newItem, ...todo]);
    // Ref id값 증가
    idRef.current += 1;
  };
  // 아이템 수정 함수 (사용자가 체크박스를 클릭 했을때 id로 기준 잡아서 저장 )
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) => {
        if (it.id === targetId) {
          return {
            ...it,
            isDone: !it.isDone,
          };
        } else {
          return it;
        }
      })
    );
  };
  //삭제 함수
  const onDelete = (targetId) => {
    //targetId를 사용하여 todo 배열에서 해당 ID와 일치하는 항목을 삭제하는 역할
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      {/* todo값을 list에 props으로 전달 */}
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      
    </div>
  );
}

export default App;
