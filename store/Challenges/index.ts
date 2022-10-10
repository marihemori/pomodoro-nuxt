import allChallenges from 'assets/challenges/data';

import { State } from './types';

export const state = (): State=> ({
    level: 0,
    xp: {
        current: 0,
        start: 0,
        end: 50,
    },
    completedChallenges: 0,
    currentChallengeIndex: null,
    isLevelUpModalOpen: false,
    allChallenges,
})