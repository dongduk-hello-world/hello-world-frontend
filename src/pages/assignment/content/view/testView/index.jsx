import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

import Nav from "./nav";
import Content from "./content";

import { TestIdxContext } from "../../../contexts";

export default () => {
  const { tests } = useLoaderData();
  const [ idx ] = useContext(TestIdxContext);

  return (
    <div>
      <Nav tests={tests}/>
      <Content test={tests[idx]} />
    </div>
  );
};
