class PipeUtils
{
  getNextPipesFromPipe (pipe) {
    var pipes = [];
    if (pipe.type === 'condition') {
      if (pipe.success !== undefined) {
        pipes.push(pipe.success);
      }

      if (pipe.failure !== undefined) {
        pipes.push(pipe.failure);
      }
    }

    if (pipe.type === 'splitter') {
      if (pipe.splits === undefined) {
        pipes = [];
      } else {
        pipes = pipe.splits;
      }
    }

    if (pipe.type === 'action') {
      if (pipe.next !== undefined) {
        pipes.push(pipe.next);
      }
    }

    return pipes;
  }
}

export default new PipeUtils();
