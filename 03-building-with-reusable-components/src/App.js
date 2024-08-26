import ProfileCard from "./components/ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

import "bulma/css/bulma.css";

// Enable Prettier & ESLint: https://dev.to/rgolawski/how-to-make-eslint-and-prettier-work-together-2i5g
// Install CSS Framework bulma.io: https://bulma.io/
function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Basic Component Example</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div class="columns">
            <div class="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              />
            </div>

            <div class="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              />
            </div>

            <div class="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri738"
                image={SiriImage}
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
