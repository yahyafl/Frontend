// Food Service utilities
export const foodCategories = [
  "Catering",
  "Delivery",
  "Dine-in",
  "Takeout",
  "Food Truck",
  "Buffet",
  "Fine Dining",
  "Fast Food",
  "Bakery",
  "Coffee Shop",
]

export const validateFoodService = (service) => {
  const errors = {}

  if (!service.name || service.name.trim().length < 2) {
    errors.name = "Service name must be at least 2 characters"
  }

  if (!service.description || service.description.trim().length < 10) {
    errors.description = "Description must be at least 10 characters"
  }

  if (!service.price || service.price <= 0) {
    errors.price = "Price must be greater than 0"
  }

  if (!service.preparationTime || service.preparationTime <= 0) {
    errors.preparationTime = "Preparation time must be greater than 0"
  }

  if (!service.servingSize || service.servingSize <= 0) {
    errors.servingSize = "Serving size must be greater than 0"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

export const calculatePricePerServing = (totalPrice, servingSize) => {
  return totalPrice / servingSize
}
