import React from "react";
import Review from "./Review";

const UserReview = () => {
  return (
    <div className="lg:flex items-center justify-between gap-4">
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
    </div>
  );
};

export default UserReview;
