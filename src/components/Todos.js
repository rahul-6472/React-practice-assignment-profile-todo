import TodoItem from "./TodoItem";

const Todos = ({ todo }) => {
  return (
    <div className="todo">
      <TodoItem todo={todo} />
    </div>
  );
};

export default Todos;
