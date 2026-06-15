import React, { useState } from 'react'
import Title from '../../components/Title'
 import { toast } from 'react-toastify';

 

const Contact = () => {

  const [errors, setErrors] = useState({})

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    console.log(formData)

    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 pt-30">

      <Title
        heading="Contact Us"
        subheading="Have questions about bookings, pricing, or availability? We'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12 mt-16">

        {/* Contact Form */}

        <div className="bg-white border rounded-3xl p-6 shadow-sm">

          <h2 className="text-2xl font-semibold mb-6">
            Send Us a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}

            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-xl p-4"
            />

            <button
              type="submit"
              className="bg-indigo-700 text-white px-8 py-4 rounded-xl hover:bg-indigo-800 transition"
            >
              Send Message
            </button>
          </form>

        </div>

        {/* Contact Info */}

        <div className="space-y-6">

          <div className="bg-gray-50 rounded-3xl p-6">
            <h3 className="font-semibold text-xl mb-3">
              Contact Information
            </h3>

            <div className="space-y-3 text-gray-600">
              <p>📍 Hyderabad / Bengaluru / Chennai, India</p>
              <p>📞 +91 98765 XXXXX</p>
              <p>✉ &nbsp;&nbsp; xxxxx@hotelstay.com</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6">
            <h3 className="font-semibold text-xl mb-3">
              Business Hours
            </h3>

            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday: 9 AM - 8 PM</p>
              <p>Saturday: 10 AM - 6 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6">
            <h3 className="font-semibold text-xl mb-3">
              Why Contact Us?
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>✓ Booking assistance</li>
              <li>✓ Refund requests</li>
              <li>✓ Special room requirements</li>
              <li>✓ Group reservations</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Google Map Section */}

      <section className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Find Us Here
          </h2>

          <p className="text-gray-500 mt-2">
            Visit our office or get directions easily.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-200">
          <iframe
            title="Hotel Stay Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.884309977147!2d78.39164569999998!3d17.44843705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1781418451575!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  )
}

export default Contact