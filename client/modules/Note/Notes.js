import { PropTypes } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import * as noteActions from '../Note/NoteActions';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote }) => {
    
  return (<ul className={styles.Notes}>{notes.map((note) =>

      <Note
  id={note.id}
  key={note.id}
  editing={note.editing}
>
  <Edit
    editing={note.editing}
    value={note.task}
    onValueClick={() => editNote(note.id)}
    onUpdate={(task) => updateNote({
        ...note,
        task,
        editing: false,
      }
    )}
    onDelete={() => deleteNote(note.id, laneId)}
  />
</Note>
  )}</ul>);
};

const mapDispatchToProps = {
  ...noteActions,
};
    
Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);