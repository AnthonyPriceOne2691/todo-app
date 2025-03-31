import { Button } from "./button";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoFiltersProps {
  todos: Todo[];
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  clearCompleted: () => void;
}

export default function TodoFilters({
  todos,
  filter,
  setFilter,
  clearCompleted,
}: TodoFiltersProps) {
  return (
    <div className="flex justify-between items-center mt-4">
      <span data-testid="remaining-count">
        {todos.filter((t) => !t.completed).length} items left
      </span>
      <div>
        <Button
          variant="ghost"
          onClick={() => setFilter("all")}
          className={filter === "all" ? "font-bold" : ""}
          data-testid="filter-all"
        >
          All
        </Button>
        <Button
          variant="ghost"
          onClick={() => setFilter("active")}
          className={filter === "active" ? "font-bold" : ""}
          data-testid="filter-active"
        >
          Active
        </Button>
        <Button
          variant="ghost"
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? "font-bold" : ""}
          data-testid="filter-completed"
        >
          Completed
        </Button>
      </div>
      <Button onClick={clearCompleted} data-testid="clear-completed">
        Clear completed
      </Button>
    </div>
  );
}
