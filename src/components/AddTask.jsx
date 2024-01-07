import React from 'react';
import AddTaskModal from './AddTaskModal';
import { useForm } from 'react-hook-form';

const AddTask = ({ modalTitle, setShowModal }) => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <AddTaskModal modalTitle={modalTitle} setShowModal={setShowModal}>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label for="task">Task Name</label>
                            <input {...register("task")} name="task" id="task" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="textarea">Task Description</label>
                            <textarea {...register("description")} required="" cols="50" rows="10" id="description" name="description"/>
                        </div>
                        <div className='flex flex-row gap-10 justify-end items-center text-gray-400 font-semibold'>
                            <label htmlFor="date" >Date :</label>
                            <input {...register("date")} type="date" name="date" id="date" />
                        </div>
                        <button type="submit" className="form-submit-btn">Submit</button>
                    </form>
                </div>
            </AddTaskModal>
        </div>
    );
};

export default AddTask;