import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: '首页', path: '/' },
    { name: '服务', path: '/services' },
    { name: '关于', path: '/about' },
    { name: '联系', path: '/contact' },
  ]

  const getActivePath = () => {
    if (location.pathname === '/') return 'home'
    if (location.pathname.startsWith('/services')) return 'services'
    if (location.pathname === '/about') return 'about'
    if (location.pathname === '/contact') return 'contact'
    return ''
  }

  const activeSection = getActivePath()

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft'
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="container-section">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
          >
            AI Studio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative ${
                  activeSection === item.path.replace('/', '') || (activeSection === '' && item.path === '/')
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {item.name}
                {(activeSection === item.path.replace('/', '') || (activeSection === '' && item.path === '/')) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-full hover:bg-primary-700 transition-colors shadow-soft hover:shadow-softer"
            >
              开始合作
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.path.replace('/', '') || (activeSection === '' && item.path === '/')
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 px-6 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-full hover:bg-primary-700 transition-colors text-center"
              >
                开始合作
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
