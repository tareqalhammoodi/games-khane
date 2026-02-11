// Game configuration map
const gameConfig = {
  mostLikely: { 
    title: '😂 Most Likely To',
    data: () => mostLikely,
    buttonText: 'Next'
  },
  truthDare: { 
    title: '🃏 Truth or Dare',
    data: () => truthDare,
    buttonText: 'Another'
  },
  wouldRather: { 
    title: '🤔 Would You Rather',
    data: () => wouldRather,
    buttonText: 'Next'
  },
  challenge: { 
    title: '🎲 Challenge',
    data: () => challenges,
    buttonText: 'New Challenge'
  },
  conversation: { 
    title: '🧠 Conversation Starter',
    data: () => conversationStarters,
    buttonText: 'Next'
  },
  tonight: { 
    title: '🎯 What Are We Doing Tonight?',
    data: () => tonightIdeas,
    buttonText: 'Decide'
  }
};
