import './ItemStatusFilter.css';

export default function ItemStatusFilter() {
    return (
        <div className="btn-group">
            <button type="button"
                className="btn btn-success">Все</button>
            <button type="button"
                className="btn btn-outline-success">Активные</button>
            <button type="button"
                className="btn btn-outline-success">Выполненные</button>
        </div>
    );
};
