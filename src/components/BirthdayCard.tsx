import { MoreHorizontal, Cake } from "lucide-react";

export default function BirthdayCard({ 
  name = "Marina Valentine", 
  profileImage = "/api/placeholder/60/60" 
}) {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white rounded-sm">
      {/* Encabezado con ícono de corona y menú */}
      <div className="flex justify-between items-start mb-8">
        <Cake className="w-8 h-8 text-white" />
        <MoreHorizontal className="w-6 h-6 text-white opacity-80" />
      </div>

      {/* Foto de perfil */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full border-3 border-white/30 overflow-hidden">
          <img 
            src={profileImage} 
            alt={`foto de perfil de ${name}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div>
        <p className="text-white/90 font-medium text-2xl">
          Hoy es
        </p>
        
        <h1 className="font-bold leading-tight">
          ¡El cumpleaños de {name}!
        </h1>
        
        <p className="text-white/90 leading-relaxed pt-4">
          ¡Déjale un mensaje con tus mejores deseos en su página de perfil!
        </p>
      </div>
    </div>
  );
}