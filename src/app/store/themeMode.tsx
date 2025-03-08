import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "system";
};

const initialState = {
  themeMode: getInitialTheme(),
};

const themeModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
      localStorage.setItem("themeMode", state.themeMode);

      // Terapkan tema di body
      applyTheme(state.themeMode);
    },
  },
});

const applyTheme = (themeMode: any) => {
  if (themeMode === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else if (themeMode === "light") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else {
    // Hanya sinkronisasi dengan perangkat
    const isDarkModePreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark-mode", isDarkModePreferred);
    document.body.classList.toggle("light-mode", !isDarkModePreferred);
  }
};

// Terapkan tema saat aplikasi dimuat
applyTheme(getInitialTheme());

export const { setThemeMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
