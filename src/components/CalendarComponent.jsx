import React, { useState } from 'react';
import Calendar from 'react-calendar';



// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarComponent = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
};

export default CalendarComponent;