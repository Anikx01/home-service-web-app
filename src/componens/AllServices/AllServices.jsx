import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
const AllServices = () => {
  const services = useLoaderData();
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-6 w-[80%] mt-6 mb-6  mx-auto max-w-[1200px]">
      {services.map((service) => (
        <ServiceCard service={service}></ServiceCard>
      ))}
    </div>
  );
};

export default AllServices;
