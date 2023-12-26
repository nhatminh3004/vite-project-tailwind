import { useState } from "react";
import ReviewStart from "./ReviewStart";

const ReviewModal = () => {
  const [initScore, setScore] = useState(0);
  const handleClickReview = (start) => {
    if (initScore === start) {
      setScore(0);
    } else {
      setScore(start);
    }
  };
  console.log("Score:" + initScore);
  return (
    <div className=" w-[42rem] space-y-4 rounded bg-[#d7d6d6cf] p-16">
      <h1 className="font-meri text-2xl font-black">Overraw ratting</h1>
      <div>
        <ReviewStart
          initScore={initScore}
          handleClickReview={handleClickReview}
        />
        <p className="text-sm font-normal">Click to rate</p>
      </div>

      <div>
        <label
          className="block font-poppins text-sm font-semibold"
          htmlFor="title"
        >
          Review title
        </label>
        <input
          id="title"
          placeholder="Example: easy to use"
          className="mt-2 w-full rounded-md border-2 p-4 py-3"
        />
      </div>

      <div>
        <label
          className="block font-poppins text-sm font-semibold"
          htmlFor="review"
        >
          Product Review
        </label>
        <textarea
          id="review"
          placeholder="Example: easy to use Example: easy to useExample: easy to useExample: easy to useExample: easy to use"
          className="mt-2 w-full rounded-md border-2 p-4 py-3"
        />
      </div>
      <p>Would you recomend this product to a friend ?</p>
      <div className="flex gap-8">
        <div>
          <input
            className="mr-1 scale-150 accent-[#c16126ee]"
            type="radio"
            id="yes"
            name="product"
            value="yes"
          />
          <label htmlFor="yes">YES</label>
        </div>
        <div>
          <input
            className="mr-1 scale-150 accent-[#c16126ee]"
            type="radio"
            id="no"
            name="product"
            value="no"
          />
          <label htmlFor="no">NO</label>
        </div>
      </div>

      <div className="flex gap-x-2">
        <div className="grow">
          <label
            className="block font-poppins text-sm font-semibold"
            htmlFor="firstName"
          >
            Fist Name
          </label>
          <input
            id="firstName"
            placeholder="First Name"
            className="mt-2 w-full rounded-md border-2 p-4 py-3"
          />
        </div>
        <div className="grow">
          <label
            className="block font-poppins text-sm font-semibold"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            id="lastName"
            placeholder="last Name"
            className="mt-2 w-full rounded-md border-2 p-4 py-3"
          />
        </div>
      </div>
      <div className="">
        <input
          className="mr-2 scale-150 accent-[#c16126ee]"
          type="radio"
          id="accep"
          name="accept"
          value="yes"
        />
        <label htmlFor="accep">Accep condition</label>
      </div>
      <p className="text-sm font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis error ab
        odit ipsum reprehenderit laborum excepturi assumenda ex, placeat
        accusamus molestias sit, est possimus deleniti fugit quia vero expedita
        maiores!
      </p>
      <div className="text-center">
        <button className="rounded-md bg-[#5b5855] p-4 text-white hover:border-2 hover:border-[yellow] hover:bg-[red]">
          Submit product viewer
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
