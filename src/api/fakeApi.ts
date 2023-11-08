export type PlayerType = {
  id: number;
  username: string;
  rank: string;
  rating: number;
  kd: number;
  totalMatches: {
    played: number;
    wins: number;
    losses: number;
    draws: number;
  };
  last5Matches: {
    id: number;
    result: string;
    roundsWon: number;
    roundsLost: number;
    kills: number;
    assists: number;
    deaths: number;
    agent: string;
  }[];
  teammates: {
    id: number;
    username: string;
    playTime: number;
    playedMatches: number;
    win: number;
    draw: number;
    lose: number;
  }[];
};

export const fakeUsers: PlayerType[] = [
  {
    id: 1,
    username: "wicchey",
    rank: "RADIANT",
    rating: 999,
    kd: 1.3,
    totalMatches: {
      played: 99,
      wins: 0,
      losses: 99,
      draws: 0,
    },
    last5Matches: [
      {
        id: 1,
        result: "win",
        roundsWon: 13,
        roundsLost: 6,
        kills: 30,
        assists: 0,
        deaths: 10,
        agent: "Reyna",
      },
      {
        id: 2,
        result: "win",
        roundsWon: 13,
        roundsLost: 10,
        kills: 28,
        assists: 3,
        deaths: 12,
        agent: "Raze",
      },
      {
        id: 3,
        result: "lose",
        roundsWon: 6,
        roundsLost: 13,
        kills: 26,
        assists: 6,
        deaths: 14,
        agent: "Jett",
      },
      {
        id: 4,
        result: "win",
        roundsWon: 13,
        roundsLost: 8,
        kills: 31,
        assists: 8,
        deaths: 18,
        agent: "Reyna",
      },
      {
        id: 5,
        result: "win",
        roundsWon: 13,
        roundsLost: 9,
        kills: 36,
        assists: 10,
        deaths: 17,
        agent: "Reyna",
      },
    ],
    teammates: [
      {
        id: 1,
        username: "The Crescent",
        playTime: 999,
        playedMatches: 1200,
        win: 1111,
        draw: 0,
        lose: 89,
      },
      {
        id: 2,
        username: "iva",
        playTime: 998,
        playedMatches: 1199,
        win: 1110,
        draw: 0,
        lose: 89,
      },
      {
        id: 3,
        username: "karakuyruk",
        playTime: 998,
        playedMatches: 1199,
        win: 1110,
        draw: 0,
        lose: 89,
      },
    ],
  },
  {
    id: 2,
    username: "The Crescent",
    rank: "RADIANT",
    rating: 999,
    kd: 1.69,
    totalMatches: {
      played: 99,
      wins: 99,
      losses: 0,
      draws: 0,
    },
    last5Matches: [
      {
        id: 1,
        result: "win",
        roundsWon: 13,
        roundsLost: 6,
        kills: 31,
        assists: 0,
        deaths: 10,
        agent: "Sage",
      },
      {
        id: 2,
        result: "win",
        roundsWon: 13,
        roundsLost: 10,
        kills: 38,
        assists: 3,
        deaths: 12,
        agent: "Sage",
      },
      {
        id: 3,
        result: "lose",
        roundsWon: 6,
        roundsLost: 13,
        kills: 29,
        assists: 6,
        deaths: 14,
        agent: "Sage",
      },
      {
        id: 4,
        result: "win",
        roundsWon: 13,
        roundsLost: 8,
        kills: 34,
        assists: 0,
        deaths: 0,
        agent: "Sage",
      },
      {
        id: 5,
        result: "win",
        roundsWon: 13,
        roundsLost: 9,
        kills: 30,
        assists: 10,
        deaths: 17,
        agent: "Sage",
      },
    ],
    teammates: [
      {
        id: 1,
        username: "wicchey",
        playTime: 999,
        playedMatches: 1200,
        win: 1111,
        draw: 0,
        lose: 89,
      },
      {
        id: 2,
        username: "iva",
        playTime: 999,
        playedMatches: 1200,
        win: 1111,
        draw: 0,
        lose: 89,
      },
    ],
  },
  {
    id: 3,
    username: "iva",
    rank: "RADIANT",
    rating: 999,
    kd: 9.99,
    totalMatches: {
      played: 99,
      wins: 99,
      losses: 0,
      draws: 0,
    },
    last5Matches: [
      {
        id: 1,
        result: "win",
        roundsWon: 13,
        roundsLost: 6,
        kills: 31,
        assists: 0,
        deaths: 10,
        agent: "Jett",
      },
      {
        id: 2,
        result: "win",
        roundsWon: 13,
        roundsLost: 10,
        kills: 38,
        assists: 3,
        deaths: 12,
        agent: "Raze",
      },
      {
        id: 3,
        result: "lose",
        roundsWon: 6,
        roundsLost: 13,
        kills: 29,
        assists: 6,
        deaths: 14,
        agent: "Jett",
      },
      {
        id: 4,
        result: "win",
        roundsWon: 13,
        roundsLost: 8,
        kills: 34,
        assists: 0,
        deaths: 0,
        agent: "Reyna",
      },
      {
        id: 5,
        result: "win",
        roundsWon: 13,
        roundsLost: 9,
        kills: 30,
        assists: 10,
        deaths: 17,
        agent: "Jett",
      },
    ],
    teammates: [
      {
        id: 1,
        username: "The Crescent",
        playTime: 999,
        playedMatches: 1200,
        win: 1111,
        draw: 0,
        lose: 89,
      },
      {
        id: 2,
        username: "wicchey",
        playTime: 999,
        playedMatches: 1200,
        win: 1111,
        draw: 0,
        lose: 89,
      },
    ],
  },
  {
    id: 4,
    username: "karakuyruk",
    rank: "radiant",
    rating: 999,
    kd: 1.31,
    totalMatches: {
      played: 99,
      wins: 0,
      losses: 99,
      draws: 0,
    },
    last5Matches: [
      {
        id: 1,
        result: "win",
        roundsWon: 13,
        roundsLost: 6,
        kills: 31,
        assists: 0,
        deaths: 10,
        agent: "Jett",
      },
      {
        id: 2,
        result: "win",
        roundsWon: 13,
        roundsLost: 10,
        kills: 38,
        assists: 3,
        deaths: 12,
        agent: "Raze",
      },
      {
        id: 3,
        result: "lose",
        roundsWon: 6,
        roundsLost: 13,
        kills: 29,
        assists: 6,
        deaths: 14,
        agent: "Jett",
      },
      {
        id: 4,
        result: "win",
        roundsWon: 13,
        roundsLost: 8,
        kills: 34,
        assists: 0,
        deaths: 0,
        agent: "Reyna",
      },
      {
        id: 5,
        result: "win",
        roundsWon: 13,
        roundsLost: 9,
        kills: 30,
        assists: 10,
        deaths: 17,
        agent: "Jett",
      },
    ],
    teammates: [
      {
        id: 1,
        username: "The Crescent",
        playTime: 999,
        playedMatches: 1200,
        win: 1111,
        draw: 0,
        lose: 89,
      },
      {
        id: 2,
        username: "wicchey",
        playTime: 999,
        playedMatches: 1200,
        win: 1111,
        draw: 0,
        lose: 89,
      },
      {
        id: 3,
        username: "iva",
        playTime: 999,
        playedMatches: 1200,
        win: 1111,
        draw: 0,
        lose: 89,
      },
    ],
  },
];

