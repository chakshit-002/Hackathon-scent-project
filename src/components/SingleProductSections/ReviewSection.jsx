
import UserReview from "./UserReview";

function ReviewsSection({ reviews }) {
  return (
    <section className="py-8 px-2 bg-[#f8f7ec]">
      <h2 className=" font-bold text-center mb-6 text-pink-800 text-2xl   sm:text-5xl lg:text-6xl 2xl:text-7xl">User Reviews</h2>
      <div
        className="flex flex-wrap items-center justify-center gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-pink-300 md:mt-10 lg:mt-15"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="min-w-[320px] max-w-xs flex-shrink-0 scroll-snap-align-start"
          >
            <UserReview {...review} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;
