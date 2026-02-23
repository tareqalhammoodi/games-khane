import { useCallback, useState } from 'react';
import { useEscapeKey } from '@/hooks/useEscapeKey';

interface UseDialogOptions {
  closeOnEscape?: boolean;
}

interface UseDialogResult {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useDialog(options: UseDialogOptions = {}): UseDialogResult {
  const { closeOnEscape = true } = options;
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);

  useEscapeKey(close, { enabled: closeOnEscape && isOpen });

  return {
    isOpen,
    open,
    close,
    toggle
  };
}
