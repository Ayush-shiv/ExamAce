import  { useState } from 'react';
import "./Navbar.css";
import Login from '../log/Login';
  // Import the LoginModal component
import SignUp from '../log/SignUp';

 
  const links = ["Home", "About", "Features", "Contact", "Faqs"];

  const Navbar = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  
    const handleLoginClick = () => setLoginModalOpen(true);
    const handleCloseLoginModal = () => setLoginModalOpen(false);
  
    const handleSignupClick = () => {
      setLoginModalOpen(false); // Close login modal
      setSignupModalOpen(true); // Open signup modal
    };
  
    const handleCloseSignupModal = () => setSignupModalOpen(false);
  
    return (
      <>
        <nav className="navbar">
          <header className="name">
            <h1>Exam<span className="name-sub">Ace</span></h1>
          </header>
          <ul className="navlinks">
            {links.map((link, index) => (
              <li key={index}>
                <a href={`#${link.replace(/\s+/g, "")}`}>{link}</a>
              </li>
            ))}
          </ul>
          <div className="contact">
            <img
              className="login"
              title="LogIn"
              src="examAcelog.png"
              alt="Login"
              onClick={handleLoginClick}
            />
          </div>
        </nav>
        {isLoginModalOpen && (
          <Login
            isOpen={isLoginModalOpen} 
            onClose={handleCloseLoginModal} 
            onSignupClick={handleSignupClick} // Pass the signup handler
          />
        )}
        {isSignupModalOpen && (
          <SignUp onClose={handleCloseSignupModal} />
        )}
      </>
    );
  };
  
  export default Navbar;