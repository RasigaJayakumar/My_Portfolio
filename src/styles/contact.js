import styled from "styled-components";

export const Contact_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const Contact_ConetentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 120px;
  justify-content: center;

  font-size: 10px;
  font-weight: normal;
  font-family: cursive;
`;

export const Contact_ReachContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Contact_Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Contact_InfoLabel = styled.div``;

export const Contact_InfoDetails = styled.div`
  text-decoration: underline;
  text-decoration-color: #635b5b;
  text-decoration-thickness: 1.4px;
  text-underline-offset: 4px;

  font-size: 12px;
`;

export const Contact_SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Contact_AnchorTag = styled.a`
  &:focus {
    border-radius: 20px;
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    border: none;
  }
`;

export const Contact_Icons = styled.div`
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff8f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);

  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Contact_IconImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Contact_Image = styled.img`
  height: 17px;
  width: 17px;
`;

export const Contact_Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 35%;
`;

export const Contact_FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Contact_TextFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Contact_SubjectField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Contact_PrimaryField = styled.div`
  width: calc(50% - 15px);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Contact_TextLabel = styled.div`
  text-transform: uppercase;
`;

export const Contact_TextValue = styled.input`
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff8f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);

  border-radius: 5px;
  height: 30px;
  transition: transform 0.2s ease;
  padding: 5px;

  &:focus {
    outline: 1.5px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 2px 10px #f1a10d1f;
    transform: scale(1.01);
  }
`;

export const Contact_TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff8f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  resize: none;

  border-radius: 5px;
  height: 100px;
  max-width: 100%;
  min-width: 100%;
  transition: transform 0.2s ease;
  padding: 5px;

  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.08) rgba(255, 255, 255, 0.04);

  &:focus {
    outline: 1.5px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 2px 10px #f1a10d1f;
    transform: scale(1.01);
  }
`;

export const Contact_DetailsField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Contact_SubmitButton = styled.button`
  background: transparent;
  border: 1.8px solid #655d5d;
  border-radius: 5px;
  height: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};

  font-size: 12px;
  font-weight: normal;
  font-family: cursive;
  text-transform: uppercase;
  transition: transform 0.2s ease;

  &:hover {
    box-shadow: 0 2px 10px #f1a10d1f;
    outline: 1.5px solid ${({ theme }) => theme.colors.primary};
    transform: scale(1.01);
    border: none;
  }
`;

export const Page_Subtitle = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
`;
