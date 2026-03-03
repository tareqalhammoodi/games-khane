'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getGameDefinition, getRandomGameItem } from '@/features/games/services/gameContentService';
import type { GameId } from '@/types/game';

interface GameRouteScreenProps {
  gameId: GameId;
}

export default function GameRouteScreen({ gameId }: GameRouteScreenProps) {
  const router = useRouter();
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const requestIdRef = useRef(0);

  const config = useMemo(() => getGameDefinition(gameId), [gameId]);

  const loadPrompt = useCallback(async () => {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    setIsLoading(true);

    try {
      const nextText = await getRandomGameItem(gameId);
      if (requestIdRef.current !== requestId) {
        return;
      }

      setText(nextText);
    } catch {
      if (requestIdRef.current !== requestId) {
        return;
      }

      setText('Could not load a question. Tap again.');
    } finally {
      if (requestIdRef.current === requestId) {
        setIsLoading(false);
      }
    }
  }, [gameId]);

  useEffect(() => {
    void loadPrompt();

    return () => {
      requestIdRef.current += 1;
    };
  }, [loadPrompt]);

  const handleBack = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="screen game active" id="gameScreen">
      <h1 id="gameTitle">{config.title}</h1>
      <div className="card" id="gameText" aria-live="polite">
        {text || (isLoading ? 'Loading...' : '')}
      </div>
      <button onClick={() => void loadPrompt()} id="gameButton" type="button" disabled={isLoading}>
        {config.buttonText}
      </button>
      <button className="back" onClick={handleBack} type="button">
        ← Back
      </button>
    </div>
  );
}
