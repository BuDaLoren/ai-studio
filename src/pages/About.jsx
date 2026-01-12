import { Link } from 'react-router-dom'

const About = () => {
  const advantages = [
    {
      title: '专业技术团队',
      description: '拥有多年AI开发经验的技术专家团队',
      icon: '👨‍💻'
    },
    {
      title: '定制化方案',
      description: '根据客户需求量身定制最优解决方案',
      icon: '🎯'
    },
    {
      title: '快速交付',
      description: '高效项目管理，确保按时高质量交付',
      icon: '⚡'
    },
    {
      title: '持续支持',
      description: '完善的售后服务，保障系统稳定运行',
      icon: '🛡️'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
              关于我们
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              专业AI解决方案
            </h1>
            <p className="text-xl text-gray-600">
              值得信赖的合作伙伴
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-section py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              我们是一家专注于人工智能技术研发与应用的工作室，致力于为企业和个人提供高质量的AI解决方案。
              从设备定制到软件开发，我们拥有丰富的实战经验和深厚的技术积累。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary-600 mb-1">5年+</div>
                <div className="text-sm text-gray-500">行业经验</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-sm text-gray-500">项目交付率</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
                <div className="text-sm text-gray-500">成功项目</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                <div className="text-sm text-gray-500">客户满意度</div>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-all shadow-soft hover:shadow-softer"
            >
              联系我们
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Content - Advantages Grid */}
          <div className="grid grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-soft hover:shadow-softer transition-all duration-300"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
