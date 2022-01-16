import React from "react";

type PadSize = "large" | "medium" | "small";

const padSizeToPxLookup: Record<PadSize, string> = {
  large: "24px",
  medium: "12px",
  small: "8px",
};

interface Props {
  size: PadSize;
}

const PaddedContainer: React.FC<Props> = (props) => {
  const padding = padSizeToPxLookup[props.size];

  return <div style={{ padding }}>{props.children}</div>;
};

export { PaddedContainer };
