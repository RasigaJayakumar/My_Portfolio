import CommonTitle from "@/components/title";
import {
  Experience_Container,
  Exp_ExperienceContent,
  Exp_ExperienceBox,
  Exp_ExperienceIconSection,
  Exp_ExperienceIcon,
  Exp_ExperienceLine,
  Exp_ExperienceTextContent,
  Exp_ExperienceDuration,
  Exp_ExperienceRole,
  Exp_ExperienceLocation,
  Exp_ExperienceDescription,
  Exp_ExperienceDash,
} from "@/styles/experience";

export default function Experience() {
  const experienceAndEducation = [
    {
      duration: "2018 - PRESENT",
      role: "web developer",
      location: "Envato",
      description:
        "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
    },
    {
      duration: "2012",
      role: "UI/UX Designer",
      location: "Themeforest",
      description:
        "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
    },
    {
      duration: "2013 - 2015",
      role: "ENGINEERING DEGREE",
      location: "OXFORD UNIVERSITY",
      description:
        "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
    },
    {
      duration: "2016",
      role: "Consultant",
      location: "Videohive",
      description:
        "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
    },
    {
      duration: "2017",
      role: "MASTER DEGREE",
      location: "KIEV UNIVERSITY",
      description:
        "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
    },
    {
      duration: "2018",
      role: "BACHELOR DEGREE",
      location: "TUNIS HIGH SCHOOL",
      description:
        "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
    },
  ];
  return (
    <Experience_Container>
      <CommonTitle
        MainContent="My"
        ColorContent="Experience & Education"
        subTitle="Lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
      />
      <Exp_ExperienceContent>
        {experienceAndEducation?.map((data, index) => {
          return (
            <Exp_ExperienceBox key={index}>
              <Exp_ExperienceIconSection>
                <Exp_ExperienceIcon>o</Exp_ExperienceIcon>
                <Exp_ExperienceLine></Exp_ExperienceLine>
              </Exp_ExperienceIconSection>
              <Exp_ExperienceTextContent>
                <Exp_ExperienceDuration>
                  {data?.duration}
                </Exp_ExperienceDuration>
                <Exp_ExperienceRole>
                  {data?.role}
                  <Exp_ExperienceLocation>
                    <Exp_ExperienceDash></Exp_ExperienceDash>
                    {data?.location}
                  </Exp_ExperienceLocation>
                </Exp_ExperienceRole>
                <Exp_ExperienceDescription>
                  {data?.description}
                </Exp_ExperienceDescription>
              </Exp_ExperienceTextContent>
            </Exp_ExperienceBox>
          );
        })}
      </Exp_ExperienceContent>
    </Experience_Container>
  );
}
