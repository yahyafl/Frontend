"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FoodServicesList from "@/src/components/FoodServicesList"
import FoodServiceForm from "@/src/components/FoodServiceForm"
import ChatBot from "@/src/components/ChatBot"
import { Plus, MessageCircle } from "lucide-react"

export default function Dashboard() {
  const [services, setServices] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Load user data
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Load existing services
    const savedServices = localStorage.getItem("foodServices")
    if (savedServices) {
      setServices(JSON.parse(savedServices))
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
  }

  const handleEditService = (serviceData) => {
    const updatedServices = services.map((service) =>
      service.id === editingService.id ? { ...service, ...serviceData, updatedAt: new Date().toISOString() } : service,
    )
    setServices(updatedServices)
    localStorage.setItem("foodServices", JSON.stringify(updatedServices))
    setEditingService(null)
    setShowForm(false)
  }

  const handleDeleteService = (id) => {
    const updatedServices = services.filter((service) => service.id !== id)
    setServices(updatedServices)
    localStorage.setItem("foodServices", JSON.stringify(updatedServices))
  }

  const startEdit = (service) => {
    setEditingService(service)
    setShowForm(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.name || user?.email}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setShowChat(!showChat)} variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                AI Assistant
              </Button>
              <Button
                onClick={() => {
                  setEditingService(null)
                  setShowForm(true)
                }}
                className="bg-orange-600 hover:bg-orange-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Service
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            {showForm ? (
              <Card>
                <CardHeader>
                  <CardTitle>{editingService ? "Edit Food Service" : "Add New Food Service"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <FoodServiceForm
                    service={editingService}
                    onSubmit={editingService ? handleEditService : handleAddService}
                    onCancel={() => {
                      setShowForm(false)
                      setEditingService(null)
                    }}
                  />
                </CardContent>
              </Card>
            ) : (
              <FoodServicesList services={services} onEdit={startEdit} onDelete={handleDeleteService} />
            )}
          </div>

          {showChat && (
            <div className="lg:col-span-1">
              <ChatBot />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
