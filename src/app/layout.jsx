import "./globals.css"

export const metadata = {
  title: "Food Services CRUD",
  description: "Manage food services with AI chatbot",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">{children}</body>
    </html>
  )
}
