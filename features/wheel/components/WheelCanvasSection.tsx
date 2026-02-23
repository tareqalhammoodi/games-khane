import type { WheelCanvasSectionProps } from '@/types/wheel';

export default function WheelCanvasSection({
  canvasRef,
  isVisible,
  isSpinning,
  onSpin,
  onReset
}: WheelCanvasSectionProps) {
  return (
    <div id="wheelSection" style={{ display: isVisible ? 'block' : 'none' }}>
      <div className="wheel-container">
        <div className="wheel-pointer">▼</div>
        <canvas id="wheelCanvas" width={300} height={300} ref={canvasRef} />
      </div>
      <button onClick={onSpin} id="spinButton" disabled={isSpinning}>
        SPIN!
      </button>
      <button onClick={onReset} className="reset-btn">
        ↻ Reset Options
      </button>
    </div>
  );
}
