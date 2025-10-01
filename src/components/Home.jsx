import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Accordion } from "./Accordion";
import { Table } from "./Table";
import { HoverCard } from "./HoverCard";
import { Popover } from "./Popover";
import { ProgressBar } from "./ProgressBar";
import { TestimonialCard } from "./TestimonialCard";
import { ProfileCard } from "./ProfileCard";
import { ProductReview } from "./ProductReview";
import Imagecarousel from "./ImageCarousel";
import { ImageSlider } from "./ImageSlider";
import { Drawer } from "./Drawer";
import { defaultReviews } from '../assets/data/defaultReviews';

export function Home() {
    return (
        <Router>
            <div style={{ display: "flex", height: "30vh" }}>
                <nav style={{ width: "150px", background: "", color: "#fff", padding: "1rem" }}>

                    <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
                        
                        <Link to="/imagecarousel" style={{ color: "black" }}>Carousel</Link>
                        <Link to="/" style={{ color: "black" }}>Accordion</Link>
                        <Link to="/table" style={{ color: "black" }}>Table</Link>
                        <Link to="/hovercard" style={{ color: "black" }}>Hover Card</Link>
                        <Link to="/popover" style={{ color: "black" }}>Popover</Link>
                        <Link to="/progressbar" style={{ color: "black" }}>Progress Bar</Link>
                        <Link to="/testimonial" style={{ color: "black" }}>Testimonial</Link>
                        <Link to="/profile" style={{ color: "black" }}>Profile Card</Link>
                        <Link to="/productreview" style={{ color: "black" }}>Product Review</Link>
                        <Link to="/imagegallery" style={{ color: "black" }}>Image Gallery</Link>
                        <Link to="/drawer" style={{ color: "black" }}>Drawer</Link>
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
    );
}

