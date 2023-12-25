import React from 'react';
import { ImCross } from "react-icons/im";
import { FaRegCircleCheck } from "react-icons/fa6";

const TaskCard = () => {
    
    return (
        <>
            <div className="max-w-2xl mx-auto px-4 bg-yellow-500">
                <div className="py-5 flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                        <FaRegCircleCheck />
                        <div>
                            <span className="block text-sm text-gray-700 font-semibold">hi</span>
                        </div>
                    </div>
                    <ImCross />
                </div>

            </div>
        </>
    );
};

export default TaskCard;