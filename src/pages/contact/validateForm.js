const validateForm = () => {
  const newErrors = {}

  if (!formData.name.trim()) {
    newErrors.name = "Name is required"
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required"
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    newErrors.email = "Please enter a valid email"
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required"
  } else if (!/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone number must be 10 digits"
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required"
  } else if (formData.message.length < 20) {
    newErrors.message =
      "Message should be at least 20 characters"
  }

  setErrors(newErrors)

  return Object.keys(newErrors).length === 0
}