import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise, deleteExercise, updateExercise } from '../slices/exerciseSlice';

const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exercises);
  const [exercise, setExercise] = useState({ type: '', duration: '', calories: '' });
  const [updateMode, setUpdateMode] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateMode) {
      handleUpdate();
    } else {
      dispatch(addExercise({ ...exercise, id: Date.now() }));
      setExercise({ type: '', duration: '', calories: '' });
    }
  };

  const handleUpdate = () => {
    if (selectedExercise) {
      dispatch(updateExercise({ id: selectedExercise.id, updatedData: exercise }));
      setUpdateMode(false);
      setExercise({ type: '', duration: '', calories: '' });
      setSelectedExercise(null);
    }
  };

  return (
    <div>
      <h2>Exercises</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise Type"
          value={exercise.type}
          onChange={(e) => setExercise({ ...exercise, type: e.target.value })}
        />
        <input
          type="number"
          placeholder="Duration (min)"
          value={exercise.duration}
          onChange={(e) => setExercise({ ...exercise, duration: e.target.value })}
        />
        <input
          type="number"
          placeholder="Calories Burned"
          value={exercise.calories}
          onChange={(e) => setExercise({ ...exercise, calories: e.target.value })}
        />
        <button type="submit">{updateMode ? 'Update Exercise' : 'Add Exercise'}</button>
      </form>
      <ul>
        {exercises.map((ex) => (
          <li key={ex.id}>
            {ex.type} - {ex.duration} min - {ex.calories} cal
            <button onClick={() => { 
              setUpdateMode(true); 
              setSelectedExercise(ex); 
              setExercise({ type: ex.type, duration: ex.duration, calories: ex.calories }); // Set current exercise data for editing
            }}>
              Update
            </button>
            <button onClick={() => dispatch(deleteExercise(ex.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
