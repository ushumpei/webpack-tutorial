const React = require('react');
const { render } = require('react-dom');

const CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
render(
  <CommentBox />,
  document.getElementById('root')
);
