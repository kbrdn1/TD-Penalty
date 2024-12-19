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

export const checkWinner = (
  score: Score,
  shots: number,
  history: History,
): string | null => {
  const lead = Math.abs(score.teamA - score.teamB);

  if (shots >= 5 && lead === 1) {
    const [lastScore, secondLastScore] = history
      .slice(-2)
      .map((history) => history.score);

    if (
      lastScore.teamA === secondLastScore.teamA &&
      lastScore.teamB === secondLastScore.teamB
    )
      return score.teamA > score.teamB ? "Équipe 🅰️" : "Équipe 🅱️";
  } else if (shots < 5 && lead >= 2)
    return score.teamA > score.teamB ? "Équipe 🅰️" : "Équipe 🅱️";

  return null;
};
