import MagicTextarea from "./components/MagicTextarea";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function HeaderButton() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ marginBottom: 16 }}>
      {isDarkMode ? "다크모드로 변경하기" : "라이트모드로 변경하기"}
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ maxWidth: 600, margin: "40px auto", padding: 16 }}>
        <HeaderButton />
        <MagicTextarea />
      </div>
    </ThemeProvider>
  );
}
