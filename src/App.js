import './index.css'
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';
import AppHeader from './components/AppHeader';

export default function App() {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}
