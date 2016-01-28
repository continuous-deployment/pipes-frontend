import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';

import Dashboard from './views/Dashboard.js';
import Projects from './views/Projects.js';
import Project from './views/Project.js';

const App = React.createClass({
  render () {
    return (
      <div>
        <ul>
          <li><Link to='/'>Dashboard</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/projects/project/1'>View project</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

render((
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='projects' component={Projects}>
        <Route path='project/:id' component={Project} />
      </Route>
    </Route>
  </Router>
), document.body);
