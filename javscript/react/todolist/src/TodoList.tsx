import { useState } from "react";
import "./App.css";
import Timer from "./timer";
import Clock from "./clock";
import { Button, Modal } from "react-bootstrap";
import TodoModal from "./todoModal";

interface MyComponentProps {
  title: string;
}

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const TodoList: React.FC<MyComponentProps> = ({ title }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "운동하기", isChecked: false },
    { id: 2, text: "공부하기", isChecked: false },
    { id: 3, text: "산책하기", isChecked: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");
  const [showDetail, setShowDetail] = useState<boolean>();

  const handleCheckboxChange = (itemId: number) => {
    setTodos((prevItem) =>
      prevItem.map((item) =>
        // 스프래드 연산자는 기존 값을 바꾸는게 아니라 새로운 값 복사
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);

      setNewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id != id;
      })
    );
  };

  const handleTodoClick = (todo : Todo) => {
    setShowDetail(true);
  }

  const handleCloseDetail = () => {
    setShowDetail(false);
  }
  return (
    <div className="container mt-5">
      <h1 className="titlebk">{title}</h1>
      <div className="form-group d-flex align-items-center mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="할일 입력"
          style={{ writingMode: "horizontal-tb" }}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="btn btn-success"
          style={{ whiteSpace: "nowrap" }}
          onClick={() => {
            addTodo();
          }}
        >
          추가하기
        </button>
      </div>
      <p></p>
      <div className="card">
        <div className="card-body">
          <ul className="list-group">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={() => {
                      handleCheckboxChange(todo.id);
                    }}
                  />
                  <label htmlFor="" className="form-check-label">
                    <span
                        onClick={() => {handleTodoClick(todo)}}
                    >
                      {todo.isChecked ? (
                        <del>{todo.text}</del>
                      ) : (
                        <span>{todo.text}</span>
                      )}
                    </span>
                  </label>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeTodo(todo.id)}
                  >
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div><br /><br />
       <TodoModal 
        show={showDetail}
        handleClose = {handleCloseDetail}
        ></TodoModal>
      <Timer></Timer>
      <Clock></Clock>
    </div>
  );
};
export default TodoList;
