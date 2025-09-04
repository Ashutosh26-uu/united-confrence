import React from 'react';
import './Venue.css';

const Venue = () => {
  return (
    <section id="venue" className="section venue">
      <h2>Conference Venue</h2>

      <div className="venue-content">
        <div className="venue-info">
          <h3>United University</h3>
          <div className="venue-details">
            <p><strong>Address:</strong> Rawatpur, Jhalwa, Prayagraj, Uttar Pradesh 211012</p>
            <p><strong>Near:</strong> IIIT Allahabad</p>
            <p><strong>Main Hall:</strong> Conference Hall, Pharmacy Building</p>
            <p><strong>Capacity:</strong> 500 Attendees</p>
            <p><strong>Facilities:</strong> Wi-Fi, Parking, Cafeteria, AC, Audio-Visual Equipment</p>
          </div>

          <div className="directions">
            <h4>How to Reach</h4>
            <ul>
              <li><strong>By Car:</strong> NH-2 to Prayagraj, then Rawatpur Road. parking available on campus</li>
              <li><strong>By Bus:</strong> Prayagraj Bus Stand to Jhalwa/IIIT route buses</li>
              <li><strong>By Train:</strong> Prayagraj Junction (12 km) or Naini Junction (20 km)</li>
              <li><strong>By Air:</strong> Prayagraj Airport (Bamrauli) - 7.5 km from campus</li>
            </ul>
          </div>
        </div>

        <div className="venue-map">
          <h3>Location Map</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.234567890123!2d81.7548780!3d25.3946465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398533a4e2e9d1b9%3A0x7d8f6607de9fcdc7!2sUnited%20University%2C%20Prayagraj!5e0!3m2!1sen!2sin!4v1635959592845!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="United University, Prayagraj Location"
            ></iframe>
          </div>
          <p className="map-note">
            <strong>Location:</strong> United University, Rawatpur, Jhalwa, Prayagraj (Near IIIT Allahabad)
          </p>
        </div>
      </div>

      <div className="accommodation">
        <h3>Accommodation facilities</h3>
        <div className="accommodation-content">
          <p className="accommodation-intro">
            <strong></strong> Limited seats are available for accommodation within the campus. The details of the hostels are given below:
          </p>
          <p className="accommodation-note">
            (accommodation facility both for boys and girls separately).
          </p>

          <div className="accommodation-details">
            <ul>
              <li>Non-AC room with double occupancy at boys campus hostel - approximately Rs.700 per person per day.</li>
              <li>Non-AC rooms with double occupancy at girls' hostel - approximately Rs.700 per person per day.</li>
              <li>The booking of the rooms will be based on a first come first serve basis. Registered delegates can send an E-mail request to <strong>confpharm@uniteduniversity.edu.in</strong></li>
              <li>Mention the registration number and other details in the E-mail query.</li>
            </ul>
          </div>

          <div className="accommodation-note-important">
            <p><strong>Note:</strong> Mandatory to register for <strong>FIHTNFPS – 2025</strong> conference to book the campus hostel accommodation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;