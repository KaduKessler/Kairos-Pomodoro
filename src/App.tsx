import "@styles/theme.css";
import "@styles/global.css";

import { TimerIcon } from "lucide-react";

import { Heading } from "@components/Heading";

export function App() {
  return (
    <>
      <Heading>
        Heading
        <button title="Timer">
          <TimerIcon />
        </button>
      </Heading>
      <h1>My React App</h1>
      <p>This is a simple React application.</p>
    </>
  );
}
