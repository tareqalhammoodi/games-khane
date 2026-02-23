import { useEffect, type RefObject } from 'react';

interface UseClickOutsideOptions {
  enabled?: boolean;
}

export function useClickOutside(
  refs: Array<RefObject<HTMLElement | null>>,
  onOutsideClick: () => void,
  options: UseClickOutsideOptions = {}
) {
  const { enabled = true } = options;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInside = refs.some((ref) => ref.current?.contains(target));

      if (!clickedInside) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [enabled, onOutsideClick, refs]);
}
