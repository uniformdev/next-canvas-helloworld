import { UniformTracker } from "@uniformdev/optimize-tracker-react";
import { createDefaultTracker } from "@uniformdev/optimize-tracker-browser";
import intentManifest from "../lib/intentManifest.json";

import "../styles/globals.css";

const localTracker = createDefaultTracker({
  intentManifest,
});

function MyApp({ Component, pageProps, scoring }) {
  return (
    <UniformTracker
      trackerInstance={localTracker}
      initialIntentScores={scoring}
    >
      <Component {...pageProps} />
    </UniformTracker>
  );
}

export default MyApp;
