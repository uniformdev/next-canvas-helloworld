import { UniformTracker } from "@uniformdev/optimize-tracker-react";
import { localTracker } from "../lib/tracking/local-tracker";

import "../styles/globals.css";

function MyApp({ Component, pageProps, tracker, scoring }) {
  return (
    <UniformTracker
      trackerInstance={tracker || localTracker}
      initialIntentScores={scoring}
    >
      <Component {...pageProps} />
    </UniformTracker>
  );
}

export default MyApp;
