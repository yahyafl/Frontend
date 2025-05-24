"use client"

export default function FoodServicesList({ services, onEdit, onDelete, onAdd }) {
  if (services.length === 0) {
    return (
      <div className="p-12 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🍽️</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No food services yet</h3>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Get started by adding your first food service. Create detailed listings with pricing, categories, and dietary
          options.
        </p>
        <button
          onClick={onAdd}
          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
        >
          Add Your First Service
        </button>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Food Services</h2>
          <p className="text-gray-600">
            Manage your {services.length} food service{services.length !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={onAdd}
          className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add Service</span>
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="card p-6 group hover:scale-[1.02] transition-all duration-200 hover:shadow-lg"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-200">
                  {service.name}
                </h3>
                <span className="badge badge-orange">{service.category}</span>
              </div>
              <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={() => onEdit(service)}
                  className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => onDelete(service.id)}
                  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">💰</span>
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-semibold text-gray-900">${service.price}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">⏱️</span>
                  <div>
                    <p className="text-xs text-gray-500">Prep Time</p>
                    <p className="font-semibold text-gray-900">{service.preparationTime}m</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Serving Size */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Serves</span>
              <span className="font-medium text-gray-900">{service.servingSize} people</span>
            </div>

            {/* Dietary Badges */}
            <div className="flex flex-wrap gap-2">
              {service.isVegetarian && <span className="badge badge-green">🌱 Vegetarian</span>}
              {service.isVegan && <span className="badge badge-green">🌿 Vegan</span>}
              {service.isGlutenFree && <span className="badge badge-blue">🌾 Gluten Free</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
