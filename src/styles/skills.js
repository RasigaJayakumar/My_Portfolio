import styled from "styled-components";

export const Skills_Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;

export const Skills_Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  align-items: center;
  gap: 20px;
`;

export const Skills_Card = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
  text-align: center;
  padding: 25px;
  min-height: 210px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  border-radius: 12px;
  box-shadow: 0 0 10px rgba(18, 141, 104, 0.2);

  &:hover {
    background: linear-gradient(
      120deg,
      rgba(31, 191, 143, 0.2),
      rgba(31, 191, 143, 0.05)
    );
  }

  & {
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.03);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(31, 191, 143, 0.2),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

export const Skills_Logo = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Skills_Stack = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Skills_Description = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #ffffff8f;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  font-size: 12px;
`;

export const Skills_List = styled.div`
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff8f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);

  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
