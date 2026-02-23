import { useCallback, useRef, useState } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

export function useTooltip() {
  const infoIconRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const showTooltip = useCallback(() => {
    setIsTooltipVisible(true);
  }, []);

  const hideTooltip = useCallback(() => {
    setIsTooltipVisible(false);
  }, []);

  const toggleTooltip = useCallback(() => {
    setIsTooltipVisible((previous) => !previous);
  }, []);

  useClickOutside([infoIconRef, tooltipRef], hideTooltip, {
    enabled: isTooltipVisible
  });

  return {
    infoIconRef,
    tooltipRef,
    isTooltipVisible,
    showTooltip,
    hideTooltip,
    toggleTooltip
  };
}
