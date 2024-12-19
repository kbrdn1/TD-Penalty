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
      ? `Équipe A : ${result ? "+1" : "0"}`
      : `Équipe B : ${result ? "+1" : "0"}`;
  return [...history, { shot, score, result: resultStr }];
};
