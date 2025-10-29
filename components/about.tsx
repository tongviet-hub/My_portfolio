export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="border-2 border-gradient-to-tr from-primary to-accent rounded-lg p-4">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Tôi là một lập trình viên IT đam mê với dữ liệu và phân tích dữ liệu. Bắt đầu hành trình học lập trình từ ngôn ngữ Python, tôi đã phát triển kỹ năng của mình qua nhiều dự án thực tế liên quan đến xử lý, trực quan hóa và khai thác dữ liệu.
            </p>
          </div>
          <div className="border-2 border-gradient-to-tr from-primary to-accent rounded-lg p-4">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Tôi yêu thích việc khám phá ý nghĩa ẩn sau những con số, học hỏi những công nghệ mới trong lĩnh vực Data Science và Machine Learning, cũng như cộng tác với các nhà phân tích và kỹ sư dữ liệu khác để tạo ra những giải pháp thông minh, giá trị.
            </p>
          </div>
          <div className="border-2 border-gradiant-to-tr from-primary to-accent rounded-lg p-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ngoài công việc với dữ liệu, tôi thích chia sẻ kiến thức, đọc blog công nghệ và tham gia các cộng đồng lập trình viên để không ngừng mở rộng hiểu biết và kết nối với những người cùng đam mê.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
