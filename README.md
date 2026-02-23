# 🎮 Games Khane

**GameKhane** is a simple, web app for friends to hang out, laugh, and kill indecision.

It includes classic party games like **Truth or Dare**, **Would You Rather**, **Most Likely To**, **Challenges**, **Conversation Starters**, and **What Are We Doing Tonight?** — all in one phone-friendly app that you can try [here](https://games-khane.vercel.app/).

I built this for myself and my friends, but you can easily customize the questions and challenges to match you and your group.

## Stack

- Next.js (latest stable via `next@latest`)
- App Router
- TypeScript
- React (vanilla patterns: state/effects/hooks)
- Global CSS (migrated from original styles)

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ui/
    InfoDialog.tsx
features/
  games/
    components/
      GameApp.tsx
      HomeScreen.tsx
      GameScreen.tsx
    constants/
      howToPlayDialogContent.ts
    hooks/
      useGameFlow.ts
    services/
      gameContentService.ts
  wheel/
    components/
      WheelScreen.tsx
      WheelInputSection.tsx
      WheelCanvasSection.tsx
      WheelResultModal.tsx
    hooks/
      useWheel.ts
    lib/
      wheelMath.ts
      wheelCanvas.ts
hooks/
  useClickOutside.ts
  useDialog.ts
  useEscapeKey.ts
  useTooltip.ts
data/
  mostLikely.ts
  truthDare.ts
  wouldRather.ts
  challenges.ts
  conversation.ts
  tonight.ts
lib/
  gameConfig.ts
types/
  dialog.ts
  game.ts
  wheel.ts
```

## Migration Notes

- Original screen switching and DOM updates were converted to React state transitions.
- Wheel canvas logic was migrated to a client component using refs + effects.
- Tooltip and dialog behavior are handled with reusable hooks/components (`useTooltip`, `useDialog`, `InfoDialog`).
- Styling values were preserved to maintain pixel consistency with the previous version.
- SEO metadata is defined in `app/layout.tsx`.
- Wheel UI is lazy-loaded via dynamic import in `features/games/components/GameApp.tsx`.

---

Have fun & pass the phone 🎉
