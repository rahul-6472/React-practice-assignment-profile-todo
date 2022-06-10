import "./App.css";
import Profile from "./components/Profile";
import Todos from "./components/Todos";
import TodoHeading from "./components/TodoHeading";
function App() {

  const todos = [
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false },
  ];
  return (
    <div className="App">
      <Profile age={25} />

      <div className="todos">
        <TodoHeading />
        {todos.map((todo) => (
          <Todos todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
