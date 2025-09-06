'use client';
import React from 'react';

interface CalendarGridProps {
  currentDate: Date;
  today: Date;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, today }) => {
  const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const generateCalendarDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-8"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`w-10 h-8 flex items-center justify-center text-sm font-medium cursor-pointer rounded-lg transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
            isToday(day)
              ? 'bg-blue-500 text-white shadow-lg hover:bg-blue-600 hover:text-white'
              : 'text-gray-700 hover:shadow-md'
          }`}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-1 mb-2 max-w-md mx-auto">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="w-10 h-7 flex items-center justify-center text-xs font-semibold text-gray-500 uppercase tracking-wide"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 max-w-md mx-auto">
        {generateCalendarDays()}
      </div>
    </>
  );
};

export default CalendarGrid;
