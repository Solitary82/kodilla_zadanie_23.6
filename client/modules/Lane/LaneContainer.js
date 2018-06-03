import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';

import { updateLaneRequest, deleteLaneRequest } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => {
      return { ...state.notes[noteId] };
    }),
  };
};

const mapDispatchToProps = {
  ...laneActions,
  updateLane: updateLaneRequest,
  deleteLane: deleteLaneRequest,
  addNote: createNoteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
