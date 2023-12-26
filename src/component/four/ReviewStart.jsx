const ReviewStart = ({ initScore, handleClickReview }) => {
  return (
    <div className="mb-2 space-x-2">
      {[1, 2, 3, 4, 5].map((start, index) => (
        <span
          key={start}
          className={`bg-red inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-sm border-2 ${
            start <= initScore ? "text-yellow-500" : "text-gray-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            // eslint-disable-next-line react/no-unknown-property
            dataSlot="icon"
            className={`h-10 w-10 ${start <= initScore ? "fill-red-600" : ""} `}
            onClick={() => handleClickReview(start)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </span>
      ))}
    </div>
  );
};

export default ReviewStart;
