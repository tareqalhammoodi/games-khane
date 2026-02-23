import type { GameDefinition } from '@/types/game';

interface GameScreenProps {
  isActive: boolean;
  config: GameDefinition | null;
  text: string;
  onNext: () => void;
  onBack: () => void;
}

export default function GameScreen({ isActive, config, text, onNext, onBack }: GameScreenProps) {
  return (
    <div className={`screen game ${isActive ? 'active' : ''}`} id="gameScreen">
      <h1 id="gameTitle">{config?.title ?? ''}</h1>
      <div className="card" id="gameText">
        {text}
      </div>
      <button onClick={onNext} id="gameButton">
        {config?.buttonText ?? 'Next'}
      </button>
      <button className="back" onClick={onBack}>
        ← Back
      </button>
    </div>
  );
}
