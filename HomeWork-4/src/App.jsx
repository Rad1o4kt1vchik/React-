import { useState, useRef, useCallback, useEffect, useMemo } from 'react'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  // Состояние для задач и фильтра
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('todoTasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  const [newTaskText, setNewTaskText] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'
  
  // Реф для input для возврата фокуса
  const inputRef = useRef(null)

  // Сохранение в localStorage при изменении задач
  useEffect(() => {
    localStorage.setItem('todoTasks', JSON.stringify(tasks))
  }, [tasks])

  // Мемоизированная функция добавления задач
  const addTask = useCallback(() => {
    if (newTaskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: newTaskText.trim(),
        completed: false
      }
      setTasks(prevTasks => [...prevTasks, newTask])
      setNewTaskText('')
      inputRef.current?.focus()
    }
  }, [newTaskText])

  // Мемоизированная функция переключения статуса задачи
  const toggleTask = useCallback((id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }, [])

  // Мемоизированная функция удаления задачи
  const deleteTask = useCallback((id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }, [])

  // Обработчик отправки формы
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    addTask()
  }, [addTask])

  // Обработчик нажатия Enter
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }, [addTask])

  // Фильтрованные задачи
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed)
      case 'completed':
        return tasks.filter(task => task.completed)
      default:
        return tasks
    }
  }, [tasks, filter])

  // Счетчики
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const activeTasks = totalTasks - completedTasks

  return (
    <div className="app">
      <h1>TODO Приложение</h1>
      
      {/* Форма добавления задач */}
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          ref={inputRef}
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Введите новую задачу..."
          className="task-input"
          autoFocus
        />
        <button type="submit" className="add-button">
          Добавить задачу
        </button>
      </form>

      {/* Фильтры */}
      <div className="filters">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Все ({totalTasks})
        </button>
        <button
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Активные ({activeTasks})
        </button>
        <button
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Выполненные ({completedTasks})
        </button>
      </div>

      {/* Счетчики */}
      <div className="stats">
        <span>Всего задач: {totalTasks}</span>
        <span>Выполнено: {completedTasks}</span>
      </div>

      {/* Список задач */}
      <TaskList
        tasks={filteredTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
