require('../less/app.less');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Dashboard from './views/Dashboard.js';
import Projects from './views/Projects.js';
import Project from './views/Project.js';
import ProjectUpdate from './views/ProjectUpdate.js';
import ProjectStore from './views/ProjectStore.js';
import Pipeline from './views/Pipeline.js';

render((
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='projects' component={Projects}/>
      <Route path='projects/store' component={ProjectStore} />
      <Route path='projects/:id' component={Project} />
      <Route path='projects/:id/update' component={ProjectUpdate} />
      <Route path='pipeline/:id' component={Pipeline} />
    </Route>
  </Router>
), document.getElementById('root'));

String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
