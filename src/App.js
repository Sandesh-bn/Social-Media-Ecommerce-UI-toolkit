import './App.css';
import { Accordion } from './components/Accordion';
import { Drawer } from './components/Drawer';
import { HoverCard } from './components/HoverCard';
import { ImageSlider } from './components/ImageSlider';
import { Table } from './components/Table';
import { Popover } from './components/Popover';
import { ProgressBar } from './components/ProgressBar';
import { SideBarDemo } from './components/SidebarDemo';
import { LiquidGlassButton } from './components/LiquidGlassButton';
import { TestimonialCard } from './components/TestimonialCard';
import { ProfileCard } from './components/ProfileCard';
import { ProductReview } from './components/ProductReview';
import Imagecarousel from './components/ImageCarousel';
import { defaultReviews } from './assets/data/defaultReviews';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex", height: "30vh" }}>
          <nav style={{ width: "150px", padding: "1rem" }}>
            <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
              <NavLink to="/imagecarousel" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Carousel
              </NavLink>
              <NavLink to="/" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Accordion
              </NavLink>
              <NavLink to="/table" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Table
              </NavLink>
              <NavLink to="/hovercard" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Hover Card
              </NavLink>
              <NavLink to="/popover" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Popover
              </NavLink>
              <NavLink to="/progressbar" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Progress Bar
              </NavLink>
              <NavLink to="/testimonial" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Testimonial
              </NavLink>
              <NavLink to="/profile" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Profile Card
              </NavLink>
              <NavLink to="/productreview" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Product Review
              </NavLink>
              <NavLink to="/imagegallery" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Image Gallery
              </NavLink>
              <NavLink to="/drawer" 
                style={({ isActive }) => ({ color: isActive ? "rgb(3, 79, 244)" : "black" })}>
                Drawer
              </NavLink>
            </div>
          </nav>

          {/* Main content */}
          <div style={{ flex: 1, maxWidth: '80%' }}>
            <Routes>
              <Route path={"/imagecarousel"} element={<Imagecarousel />} />
              <Route path="/" element={<Accordion />} />
              <Route path="/table" element={<Table />} />
              <Route path="/drawer" element={<Drawer />} />
              <Route path="/hovercard" element={<HoverCard />} />
              <Route path="/popover" element={<Popover />} />
              <Route path="/progressbar" element={<ProgressBar />} />
              <Route path="/testimonial" element={<TestimonialCard />} />
              <Route path="/profile" element={<ProfileCard />} />
              <Route path="/productreview" element={<ProductReview reviews={defaultReviews} />} />
              <Route path="/imagegallery" element={<ImageSlider />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
