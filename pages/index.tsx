import { Header } from "../components/Header";
import { Job } from "../components/Job";
import jobData from "../data/jobs";

const IndexPage = () => (
  <div className="min-h-screen">
    <Header />
    <section>
      {jobData.map((j, i) => (
        <Job
          key={i}
          className={i % 2 === 0 ? "bg-gray-200" : "bg-gray-300"}
          {...j}
        />
      ))}
    </section>
  </div>
);

export default IndexPage;
