import React from 'react';
import { schedule } from '../data/scheduleData';

const EventSchedule: React.FC = () => {
    return (
        <div>
            {schedule.map(dayInfo => (
                <div key={dayInfo.day} className="mb-12">
                    <h3 className="text-3xl font-bold text-[#00643f] mb-6 text-center">{dayInfo.day}</h3>
                    <div className="bg-white rounded-lg shadow-md border border-gray-200">
                        <ul className="divide-y divide-gray-200">
                            {dayInfo.agenda.map((item, index) => (
                                <li key={index} className="flex flex-col md:flex-row items-start p-4">
                                    <span className="font-bold text-lg text-gray-800 w-full md:w-48 mb-2 md:mb-0">{item.time}</span>
                                    <span className="text-lg text-gray-600 flex-1">{item.description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventSchedule;