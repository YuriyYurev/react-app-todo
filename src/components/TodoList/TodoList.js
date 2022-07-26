import TodoListItem from "../TodoListItem";
import './TodoList.css'

export default function TodoList({ todos }) {

    const elements = todos.map(item => {
        const { id, ...itemProps } = item;

        return <li key={id} className="list-group-item"><TodoListItem {...itemProps} /></li>;
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};
