import reducePeeps from './reducePeeps';

const addPeepsState = {
  isFetching: false,
  peeps: [{ body: 'test' }],
  receivedAt: 'today'
};

describe('reducePeeps', () => {

  it('should respond to ADD_PEEPS', () => {
    expect(reducePeeps([], Object.assign({}, {type: 'ADD_PEEPS'}, addPeepsState))).toEqual(addPeepsState);
  });

  it('should respond to CLEAR_PEEPS', () => {
    expect(reducePeeps([], Object.assign({}, {type: 'CLEAR_PEEPS'}, addPeepsState))).toEqual({ isFetching: false, peeps: [] });
  });

  it('should respond to REQUEST_PEEPS', () => {
    expect(reducePeeps([], Object.assign({}, {type: 'REQUEST_PEEPS'}, addPeepsState))).toEqual({ isFetching: false, peeps: [{ body: "test" }]});
  });

  it('should respond to a default option', () => {
    expect(reducePeeps(addPeepsState, Object.assign({}, {type: 'POST_PEEP'}, addPeepsState))).toEqual(addPeepsState);
  });

  it('should respond to a default parameters', () => {
    expect(reducePeeps(undefined, Object.assign({}, {type: 'POST_PEEP'}, addPeepsState))).toEqual([]);
  });
});
