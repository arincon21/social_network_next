import { MoreHorizontal, Cake } from "lucide-react";

export default function BirthdayCard({ 
  name = "Marina Valentine", 
  profileImage = "/api/placeholder/60/60" 
}) {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white">
      {/* Header con icono de corona y menú */}
      <div className="flex justify-between items-start mb-8">
        <Cake className="w-8 h-8 text-white" />
        <MoreHorizontal className="w-6 h-6 text-white opacity-80" />
      </div>

      {/* Foto de perfil */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full border-3 border-white/30 overflow-hidden">
          <img 
            src={profileImage} 
            alt={`${name} profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="space-y-4">
        <p className="text-white/90 text-lg font-medium">
          Today is
        </p>
        
        <h1 className="text-4xl font-bold leading-tight">
          {name}'s Birthday!
        </h1>
        
        <p className="text-white/90 text-lg leading-relaxed pt-4">
          Leave her a message with your best wishes on her profile page!
        </p>
      </div>
    </div>
  );
}