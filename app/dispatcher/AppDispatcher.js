import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {

  handleViewAction (type, action) {
    this.dispatch({
      source: 'VIEW',
      type: type,
      action: action
    });
  }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;
