import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Dashboard from './views/Dashboard.js';
import Projects from './views/Projects.js';
import Project from './views/Project.js';
import ProjectUpdate from './views/ProjectUpdate.js';
import ProjectStore from './views/ProjectStore.js';
import Hosts from './views/Hosts.js';
import Host from './views/Host.js';
import HostUpdate from './views/HostUpdate.js';
import HostStore from './views/HostStore.js';

render((
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Dashboard} />
      <Route path='projects' component={Projects}/>
      <Route path='projects/store' component={ProjectStore} />
      <Route path='projects/:id' component={Project} />
      <Route path='projects/:id/update' component={ProjectUpdate} />
      <Route path='hosts' component={Hosts}/>
      <Route path='hosts/store' component={HostStore} />
      <Route path='hosts/:id' component={Host} />
      <Route path='hosts/:id/update' component={HostUpdate} />
    </Route>
  </Router>
), document.getElementById('root'));
