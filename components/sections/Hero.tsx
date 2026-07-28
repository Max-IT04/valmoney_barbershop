import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-20 pt-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Правый блок - логотип/фото */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#8B0000] bg-[#1a1a1a] flex items-center justify-center">
            <span className="text-6xl font-bold text-[#8B0000]">V</span>
          </div>
        </div>

{/* Левый блок - текст */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#8B0000]">VALMONEY</span>
            <br />
            БАРБЕРШОП
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            Стиль. Качество. Индивидуальный подход.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://vk.com/your_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#8B0000] text-white rounded-lg font-semibold hover:bg-[#a00000] transition-all text-center"
            >
              Записаться
            </a>
            <a
              href="https://t.me/your_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#8B0000] text-white rounded-lg font-semibold hover:bg-[#8B0000] hover:text-white transition-all text-center"
            >
              Написать
            </a>
          </div>
          <p className="text-sm text-gray-500 pt-4">
            +7 (999) 123-45-67
          </p>
        </div>
      </div>
    </section>
  )
}
