// 검색어 필터링을 위한 state 사용
import { useState } from "react";

import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  //검색어 필터링 state
  const [search, setSearch] = useState("");
  // 검색 필터링 함수
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  // 필터링 기능
  const getSearchResult = () => {
    // search 가 빈문자열이면 todo 그대로를 반환하고 그렇지 않으면todo 배열에서 search의 내용과 일치하는 아이템만 필터링해 반환
    return search === ""
      ? todo
      : todo.filter((it) =>
          // 대소문자 구별 x
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  return (
    <div className="TodoList">
      <h4>Todo List 🛒</h4>
      <input
        type="text"
        className="searchbar"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {/* APP에서 받은 TODO를 랜더링 해야됨 */}
        {/* getSearchResult()함수로 map을 순환시켜 맞는 문자열을 반환 */}
        {getSearchResult().map((it) => {
          // 리스트에 id로 key 구분  //3.onUpdate를 TodoItem으로 전달
          return (
            <TodoItem
              key={it.id}
              {...it}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
