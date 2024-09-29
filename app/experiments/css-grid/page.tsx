import films from "./films.json";

const CssGridExperimentPage = () => {
  return (
    <main>
      <div className="p-12 font-sans">
        <div className="grid grid-cols-6 gap-5 max-w-[1600px] mx-auto">
          <p className="col-start-4 col-end-6">National Film Theatre of Australia</p>
          <h1 className="col-start-3 col-end-7 text-8xl">The New Swiss Film</h1>
          <p className="col-start-4 col-end-6">Canberra Melbourne Hobart Adelaide Sydney Perth Brisbane</p>
          <p className="col-start-4 col-end-6">Torquentdico habemus delectus instructior platea consetetur et iriure in
            maiestatis gravida consetetur
            taciti vocent noster luptatum ac sanctus sadipscing. Moderatiustota moderatius nostra aliquam graeco
            comprehensam oratio mus aliquip causae graeco vocent fames reprimique erroribus ancillae. Placeratmeliore
            animal quo inceptos semper.</p>
          {films.map((film, index) => (
            <figure key={index} className={index === 0 ? "col-start-4" : ""}>
              <img src="https://placehold.co/400x300" alt=""/>
              <figcaption className="text-sm">
                <h2>{film.title}</h2>
                <p>{film.short_description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CssGridExperimentPage;