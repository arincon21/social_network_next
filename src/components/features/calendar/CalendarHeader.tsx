'use client';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentDate: Date;
  goToPreviousYear: () => void;
  goToNextYear: () => void;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  months: string[];
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ 
  currentDate, 
  goToPreviousYear, 
  goToNextYear, 
  goToPreviousMonth, 
  goToNextMonth, 
  months 
}) => {
  return (
    <>
      {/* Header con controles de año */}
      <div className="flex items-center justify-between mb-2 max-w-md mx-auto">
        <button
          onClick={goToPreviousYear}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        
        <div className="text-base font-semibold text-gray-800">
          {currentDate.getFullYear()}
        </div>
        
        <button
          onClick={goToNextYear}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      {/* Header con controles de mes */}
      <div className="flex items-center justify-between mb-3 max-w-md mx-auto">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="text-lg font-bold text-gray-800">
          {months[currentDate.getMonth()]}
        </div>
        
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </>
  );
};

export default CalendarHeader;
