"use client";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center flex-1">
      <div className="py-8 sm:py-10 md:py-14">
        <div className="flex flex-col gap-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl">500</h1>
          <p className="text-lg">Oh no! Something went wrong.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
