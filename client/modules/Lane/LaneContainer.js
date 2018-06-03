import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';
import { createNoteRequest } from '../Note/NoteActions';
import { deleteLane, updateLane, editLane, moveBetweenLanes } from './LaneActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
	moveBetweenLanes,
	editLane,
	deleteLane,
	updateLane,
	addNote: createNoteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);