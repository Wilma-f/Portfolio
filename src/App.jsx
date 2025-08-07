
import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-grey-900`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
const handleSubmit = (e) => {
  e.preventDefault();

  // Simple validation
  const form = e.target;
  const name = form.user_name.value.trim();
  const email = form.user_email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Proceed to send email if valid
  emailjs
    .sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form,
      'YOUR_PUBLIC_KEY'
    )
    .then(
      (result) => {
        alert('Message sent!');
        form.reset();
      },
      (error) => {
        alert('Failed to send message. Try again later.');
        console.error(error);
      }
    );
};

export default App;