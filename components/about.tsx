export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Tôi là một lập trình viên IT đam mê với dữ liệu và phân tích dữ liệu. Bắt đầu hành trình học lập trình từ ngôn ngữ Python, tôi đã phát triển kỹ năng của mình qua nhiều dự án thực tế liên quan đến xử lý, trực quan hóa và khai thác dữ liệu.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Tôi yêu thích việc khám phá ý nghĩa ẩn sau những con số, học hỏi những công nghệ mới trong lĩnh vực Data Science và Machine Learning, cũng như cộng tác với các nhà phân tích và kỹ sư dữ liệu khác để tạo ra những giải pháp thông minh, giá trị.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ngoài công việc với dữ liệu, tôi thích chia sẻ kiến thức, đọc blog công nghệ và tham gia các cộng đồng lập trình viên để không ngừng mở rộng hiểu biết và kết nối với những người cùng đam mê.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-4">💻</div>
              <p className="text-muted-foreground">Hình ảnh hoặc thông tin thêm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
