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
