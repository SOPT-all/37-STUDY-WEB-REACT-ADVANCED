import { useRef, useLayoutEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function MagicTextarea() {
  const { isDarkMode } = useTheme();
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, [text]);

  return (
    <textarea
      ref={textareaRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="내용을 입력하세요"
      style={{
        width: "100%",
        resize: "none",
        padding: "12px",
        fontSize: "16px",
        borderRadius: 8,
        border: "1px solid #aaa",
        transition: "background 0.2s, color 0.2s",
        background: isDarkMode ? "#1e1e1e" : "#ffffff",
        color: isDarkMode ? "#f1f1f1" : "#000000",
        boxSizing: "border-box",
      }}
    />
  );
}
