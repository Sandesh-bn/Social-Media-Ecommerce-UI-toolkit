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
function App() {
  return (
    <div className="App">
      {/* <Imagecarousel/> */}
      {/* <Accordion/> */}
      {/* <Table/> */}
      {/* <Drawer/> */}
      {/* <HoverCard/> */}
      {/* <Popover/> */}
      {/* <ProgressBar/> */}
      {/* <SideBarDemo/> */}
      {/* <TestimonialCard/> */}
      {/* <ProfileCard/> */}
      <ProductReview reviews={defaultReviews}/>
      {/* <ImageSlider/> */}
    </div>
  );
}

export default App;
