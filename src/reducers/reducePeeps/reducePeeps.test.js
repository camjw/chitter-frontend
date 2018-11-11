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
});
