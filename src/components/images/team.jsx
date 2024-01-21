import React from 'react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  return (
    <div>
      <h1>AIMZ Tech Team</h1>
      <ul>
        <li>
          <Link to="/team/mr-ali-ahmad">Mr. Ali Ahmad</Link>
        </li>
        <li>
          <Link to="/team/rao-fahad-ali">Rao Fahad Ali</Link>
        </li>
        <li>
          <Link to="/team/zakia-maharvi">Zakia Maharvi</Link>
        </li>
      </ul>
    </div>
  );
};

export default TeamPage;
