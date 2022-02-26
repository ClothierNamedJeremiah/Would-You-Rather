import React from 'react';
import { useQuery } from 'react-query';

import LeaderboardEntry from './LeaderboardEntry';

export default function Leaderboard() {
  const query = useQuery('users');

  const users = query.data || {};

  const leaderboardData = Object.keys(users).map((user) => ({
    user,
    avatarURL: users[user].avatarURL,
    questions_asked: users[user].questions.length,
    questions_answered: Object.keys(users[user].answers).length,
  }));

  // Sort leaderboard data descending
  leaderboardData.sort((user1, user2) => {
    const count1 = user1.questions_answered + user1.questions_asked;
    const count2 = user2.questions_answered + user2.questions_asked;
    return count2 - count1;
  });

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>User</th>
            <th>Questions Asked</th>
            <th>Questions Answered</th>
          </tr>
        </thead>

        <tbody>
          {leaderboardData.map((user, index) => (
            <LeaderboardEntry
              key={user.user}
              rank={index}
              name={user.user}
              avatarURL={user.avatarURL}
              questions_asked={user.questions_asked}
              questions_answered={user.questions_answered}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
