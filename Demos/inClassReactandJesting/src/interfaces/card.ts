/*export enum CardKind {
  TeachingEasy = "Teaching Prompt Round 1",
  TeachingHard = "Teaching Prompt Round 2",
  Microaggressions = "Microaggressions Round"
}*/

export interface Card {
  id: number
  kind: string
  prompt: string
  answer: string
}

