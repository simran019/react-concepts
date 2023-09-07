"use client";

import keyConceptsImage from "../assets/images/key-concepts.png";
import componentsImage from "../assets/images/components.png";
import stateImage from "../assets/images/state.png";
import eventsImage from "../assets/images/events.png";

import Image from "next/image";
import Card from "./card/page";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-start pt-10 gap-8">
      <div className="flex flex-col items-center">
        <Image
          src={keyConceptsImage}
          alt="Medal badge with a star"
          width={100}
          height={100}
        />
        <h1 className="text-3xl mb-2">Key React Concepts</h1>
        <p className="text-slate-300">
          Selected key React concepts you should know about
        </p>
      </div>
      <div className="flex items-center justify-center w-3/4 gap-8">
        {concepts.map((concept) => {
          return (
            <Card
              key={concept.title}
              imagePath={concept.image}
              title={concept.title}
              description={concept.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
