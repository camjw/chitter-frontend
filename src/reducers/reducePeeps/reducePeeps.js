import * as peepActions from '../../actions/peepActions';

export default function reducePeeps(state = [], action) {
  switch (action.type) {
    case peepActions.ADD_PEEPS:
      return {
        peeps: action.peeps,
        isFetching: action.isFetching,
        receivedAt: action.receivedAt,
      };
    case peepActions.CLEAR_PEEPS:
      return {
        peeps: [],
        isFetching: action.isFetching,
      };
    case peepActions.REQUEST_PEEPS:
      return {
        peeps: action.peeps,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
}
