import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { Hero } from "../components/Hero/Hero";

const Team = () => {
  useEffect(() => {
    document.title = "Team | Amal Initiative";
  }, []);
  return (
    <>
      <Helmet>
        <title>Team | Amal Initiative</title>
        <meta name="description" content="Learn more about us" />
      </Helmet>
      <Hero type="general"></Hero>
    </>
  );
};

export default Team;
