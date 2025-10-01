import React from 'react'
import TaskItem from './TaskItem'

// Компонент для списка задач, обернутый в React.memo для оптимизации
const TaskList = React.memo(({ tasks, onToggleTask, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>Пока нет задач. Добавьте первую задачу!</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  )
})

// Устанавливаем displayName для компонента для лучшей отладки
TaskList.displayName = 'TaskList'

export default TaskList