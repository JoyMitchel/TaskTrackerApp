const Task = ({ task, onDelete, onToggle }) => {
    return (
      <div
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          marginBottom: '8px'
        }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
        <button onClick={(e) => { e.stopPropagation(); onDelete(task.id) }} style={{ marginLeft: '10px' }}>
          ❌
        </button>
      </div>
    )
  }
  
  export default Task
  