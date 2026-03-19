import styled from "styled-components";

export const Header_Container = styled.div`
  position: fixed;
  width: 100%;
  height: ${({ theme }) => theme.spacing.header};
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-size: 14px;
  z-index: 100;
  color: #ffffff8f;

  background: ${({ scrolled, theme }) =>
    scrolled ? theme.colors.surface : "transparent"};

  transition:
    background 0.3s ease,
    backdrop-filter 0.3s ease;

  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
`;

export const Header_Title = styled.div``;

export const Header_Pages = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;
export const Header_Buttons_Section = styled.div`
  display: flex;
  gap: 60px;
`;

export const Header_Theme_Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 30px;
  cursor: pointer;
  border: none;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const Header_Nav_Buttons = styled.div`
  cursor: pointer;
`;

export const Header_Theme = styled.div``;
