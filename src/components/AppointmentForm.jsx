import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ServiceRequest = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [modelName, setModelName] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [location, setLocation] = useState("Tinkune");
  const [timeSlot, setTimeSlot] = useState("");
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    if (serviceDate) {
      fetchAvailableSlots(serviceDate);
    }
  }, [serviceDate]);

  const fetchAvailableSlots = async (date) => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/v1/service/slots?date=${date}`);
      setAvailableSlots(data.slots);
    } catch (error) {
      toast.error("Failed to fetch time slots");
    }
  };

  const handleServiceRequest = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/service/request",
        {
          fullName,
          mobileNumber,
          email,
          profession,
          modelName,
          serviceDate,
          location,
          timeSlot,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFullName(""),
        setMobileNumber(""),
        setEmail(""),
        setProfession(""),
        setModelName(""),
        setServiceDate(""),
        setTimeSlot("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="container form-component service-form">
      <h2>SERVICE REQUEST</h2>
      <form onSubmit={handleServiceRequest}>
        <div>
          <input
            type="text"
            placeholder="Full Name *"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mobile Number *"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          >
            <option value="">Select Profession *</option>
            <option value="Student">Student</option>
            <option value="Engineer">Engineer</option>
            <option value="Doctor">Doctor</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div>
          <select
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
          >
            <option value="">Select Model Name *</option>
            <option value="FZ-X">FZ-X</option>
            <option value="MT-15">MT-15</option>
            <option value="R15">R15</option>
            <option value="Fascino">Fascino</option>
          </select>
          <input
            type="date"
            value={serviceDate}
            onChange={(e) => setServiceDate(e.target.value)}
          />
        </div>
        <div>
          <select disabled>
            <option value="Tinkune">Tinkune</option>
          </select>
          <select
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
          >
            <option value="">Select Preferred Time Slot *</option>
            {availableSlots.map((slot, index) => (
              <option key={index} value={slot.time}>{slot.time}</option>
            ))}
          </select>
        </div>
        <div className="button-group">
          <button type="reset" onClick={() => window.location.reload()}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="available-slots">
        <h3>View available time slots in all service centers</h3>
        <input
          type="date"
          value={serviceDate}
          onChange={(e) => setServiceDate(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>Service Center</th>
              <th>Time Slots</th>
              <th>No of days</th>
            </tr>
          </thead>
          <tbody>
            {availableSlots.map((slot, index) => (
              <tr key={index}>
                <td>{slot.center}</td>
                <td>{slot.time}</td>
                <td>{slot.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceRequest;