import type { WheelResultModalProps } from '@/types/wheel';

export default function WheelResultModal({
  isOpen,
  winner,
  onClose,
  onSpinAgain
}: WheelResultModalProps) {
  return (
    <div id="resultModal" className={`result-modal ${isOpen ? 'show' : ''}`}>
      <div className="result-content">
        <div className="result-emoji">🎉</div>
        <h3>The choice has fallen on</h3>
        <div className="winner-name" id="winnerName">
          {winner}
        </div>
        <button onClick={onClose}>Got it!</button>
        <button onClick={onSpinAgain} className="secondary-btn">
          Spin Again
        </button>
      </div>
    </div>
  );
}
