import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🍽️ Food Services Manager</h1>
          <p className="text-xl text-gray-600 mb-8">Manage your food services with AI-powered assistance</p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/login"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">🍽️ Manage Services</h3>
            <p className="text-gray-600">Create, read, update, and delete food services</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">🤖 AI Assistant</h3>
            <p className="text-gray-600">Get help with menu planning and service optimization</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange-600 mb-2">📊 Analytics</h3>
            <p className="text-gray-600">Track performance and customer feedback</p>
          </div>
        </div>
      </div>
    </div>
  )
}
