var React = require('react');

var InputApp = React.createClass({
  _onKeyDown:function(e){
    if(e.keyCode === 13){
      var todo = {
        id: '',
        text: ''
      };
      todo.text = e.target.value;
      todo.id = this.props.id;
      this.props.onSave(todo);
      //this.props.onSave(e.target.value);
      e.target.value="";
    }
  },
  render: function(){
      return (
        <div>
          <h2>Hidsence Tasks</h2>
          <input type="text" onKeyDown={this._onKeyDown} />
        </div>
      );
  }
});

module.exports = InputApp;
