import { useCallback, useMemo, useState } from 'react';
import { getGameDefinition, getRandomGameItem } from '@/features/games/services/gameContentService';
import type { AppScreen, GameDefinition, GameId, PlayableId } from '@/types/game';

interface UseGameFlowResult {
  screen: AppScreen;
  gameText: string;
  currentConfig: GameDefinition | null;
  openGame: (id: PlayableId) => void;
  nextGame: () => void;
  goHome: () => void;
}

export function useGameFlow(): UseGameFlowResult {
  const [screen, setScreen] = useState<AppScreen>('home');
  const [currentGame, setCurrentGame] = useState<GameId | null>(null);
  const [gameText, setGameText] = useState('');

  const currentConfig = useMemo(
    () => (currentGame ? getGameDefinition(currentGame) : null),
    [currentGame]
  );

  const nextGame = useCallback(() => {
    if (!currentGame) {
      return;
    }

    setGameText(getRandomGameItem(currentGame));
  }, [currentGame]);

  const openGame = useCallback((id: PlayableId) => {
    if (id === 'wheel') {
      setScreen('wheel');
      return;
    }

    setCurrentGame(id);
    setGameText(getRandomGameItem(id));
    setScreen('game');
  }, []);

  const goHome = useCallback(() => {
    setCurrentGame(null);
    setGameText('');
    setScreen('home');
  }, []);

  return {
    screen,
    gameText,
    currentConfig,
    openGame,
    nextGame,
    goHome
  };
}
