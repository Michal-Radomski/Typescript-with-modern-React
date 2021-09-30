import React from "react";

type FormElem = React.FormEvent<HTMLFormElement>;
interface ToDo {
  text: string;
  complete: boolean;
}

function App() {
  const [value, setValue] = React.useState<string>("");
  const [todos, setTodos] = React.useState<ToDo[]>([]);

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    // console.log(value);
    addToDo(value);
    setValue("");
  };

// Add doDo to the list
  const addToDo = (text: string): void => {
    const newTodos: ToDo[] = [...todos, {text, complete: false}];
    setTodos(newTodos);
  };

// Set status to Complete
  const completeToDo = (index: number): void => {
    const newTodos: ToDo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

// Remove toDo from the list
  const removeTodo = (index: number): void => {
    const newTodos: ToDo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

//  console.log(todos);
  // debugger;

  return (
    <React.Fragment>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" required placeholder="Enter here..." value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Add ToDo</button>
      </form>
      <section>
        {todos.map((todo: ToDo, index: number) => {
          return (
            <div style={{backgroundColor: "whiteSmoke"}} key={index}>
              <div style={{textDecoration: todo.complete ? "line-through" : "underLine"}}>{todo.text}</div>
              <button type="button" onClick={(): void => completeToDo(index)}>                           // -": void" nie jest konieczne tu
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={(): void => removeTodo(index)}>                            // -": void" nie jest konieczne tu
                Remove
              </button>
              <hr />
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
