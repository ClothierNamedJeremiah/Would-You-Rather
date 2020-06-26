import React from 'react'

const LeaderboardEntry = (props) => {
  const { rank, name, avatarURL, questions_asked, questions_answered } = props;
  return (
    <tr>
      <td className='position'>
        {rank+1}
      </td>
      <td className='user'>
        <span><img className='avatar' src={avatarURL} alt={`Avatar for ${name}`}/></span>
        <span id='name'>{name}</span>
      </td>
      <td>
        {questions_asked}
      </td>
      <td>
        {questions_answered}
      </td>
    </tr>
  )
}


export default LeaderboardEntry;