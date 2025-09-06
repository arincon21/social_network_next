'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, Monitor, MapPin, MoreHorizontal, MessageSquare, Image as ImageIcon, FileText } from 'lucide-react';

export default function SocialPostComponent() {
  const [activeTab, setActiveTab] = useState('status');
  const [postContent, setPostContent] = useState('');

  const tabs = [
    { id: 'status', label: 'Estado', icon: MessageSquare, color: 'text-orange-500' },
    { id: 'multimedia', label: 'Multimedia', icon: ImageIcon, color: 'text-gray-400' },
    { id: 'blog', label: 'Entrada de blog', icon: FileText, color: 'text-gray-400' }
  ];

  const handleSubmit = () => {
    // Lógica para enviar el post
    console.log('Publicando:', postContent);
  };

  const handlePreview = () => {
    // Lógica para previsualizar
    console.log('Previsualizando:', postContent);
  };

  return (
    <div className="max-w-[618px] mx-auto bg-white border border-gray-200 p-6 rounded-sm overflow-hidden">
      {/* Tabs */}
      <div className="-mx-6 -mt-6 mb-6">
        <div className="flex items-center bg-gray-100">
          {tabs.map((tab) => (
            <span
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 mr-6 h-[70px] p-6 transition-colors cursor-pointer focus:outline-none ${
                activeTab === tab.id
                  ? 'bg-white text-orange-500' // pestaña activa: fondo blanco para sobresalir
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span className="font-medium text-sm">{tab.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* User Info & Text Area */}
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
          <Image src="https://placehold.co/48x48" alt="avatar" width={48} height={48} className="object-cover" unoptimized />
        </div>
        <div className="flex-1">
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Comparte lo que estás pensando aquí..."
            className="w-full h-32 p-0 border-none resize-none text-gray-600 placeholder-gray-400 focus:outline-none text-lg"
            rows={4}
          />
        </div>
      </div>

      {/* Bottom Actions */}
  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-6">
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors group"
            type="button"
            aria-label="Subir imagen"
          >
            <Camera className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors group"
            type="button"
            aria-label="Subir video"
          >
            <Monitor className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors group"
            type="button"
            aria-label="Añadir ubicación"
          >
            <MapPin className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors group"
            type="button"
            aria-label="Más opciones"
          >
            <MoreHorizontal className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={handlePreview}
            className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            type="button"
          >
            Previsualizar
          </button>
          <button 
            onClick={handleSubmit}
            className="px-6 py-2.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
            disabled={!postContent.trim()}
          >
            Publicar Estado
          </button>
        </div>
      </div>
    </div>
  );
}