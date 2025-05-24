"use client"

import { useState, useEffect } from "react"

export default function FoodServiceForm({ service, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    preparationTime: "",
    servingSize: "",
    ingredients: "",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
  })

  useEffect(() => {
    if (service) {
      setFormData(service)
    }
  }, [service])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Service Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="e.g., Gourmet Pizza Catering"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          >
            <option value="">Select a category</option>
            <option value="Catering">Catering</option>
            <option value="Delivery">Delivery</option>
            <option value="Dine-in">Dine-in</option>
            <option value="Takeout">Takeout</option>
            <option value="Food Truck">Food Truck</option>
            <option value="Buffet">Buffet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          placeholder="Describe your food service..."
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="0.00"
            required
          />
        </div>

        <div>
          <label htmlFor="preparationTime" className="block text-sm font-medium text-gray-700 mb-2">
            Prep Time (minutes)
          </label>
          <input
            id="preparationTime"
            name="preparationTime"
            type="number"
            value={formData.preparationTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="30"
            required
          />
        </div>

        <div>
          <label htmlFor="servingSize" className="block text-sm font-medium text-gray-700 mb-2">
            Serving Size
          </label>
          <input
            id="servingSize"
            name="servingSize"
            type="number"
            value={formData.servingSize}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            placeholder="4"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-2">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          placeholder="List main ingredients..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Dietary Options</label>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isVegetarian"
              checked={formData.isVegetarian}
              onChange={handleChange}
              className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
            />
            Vegetarian
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isVegan"
              checked={formData.isVegan}
              onChange={handleChange}
              className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
            />
            Vegan
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="isGlutenFree"
              checked={formData.isGlutenFree}
              onChange={handleChange}
              className="mr-2 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
            />
            Gluten Free
          </label>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md font-medium">
          {service ? "Update Service" : "Add Service"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-md font-medium"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
