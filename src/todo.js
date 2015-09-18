var React = require('react');

var Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired
    }),
    // 削除するための処理をI/Fとして定義
    onDelete: React.PropTypes.func.isRequired
  },
  // 親に処理を委譲する
  _onDelete() {
    this.props.onDelete(this.props.todo.id);
  },
  render() {
    return (
      <div>
        <span>{this.props.todo.text}</span>
        <button onClick={this._onDelete}>delete</button>
      </div>
    );
  }
});

module.exports = Todo;
