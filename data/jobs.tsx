import { IJobProps, Job } from "../components/Job";

const JobData: IJobProps[] = [
  {
    title: "Hyperproof",
    summary:
      "Modern compliance management web-app to simplify and streamline the compliance management process.",
    role: "Senior Software Engineer",
    responsibilities:
      "As a senior software engineer and one of the earliest devs to join the company I help build our infrastructure from the ground up utilizing the latest techonlogies such as Kubernetes, Helm, Docker, and Azure Pipelines. I also made signifcant contributions to our frontend code (React, ExpressJS, Node) and our aysnchronous job pipeline (Golang, Beanstalkd, Redis).",
    image: "images/hyperproof.png",
  },
  {
    title: "Doosan GridTech (1Energy Systems)",
    summary:
      "Doosan GridTech® delivers control system software and power system engineering services to help distribution utilities and independent power producers integrate distributed energy resources, such as solar and wind power, into the grid. Our control software for energy storage systems (ESSs) runs patent-pending algorithms that help maintain power quality on circuits impacted by solar and other renewables, while taking full advantage of energy storage and other distributed energy resources. The Doosan GridTech platform, based on open standards such as the Modular Energy Storage Architecture (MESA) creates scalable, modular energy storage systems from batteries, power conversion systems and software.",
    role: "Lead Software Engineer",
    responsibilities:
      "Developed control system software for utility scale energy storage systems (C#, Modbus, DNP3, WPF). Built first version of distributed energy resource (DER) fleet-management software (ASP.NET, C#, CSS, HTML, JavaScript, SQL Server). Gathered requirements, designed, and lead team of 8 developers to build site controller and historian for locations where energy storage is installed alongside other assets (Analog and Digital I/O, ASP.NET, C#, DNP3, Modbus, PostgreSQL, WPF). Lead team of 4 developers to build data collection and analysis platform for Doosan GridTech’s deployed projects (ASP.NET, C#, CSS, HTML, JavaScript, SFTP, SQL Server).",
    image: "images/doosan.png",
  },
  {
    title: "CaseIntel Corporation",
    summary:
      "Metadata-driven commercial plugin for AutoCAD that enabled full drawing synchronization with a database.",
    role: "Software Engineer",
    responsibilities:
      " Created complex code generation modules for the automatic generation of code based on end-user editable metadata. Provided on-site product support; working with end-users to teach them how to use the software, discover and resolve issues, and collect feedback. Configured and deployed integrated Atlassian software engineering tools on Linux platform. Tools included Jira, Confluence, Bamboo, Fisheye, Stash, and Crowd",
  },
];

export default JobData;
