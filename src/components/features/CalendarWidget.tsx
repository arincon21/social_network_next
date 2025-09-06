'use client';
import React, { useState } from 'react';
import CalendarHeader from './calendar/CalendarHeader';
import CalendarGrid from './calendar/CalendarGrid';

const CalendarWidget: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const goToPreviousYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
  };
  
  const goToNextYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
  };
  
  return (
    <div className="bg-white border border-gray-100 p-4 w-full rounded-sm">
      <CalendarHeader 
        currentDate={currentDate} 
        goToPreviousYear={goToPreviousYear} 
        goToNextYear={goToNextYear} 
        goToPreviousMonth={goToPreviousMonth} 
        goToNextMonth={goToNextMonth} 
        months={months} 
      />
      
      <CalendarGrid 
        currentDate={currentDate} 
        today={today} 
      />
      
      {/* Información adicional */}
      <div className="mt-3 pt-3 border-t border-gray-100 max-w-md mx-auto">
        <div className="text-center text-sm text-gray-500">
          Hoy es {today.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
