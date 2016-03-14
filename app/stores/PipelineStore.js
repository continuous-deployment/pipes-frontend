import { Store } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import PipeConstants from '../constants/PipeConstants.js';
import PipeUtils from '../utils/PipeUtils.js';

class PipelineStore extends Store
{
  pipeline = null;

  getPipeline(id, callback) {
    if (this.pipeline !== null) {
      return callback(this.pipeline);
    }

    $.ajax({
      url: 'http://192.168.1.114:8000/api/v1/pipeline/' + id,
      type: 'GET',
      dataType: 'JSON',
      success: function (data) {
        this.pipeline = data;
        callback(data);
      }.bind(this)
    });
  }

  __onDispatch (action) {
    switch (action.type) {
      case 'ADD_PIPE':
        this.addNewPipe(this.pipeline, action.action);
        this.__emitChange();
        break;
      default:
        // no op
    }
  }

  addNewPipe (pipe, newPipe) {
    if (pipe.id === newPipe.parentPipeId) {
      pipe[newPipe.relationship] = {
        type: newPipe.type,
        attributes: newPipe.attributes
      };

      return;
    }

    var nextPipes = PipeUtils.getNextPipesFromPipe(pipe);

    if (nextPipes.length === 0) {
      return;
    }

    for (var i = 0; i < nextPipes.length; i++) {
      this.addNewPipe(nextPipes[i], newPipe);
    }
  }
}

export default new PipelineStore(AppDispatcher);
