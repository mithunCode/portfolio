import ProjectCard from "../components/ProjectCard";
import digimoney from "../assets/images/projects/digimoney.png";
import sumUp from "../assets/images/projects/sumUp.png";
import sp from "../assets/images/projects/sp.png";
import rps from "../assets/images/projects/rps.png";
import ps from "../assets/images/projects/ps.png";

import ca from "../assets/images/projects/ca.png";

const Projects = () => {
  return (
    <section>
      <p className="px-4 text-white text-xs font-monsterrat">
        Please Click On Respective Project Card for Demo.
      </p>
      <div className="p-4 mt-2">
        <div className="flex flex-wrap gap-10 items-center justify-around">
          <ProjectCard
            title="DigiMoney"
            desc="Find all the latest and existing Cryptocurrency Details, Charts and
            Trending NewsFind all the latest and existing Cryptocurrency
            Details, Charts and Trending News"
            link="https://digimoneyy.netlify.app/"
            img={digimoney}
          />
          <ProjectCard
            title="SUM-UP"
            desc="Simplify your reading with Summize , an open-source article summarizer that transforms lengthy articles into clear and conscise summaries."
            link="https://sum-up.netlify.app/"
            img={sumUp}
          />
          <ProjectCard
            title="SneakPoint"
            desc="Discover stylish SneakPoint Collections , quality comfort and innovations for your active life."
            link="https://sneakpoint.netlify.app/"
            img={sp}
          />
          <ProjectCard
            title="CA-Search"
            desc="CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support"
            link="https://casearch.netlify.app/"
            img={ca}
          />
          <ProjectCard
            title="Rock Paper Scissor"
            desc="A simple rock paper scissors game against Computer"
            link="https://cuvette-rps.netlify.app/"
            img={rps}
          />
          <ProjectCard
            title="PRK Tribute"
            desc="A tribute to Late Actor Dr.Puneeth RajKumar Sir."
            link="https://power-star.netlify.app/"
            img={ps}
          />
        </div>
        <p className="text-center p-2 text-white font-monsterrat mt-2 text-xs mb-2">
          And Many More In Progress....
        </p>
      </div>
    </section>
  );
};

export default Projects;
