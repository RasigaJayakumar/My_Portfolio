import CommonTitle from "@/components/title";
import {
  Skills_Container,
  Skills_Wrapper,
  Skills_Card,
  Skills_Logo,
  Skills_Stack,
  Skills_Description,
  Skills_List,
} from "@/styles/skills";

export default function Skills() {
  const cardDetails = [
    {
      logo: "@",
      title: "Frontend Development",
      stacks: [
        "React.js",
        "Mext.js",
        "Electron.js",
        "HTML5",
        "CSS3",
        "SCSS",
        "JavaScript (ES6+)",
      ],
      description:
        "Building scalable, high-performance, and responsive user interfaces using modern frameworks.",
    },
    {
      logo: "%",
      title: "Design Systems & CMS Platforms",
      stacks: ["Material UI", "Ant Design", "Strapi", "Contentful"],
      description:
        "Building reusable UI systems and managing dynamic content using modern design and CMS tools.",
    },
    {
      logo: "+",
      title: "Backend & APIs",
      stacks: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
      description:
        "Developing and integrating robust backend services and RESTful APIs.",
    },
    {
      logo: "&",
      title: "Cloud & DevOps",
      stacks: [
        "Microsoft Azure",
        "AWS",
        "CI/CD pipelines",
        "Azure DevOps",
        "Github Actions",
      ],
      description:
        "Automating deployments, managing cloud infrastructure, and ensuring scalable application delivery.",
    },
    {
      logo: "^",
      title: "AI & LLM Integration",
      stacks: [
        "Anthropic Claude",
        "OpenAI(GPT-4o mini)",
        "Prompt Engineering",
        "API Integration",
      ],
      description:
        "Developing AI-powered features and integrating large language models into applications.",
    },
    {
      logo: "()",
      title: "Tools & Workflow",
      stacks: ["Git", "GitHub", "Bitbucket", "Agile", "Scrum"],
      description:
        "Collaborating in agile environments and maintaining efficient development workflows.",
    },
  ];
  return (
    <Skills_Container>
      <CommonTitle
        MainContent="My"
        ColorContent="Skills"
        subTitle="Lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
      />
      <Skills_Wrapper>
        {cardDetails?.map((data, index) => {
          return (
            <Skills_Card key={index}>
              <Skills_Logo>{data?.logo}</Skills_Logo>
              <Skills_Stack>{data?.title}</Skills_Stack>
              <Skills_Description>
                {data?.stacks.map((item, index) => {
                  return <Skills_List key={index}>{item}</Skills_List>;
                })}
              </Skills_Description>
            </Skills_Card>
          );
        })}
      </Skills_Wrapper>
    </Skills_Container>
  );
}
