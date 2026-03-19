import styled from "styled-components";

export default function Title({ MainContent, ColorContent, subTitle }) {
  return (
    <PageTitleSection>
      <PageTitleCard>
        {MainContent} <PageColorTitle>{ColorContent}</PageColorTitle>
      </PageTitleCard>
      <PageSubTitle>{subTitle}</PageSubTitle>
    </PageTitleSection>
  );
}

export const PageTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageTitleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  gap: 15px;

  // Font Styles
  font-size: 48px;
  font-weight: 900 !important;
  color: #fff;
  // text-transform: uppercase;
  text-shadow: 0 0 25px rgba(31, 191, 143, 0.4);
`;

export const PageColorTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const PageSubTitle = styled.span`
  font-size: 14px;
  color: #ffffff8f;
  width: 50%;
  text-align: center;
  line-height: 20px;
  letter-spacing: 0.5px;
`;
