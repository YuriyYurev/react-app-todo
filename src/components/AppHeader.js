import './AppHeader.css';

export default function AppHeader({ toDo, done }) {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{toDo} активных, {done} выполнено</h2>
        </div>
    );
};
