import { Checkbox } from "./checkbox";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

export default function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-2 py-2 border-b"
          data-testid="todo-item"
        >
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => toggleTodo(todo.id)}
            data-testid={`checkbox-${todo.id}`}
          />
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        </div>
      ))}
    </div>
  );
}
