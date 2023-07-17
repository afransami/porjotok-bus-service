import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";

const BusSeatPlan = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Seat is already selected, so remove it from the selection
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Seat is not selected, so add it to the selection
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const getSeatCategory = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      return "selected";
    } else if (seatNumber % 3 === 0) {
      return "booked";
    } else {
      return "available";
    }
  };

  const renderSeats = () => {
    const totalSeats = 36; // Total number of seats in the bus

    const seats = [];
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

    for (let i = 1; i <= totalSeats; i++) {
      const seatCategory = getSeatCategory(i);
      let seatClass = "";

      if (seatCategory === "selected") {
        seatClass = "bg-blue-500 text-white";
      } else if (seatCategory === "booked") {
        seatClass = "bg-red-500 text-white cursor-not-allowed";
      } else {
        seatClass = "bg-gray-200";
      }

      const rowLetter = letters[Math.floor((i - 1) / 4)];
      const seatNumber = i % 4 === 0 ? 4 : i % 4;

      seats.push(
        <button
          key={i}
          className={`seat px-4 py-2 m-2 rounded ${seatClass}`}
          onClick={() => handleSeatClick(i)}
          disabled={seatCategory === "booked"}
        >
          {rowLetter}-{seatNumber}
        </button>
      );
    }

    return seats;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send the selectedSeats array to MongoDB or perform any desired action
    console.log(selectedSeats);
    // Clear the selectedSeats array if needed
    setSelectedSeats([]);
  };

  return (
    <div className="bus-seat-plan flex flex-col items-center justify-center">
      <div className="flex flex-col justify-end items-end relative">
        <h2 className="text-2xl font-bold mb-8">Bus Seat Plan</h2>
        <p className="text-5xl -right-20 text-green-400 absolute">
          <GiSteeringWheel></GiSteeringWheel>
        </p>
      </div>
      <div className="seats">
        <div className="border-4 grid lg:grid-cols-4 grid-cols-4 gap-4 mt-4">
          {renderSeats()}
        </div>
      </div>
      <p className="mt-4">Selected Seats: {selectedSeats.join(", ")}</p>
      <div className="group relative text-center block overflow-hidden border-b-0 px-8 py-2 focus:outline-none focus:ring">
        <form onSubmit={handleFormSubmit}>
          <span className="absolute inset-x-0 bottom-0 h-[2px] bg-green-600 transition-all group-hover:h-full group-active:bg-green-600"></span>
          <button
            type="submit"
            className="relative text-xl font-medium text-green-400 transition-colors group-hover:text-white"
            disabled={selectedSeats.length === 0}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BusSeatPlan;
