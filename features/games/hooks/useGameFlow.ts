import { useCallback, useMemo, useRef, useState } from 'react';
import { getGameDefinition, getRandomGameItem } from '@/features/games/services/gameContentService';
import type { AppScreen, GameDefinition, GameId, PlayableId } from '@/types/game';

interface UseGameFlowResult {
  screen: AppScreen;
  gameText: string;
  isLoading: boolean;
  currentConfig: GameDefinition | null;
  openGame: (id: PlayableId) => void;
  nextGame: () => void;
  goHome: () => void;
}

export function useGameFlow(): UseGameFlowResult {
  const [screen, setScreen] = useState<AppScreen>('home');
  const [currentGame, setCurrentGame] = useState<GameId | null>(null);
  const [gameText, setGameText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const requestIdRef = useRef(0);

  const currentConfig = useMemo(
    () => (currentGame ? getGameDefinition(currentGame) : null),
    [currentGame]
  );

  const loadPrompt = useCallback(async (gameId: GameId) => {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    setIsLoading(true);

    try {
      const nextText = await getRandomGameItem(gameId);
      if (requestIdRef.current !== requestId) {
        return;
      }

      setGameText(nextText);
    } catch {
      if (requestIdRef.current !== requestId) {
        return;
      }

      setGameText('Could not load a question. Tap again.');
    } finally {
      if (requestIdRef.current === requestId) {
        setIsLoading(false);
      }
    }
  }, []);

  const nextGame = useCallback(() => {
    if (!currentGame || isLoading) {
      return;
    }

    void loadPrompt(currentGame);
  }, [currentGame, isLoading, loadPrompt]);

  const openGame = useCallback((id: PlayableId) => {
    if (id === 'wheel') {
      setScreen('wheel');
      return;
    }

    setCurrentGame(id);
    setScreen('game');
    setGameText('');
    void loadPrompt(id);
  }, [loadPrompt]);

  const goHome = useCallback(() => {
    requestIdRef.current += 1;
    setCurrentGame(null);
    setGameText('');
    setIsLoading(false);
    setScreen('home');
  }, []);

  return {
    screen,
    gameText,
    isLoading,
    currentConfig,
    openGame,
    nextGame,
    goHome
  };
}
