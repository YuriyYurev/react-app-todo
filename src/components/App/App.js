import './App.css'
import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';
import AppHeader from '../AppHeader';
import ItemStatusFilter from '../ItemStatusFilter';

export default function App() {
    const todoData = [
        { label: 'Выптиь кофе', important: false, id: '01' },
        { label: 'Выптиь чаю', important: true, id: '02' },
        { label: 'Выптиь молока', important: false, id: '03' },
        { label: 'Выптиь водички', important: true, id: '04' },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};
