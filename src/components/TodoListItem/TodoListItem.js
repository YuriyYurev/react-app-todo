import { Component } from 'react';
import './TodoListItem.css'

export default class TodoListItem extends Component {
    state = {
        done: false
    };

    onLabelClick = () => {
        this.setState({
            done: true
        })
    };

    render() {
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item'
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        if(done) {
            classNames += ' done';
        }

        return (
            <span className={classNames} onClick={this.onLabelClick}>
                <span
                    className="todo-list-item-label"
                    style={style}>
                    {label}
                </span>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>
            </span>
        )
    }
}
