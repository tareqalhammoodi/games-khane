import GameApp from '@/features/games/components/GameApp';

export default function HomePage() {
  return (
    <>
      <main>
        <GameApp />
      </main>
      <footer className="footer">
        <p>
          Powered by{' '}
          <a href="https://github.com/tareqalhammoodi" target="_blank" rel="noopener noreferrer">
            <strong>Tareq</strong>
          </a>
        </p>
      </footer>
    </>
  );
}
