import { useState } from "react"

const formatDate = (date) => {

  new Date()
  const year = date.getFullYear();
  const mouth = date.getFullMouth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${date < 10 ? '0' + day : day}.${mouth < 10 ? '0' + mouth : mouth}.${year} (${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes})`;
}

function App() {

  const [todos, serTodos] = useState([
    {
      id: 1,
      name: "Купить продукты",
      checked: false,
      date: new Date()
    },
    {
      id: 2,
      name: "Сходить на прием к врачу",
      checked: true,
      date: new Date()
    }
  ]);

  const [value, setValues] = useState("");

  const onChangeHandle = (event) => {
    setValue(event.target.value)
  }

  const onSumbitHandle = (event) => {
    event.preventDefault();
    setTodos([...todos, {
      id: Date.now(),
      name: value,
      checked: false,
      date: new Date()
    }]);

    setValues('');
  }

  const toggleChecked = (id) => {
    serTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            checked: !todo.checked
          };
        }

        return todo;

      });

      return prevState;

    });
  }

  const removeTodo = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];

      prevState = prevState.filter((todo) => todo.id !== id)

      return prevState;
    })
  }

  return (
    <div className="App">
      {/* Контейнер */}
      <div>
        {/* Header */}
        <header>
          <h2>Добавить залачу</h2>

          <form onSubmit={(event) => onSumbitHandle(event)}>

            <input
              onChange={(event) => onChangeHandle(event)}
              value={value}
              type=""
              placeholder="Например: купить продукты" />

          </form>

        </header>

        {/* Todos */}
        <div>

          {
            todos.map((todo) => {
              return (
                <div>
                  <div>
                    <h3>{todo.name}</h3>
                    <p>Дата создания: {formatDate(todo.date)}</p>
                  </div>

                  {/* Buttons */}
                  <div>
                    <button onClick={() => toggleChecked(todo.id)}
                    >
                      (todo.checked ? "Done" : "Undone")
                    </button>
                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
                  </div>

                </div>
              )
            })
          }


          {/* Todo */}
          <div>
            <div>
              <h3>Название задач</h3>
              <p>Дата создания: 17.02.2022</p>
            </div>

            {/* Buttons */}
            <div>
              <button>Done</button>
              <button>Remove</button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default App
