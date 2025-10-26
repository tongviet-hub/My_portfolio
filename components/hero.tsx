export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
          Xin chào, tôi là <span className="block m-8">Tong Viet</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
          Passionate about data, backend and new technologies
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
          >
            Some of my projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-card/40 backdrop-blur-md border border-primary/50 text-primary rounded-lg font-semibold hover:bg-card/80 transition-all duration-300 shadow-lg shadow-primary/10"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
