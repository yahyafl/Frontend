"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import FoodServicesList from "../components/FoodServicesList"
import FoodServiceForm from "../components/FoodServiceForm"
import ChatBot from "../components/ChatBot"

export default function Dashboard() {
  const [services, setServices] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [activeTab, setActiveTab] = useState("services")

  useEffect(() => {
    // Load existing services
    const savedServices = localStorage.getItem("foodServices")
    if (savedServices) {
      setServices(JSON.parse(savedServices))
    } else {
      // Initialize with sample data
      const sampleServices = [
        {
          id: 1,
          name: "Gourmet Pizza Catering",
          description: "Authentic wood-fired pizzas for your special events",
          price: 25.99,
          category: "Catering",
          preparationTime: 45,
          servingSize: 8,
          ingredients: "Fresh mozzarella, tomato sauce, basil, olive oil",
          isVegetarian: true,
          isVegan: false,
          isGlutenFree: false,
        },
        {
          id: 2,
          name: "Healthy Bowl Delivery",
          description: "Nutritious and delicious bowls delivered fresh",
          price: 12.99,
          category: "Delivery",
          preparationTime: 20,
          servingSize: 1,
          ingredients: "Quinoa, vegetables, protein, dressing",
          isVegetarian: true,
          isVegan: true,
          isGlutenFree: true,
        },
      ]
      setServices(sampleServices)
      localStorage.setItem("foodServices", JSON.stringify(sampleServices))
    }
  }, [])

  const handleAddService = (serviceData) => {
    const newService = {
      id: Date.now(),
      ...serviceData,
      createdAt: new Date().toISOString(),
    }
    const updatedServices = [...services, newService]
    setServices(updatedServices)
    localStorage.setItem("foodServices", JSON.stringify(updatedServices))
    setShowForm(false)
    setActiveTab("services")
  }

  const handleEditService = (serviceData) => {
    const updatedServices = services.map((service) =>
      service.id === editingService.id ? { ...service, ...serviceData, updatedAt: new Date().toISOString() } : service,
    )
    setServices(updatedServices)
    localStorage.setItem("foodServices", JSON.stringify(updatedServices))
    setEditingService(null)
    setShowForm(false)
    setActiveTab("services")
  }

  const handleDeleteService = (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      const updatedServices = services.filter((service) => service.id !== id)
      setServices(updatedServices)
      localStorage.setItem("foodServices", JSON.stringify(updatedServices))
    }
  }

  const startEdit = (service) => {
    setEditingService(service)
    setShowForm(true)
    setActiveTab("form")
  }

  const startAdd = () => {
    setEditingService(null)
    setShowForm(true)
    setActiveTab("form")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("services")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "services"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Food Services ({services.length})
            </button>
            <button
              onClick={() => setActiveTab("form")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "form"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {editingService ? "Edit Service" : "Add Service"}
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "chat"
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              AI Assistant
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {activeTab === "services" && (
            <FoodServicesList services={services} onEdit={startEdit} onDelete={handleDeleteService} onAdd={startAdd} />
          )}

          {activeTab === "form" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {editingService ? "Edit Food Service" : "Add New Food Service"}
              </h2>
              <FoodServiceForm
                service={editingService}
                onSubmit={editingService ? handleEditService : handleAddService}
                onCancel={() => {
                  setShowForm(false)
                  setEditingService(null)
                  setActiveTab("services")
                }}
              />
            </div>
          )}

          {activeTab === "chat" && (
            <div className="p-6">
              <ChatBot />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
