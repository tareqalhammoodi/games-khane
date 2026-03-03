import GameRouteScreen from '@/features/games/components/GameRouteScreen';

export default function TonightPage() {
  return (
    <main>
      <div className="app">
        <GameRouteScreen gameId="tonight" />
      </div>
    </main>
  );
}
