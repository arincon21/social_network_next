import { MoreHorizontal, Cake } from "lucide-react";
import Image from 'next/image';

export default function BirthdayCard({ 
  name = "Marina Valentine", 
  profileImage = "/api/placeholder/60/60" 
}) {
  return (
    <div className="relative max-w-md mx-auto p-8 text-white rounded-sm overflow-hidden" style={{ backgroundImage: `url('/assets/bg/bg-birthdays.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Image
        src="/assets/bg/bg-birthdays.jpg"
        alt="Fondo de cumpleaños"
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      {/* Encabezado con ícono de corona y menú */}
      <div className="flex justify-between items-start mb-8">
        <Cake className="w-8 h-8 text-white" />
        <MoreHorizontal className="w-6 h-6 text-white opacity-80" />
      </div>

      {/* Foto de perfil */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full border-3 border-white/30 overflow-hidden relative">
          <Image 
            src={profileImage} 
            alt={`foto de perfil de ${name}`}
            layout="fill"
            objectFit="cover"
            unoptimized
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