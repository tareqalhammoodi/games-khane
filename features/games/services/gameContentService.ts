import { gameConfig } from '@/lib/gameConfig';
import type { GameDefinition, GameId } from '@/types/game';

export function getGameDefinition(gameId: GameId): GameDefinition {
  return gameConfig[gameId];
}

export function getRandomGameItem(gameId: GameId): string {
  const options = getGameDefinition(gameId).data;
  return options[Math.floor(Math.random() * options.length)] ?? '';
}
