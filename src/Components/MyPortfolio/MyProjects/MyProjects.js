// import AdventOfCode from './Advent-of-code/advent-of-code';
// import Goosfraba from './Goosfraba/goosfraba';
// import FoodApp from './Food-map/food-map';
// import BloggingAndCoding from './Blogging-and-coding/blogging-and-coding';
import FoodMap from './FoodMap/FoodMap';
import AdventOfYoga from './AdventOfYoga/AdventOfYoga';
import LilyBloom from './LilyBloom/LilyBloom';

export default function MyProjects() {
  return (
    <div className="projects-container">
      <LilyBloom />
      <FoodMap />
      <AdventOfYoga />
      {/*
      <Goosfraba />
      <BloggingAndCoding /> */}
    </div>
  );
}
