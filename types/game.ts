export type GameId =
  | 'mostLikely'
  | 'truthDare'
  | 'wouldRather'
  | 'challenge'
  | 'conversation'
  | 'tonight';

export type AppScreen = 'home' | 'game' | 'wheel';
export type PlayableId = GameId | 'wheel';

export interface GameDefinition {
  title: string;
  buttonText: string;
  data: readonly string[];
}
