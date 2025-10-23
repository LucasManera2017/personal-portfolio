import TiltedCard from "./TiltedCard";
import crudapp from '/img/crud_app.png'
import championsapi from '/img/champiosApi.png'
import autnutry from '/img/AutNutry.png'

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-base-100">
      <h2 className="text-primary text-5xl md:text-7xl font-mono text-center mb-12">
        Projects
      </h2>

      {/* Container centralizado */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1280px]">
          {/* Card 1 */}
          <a href="https://github.com/LucasManera2017/crudApp/tree/main">
            <TiltedCard
              imageSrc={crudapp}
              altText="Clients - CrudApp"
              captionText="Clients - CrudApp"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Clients - CrudApp</p>
              }
            />
          </a>
          {/* Card 2 */}
          <a href="https://github.com/LucasManera2017/champions_league_API">
            <TiltedCard
              imageSrc={championsapi}
              altText="Champions API with Express and NextJs"
              captionText="Champions API with Express and NextJs"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Champions API</p>
              }
            />
          </a>

          {/* Card 3 */}
          <a href="https://github.com/LucasManera2017/AutNutry">
            <TiltedCard
              imageSrc={autnutry}
              altText="AutNutry - App for Nutricionists"
              captionText="AutNutry - App for Nutricionists"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  AutNutry - App for Nutricionists
                </p>
              }
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
