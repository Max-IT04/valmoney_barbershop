import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-[#8B0000]">Об</span> авторе
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Кто делает эту красоту
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Фото */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#8B0000] flex-shrink-0">
            <Image
              src="/master.jpg"
              alt="Барбер"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Текст */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Валерий Маркарян</h3>
            <p className="text-[#8B0000] font-medium">Барбер-стилист, стаж 7+ лет</p>
            <p className="text-gray-400 max-w-lg">
              Работаю с мужскими стрижками и бородами. Люблю классику и современные тренды.
              Каждый клиент — уникален, подбираю стиль индивидуально.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-[#222] rounded-full text-sm border border-gray-700 text-white">✂️ Стрижки</span>
              <span className="px-3 py-1 bg-[#222] rounded-full text-sm border border-gray-700 text-white">🧔 Бороды</span>
              <span className="px-3 py-1 bg-[#222] rounded-full text-sm border border-gray-700 text-white">💈 Стиль</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}