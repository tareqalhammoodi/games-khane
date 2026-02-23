import type { GameDefinition } from '@/types/game';

interface GameScreenProps {
  isActive: boolean;
  config: GameDefinition | null;
  text: string;
  isLoading: boolean;
  onNext: () => void;
  onBack: () => void;
}

export default function GameScreen({
  isActive,
  config,
  text,
  isLoading,
  onNext,
  onBack
}: GameScreenProps) {
  return (
    <div className={`screen game ${isActive ? 'active' : ''}`} id="gameScreen">
      <h1 id="gameTitle">{config?.title ?? ''}</h1>
      <div className="card" id="gameText" aria-live="polite">
        {text || (isLoading ? 'Loading...' : '')}
      </div>
      <button onClick={onNext} id="gameButton" type="button" disabled={isLoading}>
        {config?.buttonText ?? 'Next'}
      </button>
      <button className="back" onClick={onBack} type="button">
        ← Back
      </button>
    </div>
  );
}
