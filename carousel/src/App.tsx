import Carousel, { CarouselItem } from "./components/carousel";

function App() {
  return (
    <Carousel>
      <CarouselItem>First Item</CarouselItem>
      <CarouselItem>Second Item</CarouselItem>
      <CarouselItem>Third Item</CarouselItem>
      <CarouselItem>.....</CarouselItem>
    </Carousel>
  );
}

export default App;
