const React = require('react');
const { render } = require('react-dom');

const Hello = React.createClass({
  render: function() {
    return (
      <div className="hello">
        Hello, world!
      </div>
    );
  }
});
render(
  <Hello />,
  document.getElementById('root')
);
