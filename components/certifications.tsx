export default function Certifications() {
  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Chứng chỉ hoàn thành khóa học Responsive Web Design",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Chứng chỉ hoàn thành khóa học JavaScript và cấu trúc dữ liệu",
    },
    {
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "2024",
      description: "Chứng chỉ hoàn thành khóa học thư viện phát triển Front End",
    },
    {
      title: "React Basics",
      issuer: "Udemy",
      date: "2024",
      description: "Chứng chỉ hoàn thành khóa học React cơ bản",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Chứng chỉ</h2>
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-primary">{cert.title}</h3>
                <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded">{cert.date}</span>
              </div>
              <p className="text-muted-foreground font-medium mb-2">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
