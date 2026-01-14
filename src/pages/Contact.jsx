import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  // 服务ID到名称的映射
  const serviceMap = {
    device: 'AI设备定制',
    medical: 'AI医疗',
    pet: 'AI宠物',
    assistant: 'AI桌面管家',
    deployment: 'AI部署',
    other: '其他需求'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus(null)

    try {
      // 检查EmailJS配置
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // 如果是测试配置，显示配置提示
      if (serviceId === 'test_service' || templateId === 'test_template' || publicKey === 'test_key') {
        console.warn('EmailJS is using test configuration. Please setup real EmailJS credentials.')

        // 模拟成功发送，但显示配置提示
        setSubmitStatus('config_needed')

        // 清空表单
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })

        // 5秒后清除状态
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)

        setLoading(false)
        return
      }

      // 检查必要配置是否存在
      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration is missing')
        setSubmitStatus('config_missing')
        setLoading(false)
        return
      }

      // 准备邮件模板参数
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: serviceMap[formData.service] || formData.service,
        message: formData.message,
        to_email: import.meta.env.VITE_RECEIVER_EMAIL || 'rendaloren@outlook.com',
        date: new Date().toLocaleString('zh-CN')
      }

      // 发送邮件
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('Email sent successfully:', result)

      setSubmitStatus('success')
      // 清空表单
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })

      // 5秒后清除成功状态
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

    } catch (error) {
      console.error('Email send failed:', error)
      console.log('Error details:', {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        hasPublicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        errorMessage: error.message,
        errorCode: error.code
      })

      // 根据错误类型显示不同提示
      if (error.message?.includes('Invalid public key') || error.code === 'INVALID_PUBLIC_KEY') {
        setSubmitStatus('invalid_key')
      } else if (error.message?.includes('Service not found') || error.code === 'SERVICE_NOT_FOUND') {
        setSubmitStatus('service_not_found')
      } else if (error.message?.includes('Template not found') || error.code === 'TEMPLATE_NOT_FOUND') {
        setSubmitStatus('template_not_found')
      } else {
        setSubmitStatus('error')
      }

      // 5秒后清除错误状态
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: '邮箱',
      content: 'rendaloren@outlook.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: '电话',
      content: '18232332991'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: '地址',
      content: '北京·房山'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-600 text-sm font-medium rounded-full mb-4">
              联系我们
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              开始您的AI之旅
            </h1>
            <p className="text-lg text-gray-600">
              无论您有任何问题或需求，我们都随时准备为您提供帮助
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-section py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">联系方式</h3>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 shadow-soft flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      {item.title}
                    </div>
                    <div className="text-gray-900 font-medium">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl mb-4">📍</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  欢迎莅临访问
                </h4>
                <p className="text-gray-600">
                  期待与您面对面交流，探讨AI技术的无限可能
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">发送消息</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    电话
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="您的联系电话"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  感兴趣的服务
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">请选择服务类型</option>
                  <option value="device">AI设备定制</option>
                  <option value="medical">AI医疗</option>
                  <option value="pet">AI宠物</option>
                  <option value="assistant">AI桌面管家</option>
                  <option value="deployment">AI部署</option>
                  <option value="other">其他需求</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  留言内容
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="请描述您的需求..."
                />
              </div>

              {/* 状态提示 */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                  ✓ 消息发送成功！我们会尽快与您联系。
                </div>
              )}
              {submitStatus === 'config_needed' && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-700 text-sm">
                  ⚠️ 表单已提交！邮件功能需要配置EmailJS，请参考部署指南完成配置。
                </div>
              )}
              {submitStatus === 'config_missing' && (
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-700 text-sm">
                  ⚠️ EmailJS配置缺失，请在环境变量中添加VITE_EMAILJS_*相关配置。
                </div>
              )}
              {submitStatus === 'invalid_key' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  ✗ EmailJS公钥无效，请检查VITE_EMAILJS_PUBLIC_KEY配置。
                </div>
              )}
              {submitStatus === 'service_not_found' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  ✗ EmailJS服务未找到，请检查VITE_EMAILJS_SERVICE_ID配置。
                </div>
              )}
              {submitStatus === 'template_not_found' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  ✗ EmailJS模板未找到，请检查VITE_EMAILJS_TEMPLATE_ID配置。
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  ✗ 发送失败，请稍后重试或直接通过邮箱联系我们。
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-4 bg-primary-600 text-white font-medium rounded-xl transition-all shadow-soft hover:shadow-softer ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'
                }`}
              >
                {loading ? '发送中...' : '发送消息'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
