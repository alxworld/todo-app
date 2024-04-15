export function Todo({ todos }) {
  const mytodos = todos.map(todo => (
    <div key={todo.id}>
      <input type="text" placeholder="title" value={todo.title} /> <br />
      <input type="text" placeholder="description" value={todo.description} /> <br />
      <button>Complete</button>
    </div>
  ))
  return mytodos
}
