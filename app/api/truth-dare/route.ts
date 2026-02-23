import { proxyGameApiRequest } from '@/lib/gameApiProxy';

export async function GET() {
  return proxyGameApiRequest('/api/truth-dare');
}
