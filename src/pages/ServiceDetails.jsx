import { Link, useParams } from 'react-router-dom'

const serviceDetails = {
  device: {
    id: 'device',
    title: 'AI设备定制',
    subtitle: '专业AI硬件解决方案',
    description: '根据您的需求定制专属AI硬件设备，从嵌入式系统到边缘计算，提供完整的硬件解决方案',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    features: [
      {
        title: '嵌入式AI系统',
        description: '基于ARM、FPGA等平台的嵌入式AI解决方案，支持TensorFlow Lite、ONNX等主流框架',
        items: ['低功耗设计', '边缘计算优化', '实时推理', '离线运行']
      },
      {
        title: '边缘计算设备',
        description: '高性能边缘计算设备，满足复杂AI场景的算力需求',
        items: ['GPU加速', '高并发处理', '散热优化', '模块化设计']
      },
      {
        title: '物联网解决方案',
        description: 'AIoT一站式解决方案，实现设备智能化升级',
        items: ['传感器集成', '云边协同', '数据采集', '远程控制']
      },
      {
        title: '定制化硬件',
        description: '根据特定场景需求，提供完全定制化的硬件解决方案',
        items: ['PCB设计', '外壳定制', '接口开发', '认证服务']
      }
    ],
    applications: [
      { name: '智能监控', desc: 'AI视觉识别，实时异常检测' },
      { name: '工业检测', desc: '产品质量自动检测，提升生产效率' },
      { name: '智慧零售', desc: '客流分析，智能推荐' },
      { name: '自动驾驶', desc: '车载AI系统，环境感知' }
    ],
    process: [
      { step: '01', title: '需求分析', desc: '深入了解业务场景和技术需求' },
      { step: '02', title: '方案设计', desc: '制定最优的硬件和软件架构' },
      { step: '03', title: '原型开发', desc: '快速迭代，验证可行性' },
      { step: '04', title: '测试优化', desc: '全面测试，性能调优' },
      { step: '05', title: '批量生产', desc: '供应链管理，品质把控' },
      { step: '06', title: '售后支持', desc: '持续维护，快速响应' }
    ]
  },
  medical: {
    id: 'medical',
    title: 'AI医疗',
    subtitle: '智能医疗解决方案',
    description: '运用深度学习和计算机视觉技术，为医疗行业提供智能诊断、影像分析和健康管理方案',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    features: [
      {
        title: '医学影像分析',
        description: '基于深度学习的医学影像智能分析系统',
        items: ['CT影像诊断', 'MRI病灶识别', 'X光片分析', '超声图像处理']
      },
      {
        title: '智能诊断辅助',
        description: '辅助医生进行疾病诊断，提高诊断准确率',
        items: ['症状分析', '病史评估', '诊断建议', '风险预警']
      },
      {
        title: '健康监测系统',
        description: '实时监测生命体征，及时发现健康异常',
        items: ['心电监测', '血压追踪', '血糖管理', '睡眠分析']
      },
      {
        title: '疾病预测模型',
        description: '基于大数据的疾病风险预测和预防',
        items: ['慢病预测', '健康评估', '生活方式建议', '干预方案']
      }
    ],
    applications: [
      { name: '放射科', desc: '辅助影像诊断，提高工作效率' },
      { name: '体检中心', desc: '智能体检报告，健康趋势分析' },
      { name: '慢性病管理', desc: '长期追踪，个性化干预' },
      { name: '远程医疗', desc: 'AI初诊，分诊建议' }
    ],
    process: [
      { step: '01', title: '数据收集', desc: '医疗数据采集和预处理' },
      { step: '02', title: '模型训练', desc: '深度学习模型开发和优化' },
      { step: '03', title: '临床验证', desc: '与医院合作进行临床测试' },
      { step: '04', title: '认证审批', desc: '医疗器械认证和合规' },
      { step: '05', title: '系统集成', desc: '与现有医疗系统对接' },
      { step: '06', title: '持续优化', desc: '基于反馈不断改进' }
    ]
  },
  pet: {
    id: 'pet',
    title: 'AI宠物',
    subtitle: '智能宠物解决方案',
    description: '智能宠物识别、健康监测和行为分析，让科技关爱每一只宠物，提供全方位的智能养宠体验',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    features: [
      {
        title: '宠物品种识别',
        description: '基于AI图像识别技术，精准识别宠物品种',
        items: ['狗狗品种', '猫咪品种', '混合品种', '年龄估算']
      },
      {
        title: '健康状态监测',
        description: '通过摄像头监测宠物健康状态',
        items: ['精神状态', '体态评估', '异常行为', '健康报告']
      },
      {
        title: '行为分析',
        description: '深度分析宠物行为，了解宠物习性',
        items: ['活动轨迹', '作息规律', '社交行为', '情绪识别']
      },
      {
        title: '智能喂养建议',
        description: '根据宠物情况提供科学的喂养建议',
        items: ['饮食推荐', '运动建议', '美容提醒', '疫苗提醒']
      }
    ],
    applications: [
      { name: '宠物主人', desc: '科学养宠，健康追踪' },
      { name: '宠物医院', desc: '辅助诊断，健康档案' },
      { name: '宠物店', desc: '智能服务，提升体验' },
      { name: '宠物社区', desc: '分享交流，养宠知识' }
    ],
    process: [
      { step: '01', title: '需求调研', desc: '了解宠物和主人需求' },
      { step: '02', title: '算法开发', desc: '宠物识别和检测算法' },
      { step: '03', title: 'App开发', desc: '用户界面和功能实现' },
      { step: '04', title: '测试验证', desc: '多场景准确性测试' },
      { step: '05', title: '产品发布', desc: '上线运营，用户反馈' },
      { step: '06', title: '持续升级', desc: '功能迭代，体验优化' }
    ]
  },
  assistant: {
    id: 'assistant',
    title: 'AI桌面管家',
    subtitle: '智能桌面助手',
    description: '智能桌面助手，集成语音交互、任务管理、信息查询等功能，提升您的工作效率',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      {
        title: '智能语音交互',
        description: '自然语言处理，实现流畅的人机对话',
        items: ['语音识别', '语音合成', '意图理解', '多轮对话']
      },
      {
        title: '日程任务管理',
        description: '智能管理日程，提醒重要事项',
        items: ['日历同步', '任务清单', '智能提醒', '时间规划']
      },
      {
        title: '信息快速查询',
        description: '快速查询各类信息，提升工作效率',
        items: ['天气查询', '新闻资讯', '股票行情', '知识问答']
      },
      {
        title: '个性化推荐',
        description: '基于使用习惯提供个性化服务',
        items: ['使用习惯分析', '智能推荐', '场景识别', '自动学习']
      }
    ],
    applications: [
      { name: '办公室', desc: '提高办公效率，自动处理事务' },
      { name: '家庭', desc: '智能家居控制，生活助手' },
      { name: '教育', desc: '学习辅导，知识问答' },
      { name: '个人助理', desc: '私人定制，贴心服务' }
    ],
    process: [
      { step: '01', title: '需求分析', desc: '明确使用场景和功能需求' },
      { step: '02', title: '架构设计', desc: '系统架构和技术选型' },
      { step: '03', title: '功能开发', desc: '核心功能模块开发' },
      { step: '04', title: 'UI设计', desc: '界面设计，交互优化' },
      { step: '05', title: '测试调优', desc: '功能测试，性能优化' },
      { step: '06', title: '发布维护', desc: '正式发布，持续维护' }
    ]
  }
}

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const service = serviceDetails[serviceId]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">服务不存在</h2>
          <Link to="/services" className="text-primary-600 hover:text-primary-700">
            返回服务列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white pt-32 pb-20">
        <div className="container-section">
          <Link
            to="/services"
            className="inline-flex items-center px-5 py-2.5 bg-white text-primary-600 font-medium rounded-full hover:bg-gray-50 transition-all shadow-soft border border-primary-200 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回服务列表
          </Link>
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-50 rounded-3xl flex items-center justify-center text-primary-600 mr-6">
              {service.icon}
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-2">
                服务详情
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">{service.title}</h1>
            </div>
          </div>
          <p className="text-xl text-gray-600">{service.subtitle}</p>
        </div>
      </div>

      {/* Description */}
      <div className="container-section py-12">
        <div className="bg-white rounded-3xl p-8 shadow-soft">
          <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Features */}
      <div className="container-section py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">核心功能</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {service.features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div className="container-section py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">应用场景</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.applications.map((app, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{app.name}</h3>
              <p className="text-sm text-gray-600">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="container-section py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">服务流程</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {service.process.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-soft text-center h-full">
                <div className="text-3xl font-bold text-primary-600 mb-3">{step.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
              {index < service.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container-section py-12">
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">需要了解更多？</h2>
          <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
            我们的专业团队随时准备为您提供详细的咨询服务
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-primary-600 font-medium rounded-full hover:bg-gray-50 transition-all shadow-soft"
            >
              立即咨询
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-transparent text-white font-medium rounded-full hover:bg-white/10 transition-all border-2 border-white"
            >
              查看其他服务
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
