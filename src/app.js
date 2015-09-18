var React = require('react');
var Todo = require('./todo');
var InputApp = require('./inputapp');

var generateId = (
	function(){
		var id = 10;
		return function(){
			return (id++);
		}
	}
)();

var TodoList = React.createClass({
　//todos(ToDoリスト)を初期化
  getInitialState() {
    return {
      todos: [
        {id:1, text:"デザインどうする？"},
        {id:2, text:"アカウント機能とかいる？"},
        {id:3, text:"ていうかTODOアプリ形式でいいの？"}
      ]
    };
  },
  //引数のidに一致するデータをtodosから削除
  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      })
    });
  },
  //引数のToDoをToDoリスト(todos)にアペンドする。
  updateToDoList:function(todo){
    var tmptodos = this.state.todos.concat(todo);
    this.setState({todos: tmptodos});
  },
  render() {
    //ToDoリストのデータをMarkdown形式で書き換える。
    var todos = this.state.todos.map((todo) => {
      return <li key={todo.id}><Todo onDelete={this.deleteTodo} todo={todo} /></li>;
    });
    return (
      <div>
        <InputApp onSave={this.updateToDoList} id={generateId()} />
        <ul>{todos}</ul>
      </div>
    );
  }
});

React.render(
  <TodoList />, document.getElementById('app-container')
);
