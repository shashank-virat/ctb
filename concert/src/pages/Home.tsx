import { Link } from 'react-router-dom';
import { FaTicketAlt, FaMusic, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center py-5 bg-primary text-white">
        <div className="container">
          <h1 className="display-3 mb-4">Welcome to Concert Tickets</h1>
          <p className="lead mb-4">Your gateway to incredible live music experiences</p>
          <Link to="/events" className="btn btn-light btn-lg">Explore Events</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <FaTicketAlt className="fs-1 text-primary mb-3" />
                <h3>Easy Booking</h3>
                <p>Book your tickets in just a few clicks with our simple and secure booking system.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <FaMusic className="fs-1 text-primary mb-3" />
                <h3>Diverse Events</h3>
                <p>From rock concerts to classical symphonies, find events that match your taste.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <FaCalendarAlt className="fs-1 text-primary mb-3" />
                <h3>Regular Updates</h3>
                <p>Stay updated with the latest events and exclusive offers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Events</h2>
          <div className="row g-4">
            {/* Add 3 featured event cards here */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="col-md-4">
                <div className="card h-100">
                  <img 
                    src={`https://source.unsplash.com/random/800x600?concert&${item}`} 
                    className="card-img-top" 
                    alt="Concert"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Upcoming Concert {item}</h5>
                    <p className="card-text">Experience the magic of live music with our featured events.</p>
                    <Link to="/events" className="btn btn-primary">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2>Stay Updated</h2>
            <p className="mb-4">Subscribe to our newsletter for the latest events and exclusive offers</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
