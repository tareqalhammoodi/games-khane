export interface DialogContent {
  kicker: string;
  title: string;
  intro: string;
  actionLabel: string;
  steps: readonly string[];
}

export interface InfoDialogProps extends DialogContent {
  isOpen: boolean;
  onClose: () => void;
  titleId?: string;
}
