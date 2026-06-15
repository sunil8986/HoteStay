import React from "react";
import { Link, useParams } from "react-router-dom";
import { roomsDummyData } from "../../assets/assets.js";
import HotelCard from "../../components/HotelCard.jsx";
import { useLocation } from "react-router-dom";


const amenities = [
  "Free WiFi",
  "Swimming Pool",
  "Gym",
  "Spa",
  "Restaurant",
  "Free Parking",
  "Room Service",
  "Air Conditioning",
];

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment: "Amazing stay. Great hospitality and clean rooms.",
  },
  {
    id: 2,
    name: "Priya Verma",
    rating: 4,
    comment: "Excellent location and good food.",
  },
];

const HotelDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const hotelName = location.state?.hotelName;

  const room = roomsDummyData.find((item) => item._id === id);
  console.log("Room details:", room);

  if (!room) {
    return (
      <div className="max-w-7xl mx-auto py-40 px-4">
        <h2 className="text-2xl font-bold">Room not found</h2>

        <Link
          to="/hotels"
          className="text-indigo-600 underline mt-4 inline-block"
        >
          Back to Hotels
        </Link>
      </div>
    );
  }

  const similarRooms = roomsDummyData.filter((item) => item.roomType === room.roomType && item._id !== room._id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-32">
      {/* Back Button */}

      <Link to="/hotels" className="text-gray-600 hover:text-indigo-700">
        ← Back to Hotels
      </Link>

      {/* Hero Section */}

      <div className="grid lg:grid-cols-3 gap-10 mt-8">
        {/* Gallery */}

        <div className="lg:col-span-2">
          <img
            src={room.images[0]}
            alt={room.roomType}
            className="w-full h-500px object-cover rounded-3xl"
          />

          <div className="grid grid-cols-4 gap-3 mt-4">
            {room.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="h-24 w-full object-cover rounded-xl"
              />
            ))}
          </div>

          {/* Hotel Info */}

          <div className="mt-8">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              {hotelName || room.hotel.name[0]} {/* Fallback to first name if hotelName is not in state */}
            </span>

            <h1 className="text-4xl font-bold mt-4">{hotelName}</h1>

            <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
              <span>⭐ 4.8 (324 Reviews)</span>
              <span>📍 Connaught Place, New Delhi</span>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              Enjoy luxury treatment at {room.hotel.name}. This {room.roomType}{" "}
              provides exceptional comfort, premium hospitality, and world-class
              amenities for a memorable stay.
            </p>
          </div>

          {/* Amenities */}

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Amenities</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amenities.map((item) => (
                <div key={item} className="border rounded-xl p-4 bg-gray-50">
                  ✓ {item}
                </div>
              ))}
            </div>
          </section>

          {/* Room Features */}

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Room Features</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>🛏 King Size Bed</div>
              <div>👥 2 Guests</div>
              <div>📐 450 sq.ft</div>
              <div>🚿 Private Bathroom</div>
              <div>📺 Smart TV</div>
              <div>❄ Air Conditioning</div>
            </div>
          </section>

          {/* Policies */}

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Hotel Policies</h2>

            <ul className="space-y-3 text-gray-600">
              <li>✓ Check-in: 2:00 PM</li>
              <li>✓ Check-out: 11:00 AM</li>
              <li>✓ Free cancellation within 24 hours</li>
              <li>✓ No smoking in rooms</li>
              <li>✓ Pets not allowed</li>
            </ul>
          </section>

          {/* Reviews */}

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Guest Reviews</h2>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-2xl p-5">
                  <h4 className="font-semibold">{review.name}</h4>

                  <p className="text-yellow-500 mt-1">
                    {"⭐".repeat(review.rating)}
                  </p>

                  <p className="text-gray-600 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky Booking Card */}

        <div>
          <div className="sticky top-28 border rounded-3xl p-6 shadow-sm">
            <p className="text-gray-500">Price Per Night</p>

            <h2 className="text-4xl font-bold mt-2">${room.pricePerNight}</h2>

            <div className="mt-6 space-y-4">
              <input type="date" className="w-full border rounded-xl p-3" />

              <input type="date" className="w-full border rounded-xl p-3" />

              <select className="w-full border rounded-xl p-3">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>

            <button className="w-full bg-indigo-700 text-white py-4 rounded-xl mt-6 font-semibold">
              Reserve Now
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Free cancellation available
            </p>
          </div>
        </div>
      </div>

      {/* Similar Rooms */}

      {similarRooms.length > 0 && (
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Similar Rooms</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 ">
            {similarRooms.map((item, keyvalue) => (
              <HotelCard key={item._id} roomdetails={item} keyvalue={keyvalue} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HotelDetails;
