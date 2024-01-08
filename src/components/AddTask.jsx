import React from 'react';
import AddTaskModal from './AddTaskModal';
import { useForm } from 'react-hook-form';

const AddTask = ({ modalTitle, setShowModal }) => {
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = (data) => {
        data.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        // console.log(data);
        let arr = new Array();
        const taskData = JSON.parse(localStorage.getItem("task"));
        if(taskData){
            arr = [...taskData, data];
        }
        else{
            arr = [data]
        }

        localStorage.setItem("task",JSON.stringify(arr));
        reset();
        // setShowModal(false);
    }
    return (
        <div>
            <AddTaskModal modalTitle={modalTitle} setShowModal={setShowModal}>
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label for="title">Task Name</label>
                            <input {...register("title", { required: true })} name="title" id="title" type="text" />
                        </div>
                        <div className="form-group">
                            <label for="textarea">Task Description</label>
                            <textarea {...register("description", { required: true })} cols="50" rows="10" id="description" name="description" />
                        </div>
                        <div className='flex flex-row gap-10 justify-end items-center text-gray-400 font-semibold'>
                            <label htmlFor="date" >Date :</label>
                            <input {...register("date", { required: true })} type="date" name="date" id="date" />
                        </div>
                        <button type="submit" className="form-submit-btn">Submit</button>
                    </form>
                </div>
            </AddTaskModal>
        </div>
    );
};

export default AddTask;