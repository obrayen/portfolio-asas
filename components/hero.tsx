import Image from 'next/image'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center gap-8 max-w-2xl">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg bg-secondary">
          <Image
            src="/young-electronics-engineer-portrait.jpg"
            alt="Mali's profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-3">
            <text-balance>Mali</text-balance>
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-medium">
            Electronics & IoT Enthusiast
          </p>
        </div>

        {/* Bio */}
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          I love building electronics projects, IoT systems, and learning new technologies.
        </p>

        {/* CTA Button */}
        <button className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity">
          Explore My Work
        </button>
      </div>
    </section>
  )
}
