import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const [isHoursExpanded, setIsHoursExpanded] = useState(false);

  const hours = [
    { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
    { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
    { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
    { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
    { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
    { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
  ];

  const initialVisibleHours = 2; // Number of days to show initially
  const visibleHours = isHoursExpanded ? hours : hours.slice(0, initialVisibleHours);

  return (
    <>
      <footer className="container">
        <hr />
        <div className="content">
          <div>
            <img src="/ri.png" alt="logo" className="logo-img" />
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/appointment">Appointment</Link>
              <Link to="/about">About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {visibleHours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>: <span>{element.time}</span>
                </li>
              ))}
            </ul>
            {hours.length > initialVisibleHours && (
              <button
                onClick={() => setIsHoursExpanded((prev) => !prev)}
                style={{
                  marginTop: "10px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#000000", 
                  fontSize: "14px",
                }}
              >
                {isHoursExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>01-8888888</span>
            </div>
            <div>
              <MdEmail />
              <span>e@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Nepal</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
