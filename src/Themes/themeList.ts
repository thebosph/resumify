export type ThemeName = "detailKing" | "obukhov";
export interface ThemeData {
  theme: ThemeName;
  title: string | undefined;
  explain: string;
  color: string;
  colors: string[];
}

export const themeList: ThemeData[] = [
  {
    theme: "detailKing",
    title: "Detail King",
    explain:
      "Detail King is a resume template that is simple and clean. It is a good template for a job that is more on the technical side.",
    color: "#1e1e1e",
    colors: ["#f4ce9d", "#f8debe", "#fae9d3", "#fefaf4"],
  },
  {
    theme: "obukhov",
    title: "Obukhov",
    explain:
      "Obukhov is another good resume template that is simple and clean. It is a good template for a job that is more on the technical side.",
    color: "#f1fcfc",
    colors: ["#d9e3e3", "#c1caca", "#a9b0b0", "#919797"],
  },
];
