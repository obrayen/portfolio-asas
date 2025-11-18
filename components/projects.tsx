import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Smart Fish Feeder',
    description: 'Automated fish feeding system with scheduled feeding intervals and water quality monitoring.',
    tech: ['Arduino', 'IoT', 'Sensors'],
  },
  {
    id: 2,
    title: 'MQTT Dashboard',
    description: 'Real-time monitoring dashboard for IoT devices using MQTT protocol and ESP32 microcontrollers.',
    tech: ['ESP32', 'MQTT', 'IoT'],
  },
  {
    id: 3,
    title: 'Brick Breaker Game Arduino',
    description: 'Interactive brick breaker game implemented on Arduino with LCD display and button controls.',
    tech: ['Arduino', 'C++', 'Hardware'],
  },
  {
    id: 4,
    title: 'Computer Vision with Arduino',
    description: 'Computer vision project using Arduino and camera module for object detection and tracking.',
    tech: ['Arduino', 'Computer Vision', 'Sensors'],
  },
  {
    id: 5,
    title: 'Weather Station',
    description: 'IoT-enabled weather station collecting real-time data on temperature, humidity, and pressure.',
    tech: ['ESP32', 'Sensors', 'IoT'],
  },
  {
    id: 6,
    title: 'Smart Home Controller',
    description: 'Centralized control system for home automation with mobile app integration.',
    tech: ['Arduino', 'IoT', 'C++'],
  },
]

export function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-border p-6 flex flex-col"
            >
              {/* Project Image */}
              <div className="h-40 bg-secondary rounded-xl mb-4 overflow-hidden">
                <Image
                  src={`/.jpg?height=160&width=280&query=${project.title.replace(/\s+/g, '%20')}`}
                  alt={project.title}
                  width={280}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 bg-secondary text-foreground rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* View Details Button */}
              <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
