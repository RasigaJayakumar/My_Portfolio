import {
  Contact_Container,
  Contact_ConetentBox,
  Contact_ReachContent,
  Contact_Info,
  Contact_InfoLabel,
  Contact_InfoDetails,
  Contact_SocialIcons,
  Contact_Icons,
  Contact_IconImage,
  Contact_Form,
  Contact_FormContent,
  Contact_TextFields,
  Contact_SubjectField,
  Contact_PrimaryField,
  Contact_SubmitButton,
  Contact_TextLabel,
  Contact_TextValue,
  Contact_DetailsField,
  Contact_TextArea,
  Contact_Image,
  Contact_AnchorTag,
  Page_Subtitle,
} from "@/styles/contact";
import CommonTitle from "./title";

export default function Contact_() {
  const Contact_Details = [
    {
      label: "EMAIL ME",
      link_detail: "rasigajkr@gmail.com",
    },
    {
      label: "PHONE ME",
      link_detail: "7010594411",
    },
  ];

  const socialMedia = [
    {
      name: "Linkedin",
      link: "www.linkedin.com/in/rasigajayakumar",
      icon: "assets/socialMedia/linkedin.png",
    },
    {
      name: "Medium",
      link: "https://medium.com/@rasigajkr",
      icon: "assets/socialMedia/medium.png",
    },
    {
      name: "Instagram",
      link: "www.linkedin.com/in/rasigajayakumar",
      icon: "assets/socialMedia/instagram.png",
    },
    {
      name: "Gitlab",
      link: "https://gitlab.com/rasigajkr",
      icon: "assets/socialMedia/gitlab.png",
    },
  ];

  const formFieldContent = ["Name *", "email address *"];
  return (
    <Contact_Container>
      <CommonTitle
        MainContent="Ping"
        ColorContent="Me"
        subTitle="Lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English"
      />
      <Contact_ConetentBox>
        <Contact_ReachContent>
          {Contact_Details?.map((data, index) => {
            return (
              <Contact_Info key={index}>
                <Contact_InfoLabel>{data?.label}</Contact_InfoLabel>
                <Contact_InfoDetails>{data?.link_detail}</Contact_InfoDetails>
              </Contact_Info>
            );
          })}
          <Contact_SocialIcons>
            {socialMedia?.map((data, index) => {
              return (
                <Contact_AnchorTag
                  key={index}
                  href={
                    data?.link.startsWith("http")
                      ? data?.link
                      : `https://${data?.link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Contact_Icons key={index}>
                    <Contact_IconImage>
                      <Contact_Image src={data?.icon} alt={data?.name} />
                    </Contact_IconImage>
                  </Contact_Icons>
                </Contact_AnchorTag>
              );
            })}
          </Contact_SocialIcons>
        </Contact_ReachContent>

        <Contact_Form>
          <Page_Subtitle>{"Let's work together"}</Page_Subtitle>
          <Contact_FormContent>
            <Contact_TextFields>
              {formFieldContent?.map((data, index) => {
                return (
                  <Contact_PrimaryField key={index}>
                    <Contact_TextLabel>{data}</Contact_TextLabel>
                    <Contact_TextValue
                      id={data}
                      name="Contact_Text"
                    ></Contact_TextValue>
                  </Contact_PrimaryField>
                );
              })}
            </Contact_TextFields>
            <Contact_SubjectField>
              <Contact_TextLabel>subject *</Contact_TextLabel>
              <Contact_TextValue
                id="subject"
                name="Contact_Text"
                width="100%"
              ></Contact_TextValue>
            </Contact_SubjectField>
            <Contact_DetailsField>
              <Contact_TextLabel>details *</Contact_TextLabel>
              <Contact_TextArea
                id="detail"
                name="Contact_TextArea"
                width="100%"
              ></Contact_TextArea>
            </Contact_DetailsField>
          </Contact_FormContent>
          <Contact_SubmitButton>Submit</Contact_SubmitButton>
        </Contact_Form>
      </Contact_ConetentBox>
    </Contact_Container>
  );
}