export const team1 = [
  { id: 1, agent: "Omen", kills: 10, assists: 10, deaths: 10, acs: 333 },
  {
    id: 2,
    username: "iva",
    agent: "Killjoy",
    kills: 10,
    assists: 10,
    deaths: 10,
    acs: 333,
  },
  {
    id: 3,
    username: "karakuyruk",
    agent: "Sova",
    kills: 10,
    assists: 10,
    deaths: 10,
    acs: 333,
  },
  {
    id: 4,
    username: "The Crescent",
    agent: "Sage",
    kills: 10,
    assists: 10,
    deaths: 10,
    acs: 333,
  },
  {
    id: 5,
    username: "tarik",
    agent: "Jett",
    kills: 10,
    assists: 10,
    deaths: 10,
    acs: 333,
  },
];
export const team2 = [
  { id: 6, agent: "Gekko", kills: 10, assists: 10, deaths: 10, acs: 333 },
  { id: 7, agent: "Gekko", kills: 10, assists: 10, deaths: 10, acs: 333 },
  { id: 8, agent: "Gekko", kills: 10, assists: 10, deaths: 10, acs: 333 },
  { id: 9, agent: "Gekko", kills: 10, assists: 10, deaths: 10, acs: 333 },
  { id: 10, agent: "Gekko", kills: 10, assists: 10, deaths: 10, acs: 333 },
];

export type TeamType = typeof team1;
