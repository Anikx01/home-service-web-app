import React from "react";
import bannerImg from "../../assets/Banner.jpg";
const Banner = () => {
  return (
    <div className="hero bg-purple-400  rounded-lg my-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Fast, Reliable Home Services at Your Fingertips!
          </h1>
          <p className="py-6">
            From plumbing to painting, book trusted professionals anytime,
            anywhere. Affordable rates, instant booking, and real-time
            updates—making your life easier, one service at a time. Your comfort
            is our priority. Try it now and experience hassle-free home
            maintenance like never before!
          </p>
          <button className="btn btn-primary">Booking Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
