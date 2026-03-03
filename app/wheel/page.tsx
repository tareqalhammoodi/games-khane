'use client';

import { useRouter } from 'next/navigation';
import WheelScreen from '@/features/wheel/components/WheelScreen';

export default function WheelPage() {
  const router = useRouter();

  return (
    <main>
      <div className="app">
        <WheelScreen isActive onBack={() => router.push('/')} />
      </div>
    </main>
  );
}
