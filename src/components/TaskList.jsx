import Task from './Task'

const TaskList = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks to show</p>
      ) : (
        tasks.map(task => (
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))
      )}
    </div>
  )
}

export default TaskList
