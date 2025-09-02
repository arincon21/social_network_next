"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarWidget: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const today = new Date();
  
  // Nombres de los meses
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  // Nombres de los días de la semana
  const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
  
  // Obtener el primer día del mes
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
  // Obtener el día de la semana del primer día (0 = domingo, 1 = lunes, etc.)
  const startDay = firstDayOfMonth.getDay();
  
  // Obtener el número de días del mes
  const daysInMonth = lastDayOfMonth.getDate();
  
  // Navegar al mes anterior
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  // Navegar al mes siguiente
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  // Navegar al año anterior
  const goToPreviousYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
  };
  
  // Navegar al año siguiente
  const goToNextYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
  };
  
  // Verificar si un día es hoy
  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };
  
  // Generar los días del calendario
  const generateCalendarDays = () => {
    const days = [];
    
    // Agregar espacios vacíos para los días antes del primer día del mes
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-8"></div>);
    }
    
    // Agregar los días del mes
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
    <div className="bg-white border border-gray-100 p-4 w-full rounded-sm">
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
      
      {/* Días de la semana */}
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
      
      {/* Grid del calendario */}
      <div className="grid grid-cols-7 gap-1 max-w-md mx-auto">
        {generateCalendarDays()}
      </div>
      
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