import styled from "styled-components";

export const Experience_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  justify-content: center;
`;

export const Exp_ExperienceContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 45px;
  width: 80%;
`;

export const Exp_ExperienceBox = styled.div`
  display: flex;
  gap: 20px;
  width: 45%;
`;

export const Exp_ExperienceIconSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Exp_ExperienceIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Exp_ExperienceLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  width: 1.5px;
  height: calc(100% - 40px);
`;

export const Exp_ExperienceTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Exp_ExperienceDuration = styled.div`
  background: #333;
  font-size: 12px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  width: fit-content;
`;

export const Exp_ExperienceRole = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Exp_ExperienceLocation = styled.div`
  font-size: 15px;
  opacity: 0.9;
`;

export const Exp_ExperienceDash = styled.span`
  display: inline-block;
  width: 12px;
  height: 2px;
  background: #fff;
  margin: 0 8px;
  opacity: 0.8;
  position: relative;
  top: -3px;
  border-radius: 2px;
`;

export const Exp_ExperienceDescription = styled.div`
  color: #eee;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 20px;
`;
