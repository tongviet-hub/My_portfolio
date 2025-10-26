export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Trang web bán hàng trực tuyến với giỏ hàng, thanh toán và quản lý sản phẩm",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      image: "🛒",
    },
    {
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với tính năng tạo, chỉnh sửa, xóa và phân loại task",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      link: "#",
      image: "✓",
    },
    {
      title: "Weather App",
      description: "Ứng dụng thời tiết hiển thị dự báo thời tiết theo vị trí người dùng",
      technologies: ["React", "API Weather", "Geolocation"],
      link: "#",
      image: "🌤️",
    },
    {
      title: "Blog Platform",
      description: "Nền tảng viết blog với tính năng tạo bài viết, bình luận và tìm kiếm",
      technologies: ["Next.js", "Supabase", "Markdown"],
      link: "#",
      image: "📝",
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard quản lý các tài khoản mạng xã hội từ một giao diện duy nhất",
      technologies: ["React", "Chart.js", "API Integration"],
      link: "#",
      image: "📊",
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio cá nhân để giới thiệu kỹ năng và dự án",
      technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
      link: "#",
      image: "🎨",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dự án
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card/40 backdrop-blur-md border border-border/30 rounded-xl overflow-hidden group hover:bg-card/60 hover:border-border/50 transition-all duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/20 text-primary text-xs rounded font-medium border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary font-semibold hover:text-accent transition-colors text-sm"
                >
                  Xem chi tiết →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
