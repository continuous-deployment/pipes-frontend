import { Store } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

class NewPipeModalStore extends Store
{
  settings = null;

  getSettings(id, callback) {
    if (this.settings !== null) {
      return this.settings;
    }

    return {
      pipeId: '',
      relationship: '',
      show: false
    };
  }

  __onDispatch (action) {
    switch (action.type) {
      case 'SHOW_MODAL':
        this.settings = action.action;
        this.__emitChange();
        break;
      default:
        // no op
    }
  }
}

export default new NewPipeModalStore(AppDispatcher);
