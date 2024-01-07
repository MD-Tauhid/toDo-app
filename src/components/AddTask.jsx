import React from 'react';
import AddTaskModal from './AddTaskModal';

const AddTask = ({modalTitle, setShowModal}) => {
    return (
        <div>
            <AddTaskModal modalTitle={modalTitle} setShowModal={setShowModal}>
                <div className="form-container">
                    <form className="form">
                        <div className="form-group">
                            <label for="task">Task Name</label>
                            <input required="" name="task" id="task" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="textarea">Task Description</label>
                            <textarea required="" cols="50" rows="10" id="textarea" name="task-desc">

                            </textarea>
                        </div>
                        <div className='flex flex-row gap-10 justify-end items-center text-gray-400 font-semibold'>
                            <label htmlFor="date" >Date :</label>
                            <input type="date" name="date" id="date" />
                        </div>
                        <button type="submit" className="form-submit-btn">Submit</button>
                    </form>
                </div>
            </AddTaskModal>
        </div>
    );
};

export default AddTask;