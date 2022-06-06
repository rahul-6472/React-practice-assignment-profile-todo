const TodoItem = ({ todo }) => {
  return (
    <div>
      {todo.status ? (
        <div style={{ color: "green" }}>{todo.title}</div>
      ) : (
        <div style={{ color: "red" }}>{todo.title}</div>
      )}
    </div>
  );
};

export default TodoItem;
