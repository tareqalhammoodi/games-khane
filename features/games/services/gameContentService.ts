import { gameConfig } from '@/lib/gameConfig';
import type { GameDefinition, GameId, GamePromptApiResponse } from '@/types/game';

export function getGameDefinition(gameId: GameId): GameDefinition {
  return gameConfig[gameId];
}

const REQUEST_TIMEOUT_MS = 10000;

function isPromptApiResponse(payload: unknown): payload is GamePromptApiResponse {
  if (!payload || typeof payload !== 'object') {
    return false;
  }

  const record = (payload as { data?: unknown }).data;
  if (!record || typeof record !== 'object') {
    return false;
  }

  const content = (record as { content?: unknown }).content;
  return typeof content === 'string' && content.trim().length > 0;
}

async function fetchWithTimeout(input: string, timeoutMs = REQUEST_TIMEOUT_MS): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(input, {
      method: 'GET',
      cache: 'no-store',
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }
}

export async function getRandomGameItem(gameId: GameId): Promise<string> {
  const { endpoint } = getGameDefinition(gameId);
  const response = await fetchWithTimeout(endpoint);

  if (!response.ok) {
    throw new Error(`Failed to fetch game prompt (${response.status})`);
  }

  const payload = (await response.json()) as unknown;
  if (!isPromptApiResponse(payload)) {
    throw new Error('Invalid game prompt response');
  }

  return payload.data.content;
}
