export function About() {
  const skills = ['Arduino', 'ESP32', 'IoT', 'C++', 'Electronics', 'Sensors']

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">About Me</h2>

        {/* Bio Paragraph */}
        <div className="mb-12">
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I'm a mechatronics and electronics student passionate about bringing ideas to life through hardware and embedded systems. My journey spans from learning microcontroller programming to designing IoT applications that solve real-world problems. I believe in hands-on learning and constantly experimenting with new platforms and technologies.
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
