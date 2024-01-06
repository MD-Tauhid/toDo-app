import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiCalendarDate, CiMenuKebab } from "react-icons/ci";

const TaskCard = ({status, task, description, date}) => {

    return (
        <>
            <div className="max-w-2xl mx-auto px-4 bg-purple-700 hover:bg-yellow-500 hover:text-indigo-700 hover:shadow-2xl rounded-lg">
                <div className="py-5 flex items-center justify-between">
                    <div className="flex gap-3 items-center">

                        <div className='text-start'>
                            <span className="block text-sm text-gray-700 font-semibold">Task name</span>
                            <span className="block text-sm text-gray-700">Write your description</span>
                            <span className="text-sm text-gray-700 flex items-center gap-2 mt-4">
                                <CiCalendarDate className='text-xl' /> 10/12/23
                            </span>
                        </div>

                    </div>
                    <div className='flex gap-4 items-center'>
                        <p className='bg-cyan-200 px-4 rounded-full'>status</p>
                        <button>
                            <MdDelete className='text-xl' />
                        </button>
                        <button>
                            {/* <CiMenuKebab className='text-xl' /> */}
                            <FaRegCircleCheck className='text-lg' />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default TaskCard;