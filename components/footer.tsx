export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <p className="opacity-90">Một lập trình viên IT đam mê với công nghệ và phát triển phần mềm.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#about" className="hover:underline">
                  Về tôi
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline">
                  Kỹ năng
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  Dự án
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Công nghệ</h3>
            <p className="opacity-90 text-sm">
              Xây dựng bằng Next.js, React, Tailwind CSS và được triển khai trên Vercel.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
          <p>&copy; {currentYear} Portfolio. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
