import React, { useState } from "react";
import Title from "../../components/Title";
import {userBookingsDummyData} from '../../assets/assets.js'

const MyBooking = () => {

  const [bookings, setBookings] = useState(userBookingsDummyData)
  let [totalPrice, setTotalPrice] = useState(0)

  return (
    <div className="w-full max-w-7xl mx-auto py-10 pt-30">

      <Title
        heading='My Bookings'
        subheading='Here is a summary of your hotel bookings, including details of your stay, dates, and payment status. Manage your reservations and view upcoming trips all in one place.'
      />

      {/* Header */}
      <div className="hidden md:grid grid-cols-12 py-4 border-b border-gray-300 pt-20 text-gray-800 font-medium">
        <div className="col-span-6">Hotels</div>
        <div className="col-span-4">Date & Timings</div>
        <div className="col-span-2">Payment</div>
      </div>

      {/* Booking Item */}

      {
        bookings.map((booking, index) => {
          console.log(booking)
          totalPrice = totalPrice + booking.totalPrice;
          return (
            // <BookingItem />
              <div className="grid grid-cols-12 gap-0 py-6 border-b border-gray-300" key={booking._id}>
                {/* Hotel Info */}
                <div className="col-span-6 flex  gap-4">
                  <img src={booking.room.images[0]} alt={booking.room.images[0]} className="w-24 h-24 rounded-full object-cover" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {
                        booking.room.hotel.name[
                          index % booking.room.hotel.name.length
                        ]
                      }
                    </h3>
                    <p className="text-gray-500">{booking.room.hotel.address}</p>
                    <p className="text-gray-500 text-xs">Guests: {booking.guests}</p>
                    <p className="text-xs text-bold mt-2 text-gray-800">
                      Total: ${booking.totalPrice}
                    </p>
                  </div>
                </div>

                {/* Dates */}
                <div className="col-span-4 flex flex-col gap-4">
                  <div>
                    <p className="font-semibold text-gray-700">Check-In:</p>
                    <p className="text-gray-500 mt-1">{new Date(booking.checkInDate).toDateString()}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Check-Out:</p>
                    <p className="text-gray-500 mt-1">{new Date(booking.checkOutDate).toDateString()}</p>
                  </div>
                </div>

                {/* Payment */}
                <div className="col-span-2 flex flex-col items-start justify-center">
                  <div className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${booking.isPaid ? 'bg-green-600' : 'bg-red-600'}`}></span>
                    <span className={`font-medium ${booking.isPaid ? 'text-green-600' : 'text-red-600'}`}>
                      {booking.isPaid ? 'Paid' : 'Unpaid'}
                    </span>
                  </div>
                </div>
              </div>
          )
        })
        
      }

      <div className="col-span-2 flex align-middle items-left py-6 px-30 border-b bg-gray-50 border-gray-300 justify-between">
          <p>Total: &nbsp;</p>
          <p className="font-bold text-lg">${totalPrice.toFixed(2)} </p>
        </div>

    </div>
  );
};

export default MyBooking;
