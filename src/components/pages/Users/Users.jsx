/* eslint-disable no-console */
import React from 'react';
import User from '../../User';

const usersList = [{ name: 'Yan' }, { name: 'Anya' }, { name: 'Vasya' }];

function Users() {
  return (
    <div>
      {usersList.map((item) => (
        <User key={item.name} name={item.name} />
      ))}
    </div>
  );
}

export default Users;
