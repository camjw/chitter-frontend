export default function reducePeeps(state = [], action) {
  switch (action.type) {
    case 'ADD_PEEPS':
      return {
        peeps: action.peeps,
        isFetching: action.isFetching,
        receivedAt: action.receivedAt,
      };
    case 'CLEAR_PEEPS':
      return {
        peeps: [],
        isFetching: action.isFetching,
      };
    case 'REQUEST_PEEPS':
      return {
        peeps: action.peeps,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
}
