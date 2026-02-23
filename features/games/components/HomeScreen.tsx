import type { PlayableId } from '@/types/game';

interface HomeScreenProps {
  isActive: boolean;
  onOpenGame: (id: PlayableId) => void;
}

export default function HomeScreen({ isActive, onOpenGame }: HomeScreenProps) {
  return (
    <div className={`screen ${isActive ? 'active' : ''}`} id="home">
      <h1>🎮 Games Khane</h1>
      <p>Pick a game &amp; pass the phone</p>

      <div className="menu">
        <button onClick={() => onOpenGame('mostLikely')}>😂 Who’s Most Likely To</button>
        <button onClick={() => onOpenGame('truthDare')}>🃏 Truth or Dare</button>
        <button onClick={() => onOpenGame('wouldRather')}>🤔 Would You Rather</button>
        <button onClick={() => onOpenGame('challenge')}>🎲 Random Challenge</button>
        <button onClick={() => onOpenGame('conversation')}>🧠 Conversation Starter</button>
        <button onClick={() => onOpenGame('tonight')}>🎯 What Are We Doing Tonight?</button>
        <button onClick={() => onOpenGame('wheel')}>☸️ Spin the wheel?</button>
      </div>
    </div>
  );
}
