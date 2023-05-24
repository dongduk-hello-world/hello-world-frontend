import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import Nav from "./nav";
import Content from "./content";

export default () => {
  const [idx, setIdx] = useState(0);

  return (
    <div>
      <Nav idx={idx} setIdx={setIdx} />
      <Content idx={idx} />
    </div>
  );
};
