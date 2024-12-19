import type { History, Score } from "./types";

export const initialScore: Score = { teamA: 0, teamB: 0 };
export const randomShot = (): boolean => Math.random() < 0.5;

export const updateScore = (
  score: Score,
  team: "A" | "B",
  result: boolean,
): Score => {
  if (team === "A") return { ...score, teamA: score.teamA + (result ? 1 : 0) };
  else return { ...score, teamB: score.teamB + (result ? 1 : 0) };
};

export const addHistory = (
  history: History,
  shot: number,
  score: Score,
  result: boolean,
  team: "A" | "B",
): History => {
  const resultStr =
    team === "A"
      ? `Équipe 🅰️ : ${result ? "+1" : "0"}`
      : `Équipe 🅱️ : ${result ? "+1" : "0"}`;
  return [...history, { shot, score, result: resultStr }];
};

export const displayHistory = (history: History): void => {
  history.forEach(({ shot, score, result }) => {
    console.log(
      `⚽ Tir ${shot} : Score : ${score.teamA}/${score.teamB} (${result})`,
    );
  });
};

export const checkWinner = (score: Score, shots: number): string | null => {
  if (shots >= 5) {
    if (score.teamA > score.teamB) return "Équipe 🅰️";
    if (score.teamB > score.teamA) return "Équipe 🅱️";
  }
  return null;
};
