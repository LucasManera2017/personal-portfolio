import TiltedCard from "./TiltedCard";

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
              imageSrc="../../public/img/crud_app.png"
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
          <TiltedCard
            imageSrc="../../public/img/crud_app.png"
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

          {/* Card 3 */}
          <TiltedCard
            imageSrc="../../public/img/crud_app.png"
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

          {/* Card 4 */}
          <TiltedCard
            imageSrc="../../public/img/crud_app.png"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
