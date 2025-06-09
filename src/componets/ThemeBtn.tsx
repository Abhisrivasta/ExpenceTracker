import useTheme from "../context/themeContext";

export default function ThemeBtn() {
  const { themeMode, toggleMode} = useTheme();

  const onChangebtn = () => {
    toggleMode();
  };

  return (
    <div>
      <label className="flex gap-2 items-center">
        Dark Mode
        <input
          type="checkbox"
          onChange={onChangebtn}
          checked={themeMode === "dark"}
        />
      </label>{" "}
    </div>
  );
}
