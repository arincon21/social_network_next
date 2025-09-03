import { Cloud, CloudRain, Sun, Wind, MoreHorizontal } from 'lucide-react';

const RenderWeatherIcon = () => {
  const weeklyForecast = [
    { day: 'DOM', icon: Sun, temp: '60°', isToday: true },
    { day: 'LUN', icon: Cloud, temp: '58°' },
    { day: 'MAR', icon: CloudRain, temp: '67°' },
    { day: 'MIÉ', icon: CloudRain, temp: '70°' },
    { day: 'JUE', icon: CloudRain, temp: '58°' },
    { day: 'VIE', icon: CloudRain, temp: '68°' },
    { day: 'SÁB', icon: Wind, temp: '65°' },
  ];

  return (
    <div>
      <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-6 text-white relative rounded-sm" style={{ backgroundImage: `url('/assets/bg/bg-wethear.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-8 left-8 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Header with menu dots */}
        <div className="flex justify-end mb-4 relative z-10">
          <MoreHorizontal className="w-6 h-6" />
        </div>

        {/* Main temperature display */}
        <div className="relative z-10 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-baseline">
                <span className="text-7xl font-thin">64</span>
                <span className="text-2xl ml-1">°</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-lg opacity-90">58°</span>
                <span className="text-lg opacity-90">76°</span>
              </div>
            </div>
            
            {/* Weather icon */}
            <div className="relative">
              <Cloud className="w-16 h-16" fill="white" stroke="none" />
              <Sun className="w-8 h-8 absolute -top-2 -right-2" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current conditions */}
        <div className="relative z-10 mb-8">
          <h2 className="text-2xl font-light mb-3">Parcialmente Soleado</h2>
          <div className="flex justify-between text-sm opacity-90">
            <span>Sensación térmica: 67°</span>
            <span>Probabilidad de lluvia: 49%</span>
          </div>
        </div>

        {/* Weekly forecast */}
        <div className="relative z-10 mb-6">
          <div className="grid grid-cols-7 gap-2">
            {weeklyForecast.map((day, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-xs font-medium mb-3 opacity-90">{day.day}</span>
                  <div className="mb-3">
                    {day.isToday ? (
                      <Sun className="w-6 h-6" />
                    ) : day.icon === Cloud ? (
                      <Cloud className="w-6 h-6" fill="white" stroke="none" />
                    ) : day.icon === CloudRain ? (
                      <div className="relative">
                        <Cloud className="w-6 h-6" fill="white" stroke="none" />
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                          <div className="flex gap-0.5">
                            <div className="w-0.5 h-2 bg-white rounded-full"></div>
                            <div className="w-0.5 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Wind className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-sm font-medium">{day.temp}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Date and location */}
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-light mb-1">Sábado, 26 de marzo</h3>
          <p className="text-sm opacity-75">San Francisco, CA</p>
        </div>
      </div>
    </div>
  );
};

export default RenderWeatherIcon;