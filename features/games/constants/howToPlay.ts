import { DialogContent } from "@/types/dialog";

export const HOW_TO_PLAY: DialogContent = {
  kicker: 'Quick Guide',
  title: 'How to Play',
  intro: 'This is just one way to play — feel free to do it your own way!',
  actionLabel: "Let's Play",
  steps: [
    'Open the game on two phones.',
    'On Phone 1, open the Spinner and add everyone’s names.',
    'Spin the wheel — whoever it lands on is up!',
    'On Phone 2, open the Questions and read their challenge.',
    'After their turn, spin again and keep the fun going!'
  ]
} as const;
