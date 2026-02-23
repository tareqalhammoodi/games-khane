import { challenges } from '@/data/challenges';
import { conversationStarters } from '@/data/conversation';
import { mostLikely } from '@/data/mostLikely';
import { tonightIdeas } from '@/data/tonight';
import { truthDare } from '@/data/truthDare';
import { wouldRather } from '@/data/wouldRather';
import type { GameDefinition, GameId } from '@/types/game';

export const gameConfig: Record<GameId, GameDefinition> = {
  mostLikely: {
    title: '😂 Most Likely To',
    data: mostLikely,
    buttonText: 'Next'
  },
  truthDare: {
    title: '🃏 Truth or Dare',
    data: truthDare,
    buttonText: 'Another'
  },
  wouldRather: {
    title: '🤔 Would You Rather',
    data: wouldRather,
    buttonText: 'Next'
  },
  challenge: {
    title: '🎲 Challenge',
    data: challenges,
    buttonText: 'New Challenge'
  },
  conversation: {
    title: '🧠 Conversation Starter',
    data: conversationStarters,
    buttonText: 'Next'
  },
  tonight: {
    title: '🎯 What Are We Doing Tonight?',
    data: tonightIdeas,
    buttonText: 'Decide'
  }
};
