import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiCalendarDate, CiMenuKebab } from "react-icons/ci";

const TaskCard = ({ data, status }) => {

    return (
        <>
            <div className="max-w-2xl mx-auto px-4 bg-secondary text-gray-400 shadow-xl shadow-yellow-700 hover:bg-yellow-500 hover:text-indigo-600 hover:shadow-2xl hover:shadow-yellow-500 rounded-lg my-12">
                <div className="py-5 flex items-center justify-between">
                    <div className="flex gap-3 items-center">

                        <div className='text-start'>
                            <span className="block text-lg font-semibold">{data?.title}</span>
                            <span className="block text-sm">{data?.description}</span>
                            <span className="text-sm flex items-center gap-2 mt-4">
                                <CiCalendarDate className='text-xl' /> {data?.date}
                            </span>
                        </div>

                    </div>
                    <div className='flex gap-4 items-center'>
                        <p className='bg-cyan-200 opacity-60 text-gray-600 px-4 rounded-full'>
                            <span className={`${status === "complete" ? "text-green-600" : "text-orange-700"}`}>
                                {status ? status : "pending"}
                            </span>
                        </p>
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