import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Food Services Manager</h1>
          <p className="text-xl text-gray-600 mb-8">Manage your food services with AI-powered assistance</p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/login">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Login
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="lg" variant="outline">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">🍽️ Manage Services</CardTitle>
              <CardDescription>Create, read, update, and delete food services</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">🤖 AI Assistant</CardTitle>
              <CardDescription>Get help with menu planning and service optimization</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">📊 Analytics</CardTitle>
              <CardDescription>Track performance and customer feedback</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
