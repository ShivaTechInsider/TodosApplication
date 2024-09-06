// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {eachTodo, onDeleteTodo} = this.props
    const {id, title} = eachTodo
    const onDelete = () => {
      onDeleteTodo(id)
    }
    return (
      <li className="listContainer">
        <p className="listPara">{title}</p>
        <button className="delButton" type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
