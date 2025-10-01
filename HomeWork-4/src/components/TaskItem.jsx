import React from 'react'

// Компонент для отдельной задачи, обернутый в React.memo для оптимизации
const TaskItem = React.memo(({ task, onToggle, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="checkmark"></span>
      </label>
      
      <span className="task-text">
        {task.text}
      </span>
      
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        title="Удалить задачу"
      >
        ×
      </button>
    </div>
  )
})

// Устанавливаем displayName для лучшей отладки
TaskItem.displayName = 'TaskItem'

export default TaskItem