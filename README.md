# ⚛️ React Education

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-in%20progress-yellow?style=flat-square)

Репозиторий домашних заданий по курсу **React + Frontend разработка**.
Каждое ДЗ — отдельный Vite-проект в своей папке.

---

## 🌟 Финальный проект — [ветка `master`](https://github.com/rxritet/React-Education/tree/master)

**Book App** — полноценное SPA-приложение для управления книгами.

- 📖 Страница `/book` — список всех книг
- ➕ Страница `/addbook` — добавление новой книги
- ❌ Страница `404` — обработка несуществующих маршрутов
- 🔗 Маршрутизация через **React Router v6** (`BrowserRouter`, `Routes`, `Route`, `Link`)

```bash
# Запуск финального проекта
git checkout master
cd my-app
npm install
npm run dev
```

---

## 📂 Домашние задания — ветка `main`

| Папка | Тема | Ключевые концепции |
|---|---|---|
| [HomeWork-1](./HomeWork-1) | Основы компонентов | JSX, функциональные компоненты, props, Header/Footer |
| [HomeWork-4](./HomeWork-4) | TODO-приложение | `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`, localStorage, фильтрация |
| [HomeWork-5](./HomeWork-5) | Форма курса | Контролируемые компоненты, обработка форм, валидация |
| [HomeWork-6](./HomeWork-6) | Форма курса v2 | Продвинутая валидация, улучшенный UX форм |

---

## 🚀 Запуск любого ДЗ

```bash
# 1. Перейди в нужную папку
cd HomeWork-4

# 2. Установи зависимости
npm install

# 3. Запусти dev-сервер
npm run dev
```

Приложение откроется на `http://localhost:5173`

---

## 🛠️ Стек

- **React 18** — UI библиотека
- **React Router v6** — маршрутизация
- **Vite** — сборщик и dev-сервер
- **JavaScript (ES6+)** — язык разработки
- **CSS** — стилизация компонентов

---

## 📌 HomeWork-4 — TODO App

Полноценное TODO-приложение с:
- ✅ Добавлением и удалением задач
- ✅ Фильтрацией: Все / Активные / Выполненные
- ✅ Сохранением в `localStorage`
- ✅ Оптимизацией через `useMemo` и `useCallback`
- ✅ Автофокусом через `useRef`

```jsx
// Пример: мемоизированная фильтрация задач
const filteredTasks = useMemo(() => {
  switch (filter) {
    case 'active':    return tasks.filter(t => !t.completed)
    case 'completed': return tasks.filter(t => t.completed)
    default:          return tasks
  }
}, [tasks, filter])
```

---

## 👤 Автор

**Radmir Abraev** — [@rxritet](https://github.com/rxritet)
