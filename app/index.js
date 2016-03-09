import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Dashboard from './views/Dashboard.js';
import Projects from './views/Projects.js';
import Project from './views/Project.js';
import ProjectUpdate from './views/ProjectUpdate.js';

render((
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='projects' component={Projects}/>
      <Route path='projects/:id' component={Project} />
      <Route path='projects/:id/update' component={ProjectUpdate} />
    </Route>
  </Router>
), document.getElementById('root'));
