import { useRef, useState } from "react";

import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  // 사용자가 입력할 데이터를 저장할State 변수
  const [content, setContent] = useState("");
  // 입력폼을 제어할 Ref 생성
  const inputRef = useRef();
  // 입력폼의 이벤트 핸들러 함수
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  // 버튼 클릭 이벤트 App.js의 onCreate 호출과 조건문을걸어 입력폼 제어
  const onSubmit = () => {
    // content가 빈 문자열이면 focus하고 종료
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    // 입력 후 값 비우기
    setContent("");
  };

  // enter 입력 후 onSubmit 함수를 호출 k => 소문자
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 todo 작성하기 🎾</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          type="text"
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          value={content}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
