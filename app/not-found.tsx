const NotFoundPage = async () => {
  return (
    <div className="flex flex-col justify-center flex-1">
      <div className="py-8 sm:py-10 md:py-14">
        <div className="flex flex-col gap-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl">404</h1>
          <p className="font-sans text-lg text-neutral-600 dark:text-neutral-400">
            Oh no! I couldn’t find that page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
