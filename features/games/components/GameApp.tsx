"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import HomeScreen from "@/features/games/components/HomeScreen";
import { GAME_ROUTES } from "@/features/games/constants/gameRoutes";
import type { PlayableId } from "@/types/game";

export default function GameApp() {
  const router = useRouter();

  const openGame = useCallback(
    (id: PlayableId) => {
      const route = GAME_ROUTES[id];
      router.push(route);
    },
    [router],
  );

  return (
    <div className="app">
      <HomeScreen isActive onOpenGame={openGame} />
    </div>
  );
}
