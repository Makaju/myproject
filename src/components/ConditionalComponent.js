import { useState } from "react";
export default function ConditionalComponent() {
  const [display, setDisplay] = useState(false);
  if (display) {
    return <div>Display true</div>;
  } else {
    return <div>Display False</div>;
  }
}
