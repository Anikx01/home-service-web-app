import React from "react";

const ServiceCard = ({ service }) => {
  //   console.log(service);
  const { serviceName, description, image, cost } = service;
  return (
    <div className="card bg-purple-400  shadow-sm">
      <figure>
        <img className="w-[80%] pt-3" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {serviceName}
          <div className="badge badge-secondary">${cost}</div>
        </h2>
        <p title={description}>{description}</p>
        <div className="card-actions justify-end">
          <button className="badge badge-outline bg-purple-600 p-4">
            Checkout More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
