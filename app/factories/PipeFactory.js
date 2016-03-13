import ActionPipe from '../components/pipeline/pipes/ActionPipe.js';
import ConditionPipe from '../components/pipeline/pipes/ConditionPipe.js';
import SplitterPipe from '../components/pipeline/pipes/SplitterPipe.js';

class PipeFactory {
  mapping = {
    condition: ConditionPipe,
    action: ActionPipe,
    splitter: SplitterPipe
  }

  make (pipeType = '') {
    if (pipeType === '') {
      return null;
    }

    var type = this.mapping[pipeType];

    if (type === undefined) {
      return null;
    }

    return type;
  }
}

export default PipeFactory;
