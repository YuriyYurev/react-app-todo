import { Component } from 'react';
import './ItemStatusFilter.css';
export default class ItemStatusFilter extends Component {
    render() {
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
    }
}
