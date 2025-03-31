import { useState } from "react";
import { Card, CardContent } from "./card";
import { Input } from "./input";
import { Button } from "./button";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = () => {
    if (newTask.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">ToDo App</h1>
      <div className="flex gap-2 mb-4">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What needs to be done?"
        />
        <Button onClick={addTodo} data-testid="add-button">
          Add
        </Button>
      </div>
      <Card>
        <CardContent>
          <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
          <TodoFilters
            todos={todos}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
          />
        </CardContent>
      </Card>
    </div>
  );
}
