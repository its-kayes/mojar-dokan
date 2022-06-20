import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Food from "../Food/Food";
import Vegetables from "../Vegetables/Vegetables";
import HomeBanner from "./HomeBanner";
import HomeMembership from "./HomeMembership";



const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  if(user) {
    console.log(user);
  }

  return (
    <div>
      
      <HomeBanner> </HomeBanner>

      <HomeMembership> </HomeMembership>

      {/* <Food> </Food> */}
      <Vegetables></Vegetables>
    </div>
  );
};

export default Home;
