export const lightTheme = {
  colors: {
    background: "#F2F8F6", // A very soft "minty" white
    surface: "#FEFEFE", // For cards and navigation              //header bg
    text: "#052018", // Deep forest green (softer than #000)
    textSecondary: "#586069", // Muted grey for body text
    primary: "#178F66", // Your signature green
    accent: "#E6F4EA", // Soft wash for hover/pills
    border: "rgba(23, 143, 102, 0.1)",
  },
  font: {
    heading: "'Plus Jakarta Sans', sans-serif", // For H1, H2, H3
    body: "'Inter', sans-serif", // For P, Span, Li
    main: "Inter, sans-serif",
  },
  typography: {
    h1: {
      size: "3.5rem",
      weight: "800",
      letterSpacing: "-0.02em", // Tighter headings look more "designed"
      lineHeight: "1.2",
    },
    body: {
      size: "1.1rem",
      weight: "400",
      letterSpacing: "0.01em", // Slightly wider body text is easier to read
      lineHeight: "1.6", // 1.6 is the "Golden Ratio" for readability
    },
  },
  spacing: {
    section: "80px",
    header: "70px",
  },
};

export const darkTheme = {
  colors: {
    background: "#0F1219", // Deep "Midnight" charcoal
    surface: "#141D24", // Slightly lighter for card depth           //header bg
    text: "#F0F6FC", // Off-white to reduce eye strain
    textSecondary: "#8B949E", // Muted grey for meta-data
    primary: "#178F66", // Your signature green
    secondary: "#1F1F1F", // Keep your current dark secondary
    accent: "#3FB950", // Brighter green for UI feedback/hover
    border: "rgba(23, 143, 102, 0.2)",
  },
  font: {
    heading: "'Plus Jakarta Sans', sans-serif", // For H1, H2, H3
    body: "'Inter', sans-serif", // For P, Span, Li
    main: "Inter, sans-serif",
  },
  typography: {
    h1: {
      size: "3.5rem",
      weight: "800",
      letterSpacing: "-0.02em", // Tighter headings look more "designed"
      lineHeight: "1.2",
    },
    body: {
      size: "1.1rem",
      weight: "400",
      letterSpacing: "0.01em", // Slightly wider body text is easier to read
      lineHeight: "1.6", // 1.6 is the "Golden Ratio" for readability
    },
  },
  spacing: {
    section: "80px",
    header: "70px",
  },
};
