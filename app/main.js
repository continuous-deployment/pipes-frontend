var React = require('react');
var Hello = require('./component.jsx');
require('../less/app.less');

main();

function main () {
  React.render(
      <Hello />, document.getElementById('app')
  );
}
