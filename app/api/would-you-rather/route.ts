import { proxyGameApiRequest } from '@/lib/gameApiProxy';

export async function GET() {
  return proxyGameApiRequest('/api/would-you-rather');
}
