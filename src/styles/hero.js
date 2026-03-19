import styled, { keyframes } from "styled-components";

/* animations */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
`;

/* container */
export const Hero_Container = styled.section`
  position: relative;
  padding: 100px 30px;
  height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 70% 30%,
      rgba(15, 199, 138, 0.2),
      transparent 40%
    ),
    ${({ theme }) => theme.colors.background};
`;

/* particles */
export const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

/* cursor glow */
export const CursorGlow = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(31, 191, 143, 0.2), transparent 70%);
  filter: blur(30px);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

/* static glow */
export const Glow = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.15;
  filter: blur(120px);
  top: 20%;
  left: 60%;
`;

/* layout */
export const Hero_Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: auto;
  display: flex;
  gap: 50px;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Left = styled.div`
  flex: 1;
  animation: ${fadeUp} 1s ease;

  .intro {
    color: ${({ theme }) => theme.colors.primary};
  }

  .typing {
    color: ${({ theme }) => theme.colors.primary};
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
    padding-right: 5px;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 0 25px rgba(31, 191, 143, 0.4);
  }
`;

export const SubText = styled.p`
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
`;

/* buttons */
export const CTA_Group = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PrimaryBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: #ffffff8f;
  padding: 10px 18px;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(31, 191, 143, 0.3);
  }
`;

export const SecondaryBtn = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff8f;
  padding: 10px 18px;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;

  &:hover {
    border-color: #1fbf8f;
    color: #1fbf8f;
  }
`;

/* stats */
export const Stats = styled.div`
  margin-top: 30px;
  display: flex;
  width: fit-content;
  background: #141d24;
  padding: 20px;
  gap: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StatDash = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }

  span {
    display: block;
    font-size: 12px;
    opacity: 0.7;
    color: #ffffff8f;
  }
`;

/* code card */
export const CodeCard = styled.pre`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid rgba(31, 191, 143, 0.3);
  box-shadow: 0 0 30px rgba(31, 191, 143, 0.2);
  //   color: ${({ theme }) => theme.colors.textSecondary};
  color: #ffffff8f;
  line-height: 1.6;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 40px rgba(31, 191, 143, 0.3);
  }
`;
