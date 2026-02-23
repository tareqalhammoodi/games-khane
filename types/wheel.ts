import type { RefObject } from 'react';

export interface WheelScreenProps {
  isActive: boolean;
  onBack: () => void;
}

export interface WheelInputSectionProps {
  inputValue: string;
  tooltipVisible: boolean;
  infoIconRef: RefObject<HTMLSpanElement | null>;
  tooltipRef: RefObject<HTMLSpanElement | null>;
  onInputChange: (value: string) => void;
  onToggleTooltip: () => void;
  onShowTooltip: () => void;
  onHideTooltip: () => void;
  onStart: () => void;
  isVisible: boolean;
}

export interface WheelCanvasSectionProps {
  canvasRef: RefObject<HTMLCanvasElement | null>;
  isVisible: boolean;
  isSpinning: boolean;
  onSpin: () => void;
  onReset: () => void;
}

export interface WheelResultModalProps {
  isOpen: boolean;
  winner: string;
  onClose: () => void;
  onSpinAgain: () => void;
}
