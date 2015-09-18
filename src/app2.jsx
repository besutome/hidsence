var react = require('react');
 
var App2 = react.createclass({
  render: function(){
    return(
    <div>
      <h1>this is app 2 part</h1>
    </div>
    );
  }
});
 
react.render(
  <App2 />,
  document.getelementbyid('app2')
);
