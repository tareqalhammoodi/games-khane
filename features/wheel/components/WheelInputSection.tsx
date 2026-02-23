import type { WheelInputSectionProps } from '@/types/wheel';

export default function WheelInputSection({
  inputValue,
  tooltipVisible,
  infoIconRef,
  tooltipRef,
  onInputChange,
  onToggleTooltip,
  onShowTooltip,
  onHideTooltip,
  onStart,
  isVisible
}: WheelInputSectionProps) {
  return (
    <div id="playerInputSection" style={{ display: isVisible ? 'block' : 'none' }}>
      <p style={{ marginBottom: 15, color: '#aaa' }}>
        Enter options (one per line)
        <span
          ref={infoIconRef}
          className="info-icon"
          onClick={onToggleTooltip}
          onMouseEnter={onShowTooltip}
          onMouseLeave={onHideTooltip}
          title="Click for more info"
        >
          ℹ️
        </span>
        <span ref={tooltipRef} className={`tooltip ${tooltipVisible ? 'show' : ''}`} id="optionsTooltip">
          Your options can be anything: players, food, activities, or any choice you want to make!
        </span>
      </p>

      <textarea
        id="playerNamesInput"
        placeholder={'Option 1\nOption 2\nOption 3\n...'}
        value={inputValue}
        onChange={(event) => onInputChange(event.target.value)}
      />
      <button onClick={onStart}>Start</button>
    </div>
  );
}
