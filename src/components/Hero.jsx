import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-soft mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm text-gray-600">专业AI解决方案提供商</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            让AI
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              赋能未来
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            专注于AI设备定制、AI医疗、AI宠物、AI桌面管家等智能解决方案，为您打造专属的智能化体验
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-all shadow-soft hover:shadow-softer"
            >
              探索服务
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all shadow-soft hover:shadow-softer border border-gray-200"
            >
              联系我们
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-gray-200">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-500">成功项目</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">30+</div>
              <div className="text-sm text-gray-500">合作企业</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-500">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
