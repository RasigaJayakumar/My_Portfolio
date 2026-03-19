import styled from "styled-components";

export const Footer_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background: ${({ theme }) => theme.colors.surface};
  font-size: 14px;
  padding: 50px 0px 20px 0px;
  color: #ffffff8f;
`;

export const Footer_Title = styled.div``;

export const Footer_Navs = styled.div`
  display: flex;
  gap: 50px;
`;

export const Footer_Pages = styled.div`
  cursor: pointer;
`;

export const Footer_Social = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
`;

export const Footer_Contact = styled.div`
  display: flex;
  gap: 25px;
`;

export const Footer_Mail = styled.div``;

export const Footer_Mobile = styled.div``;

export const Footer_Rights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;
  padding: 0px 30px;
`;

export const Footer_Rights_Line = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Footer_Rights_Text = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  font-size: 12px;
  color: #ffffff8f;
  justify-content: space-between;
`;
