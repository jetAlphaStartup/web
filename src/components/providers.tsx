"use client";

import { Next13ProgressBar } from "next13-progressbar";
import { type PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <Next13ProgressBar
        height="5px"
        color="#066b3a"
        options={{ showSpinner: false }}
        showOnShallow
      />
    </div>
  );
};

export default Providers;
