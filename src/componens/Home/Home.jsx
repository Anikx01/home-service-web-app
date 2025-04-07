import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import { NavLink } from "react-router-dom";
import FeedBack from "../FeedBack/FeedBack";
const Home = () => {
  const services = useLoaderData();
  //   console.log(services);
  const { servicesData, feedBackData } = services;
  return (
    <div className="w-[80%] mt-6   mx-auto max-w-[1200px]">
      <Banner></Banner>
      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-6 ">
        {servicesData.slice(0, 4).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <button className="mx-auto block btn btn-primary mt-4">
        <NavLink to="allservices">View More</NavLink>
      </button>
      <FeedBack feedBackData={feedBackData}></FeedBack>
    </div>
  );
};

export default Home;
