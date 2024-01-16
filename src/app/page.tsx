'use client';

import { InputChips } from '@/components/input-chips';
import { users } from '@/data';
import { User } from '@/types';
import { useCallback, useEffect, useState } from 'react';

const Homepage = () => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const filteredUsers = users
    .filter((user) => {
      return !selectedUsers.find((selectedUser) => selectedUser.id === user.id);
    })
    .map((user) => ({ ...user }));

  const addToSelectedUsers = (user: User) => {
    setSelectedUsers((users) => [...users, user]);
  };

  const removeFromSelectedUsers = (userId: number) => {
    setSelectedUsers((users) => users.filter((user) => user.id !== userId));
  };

  const removeOrHighlightLastUser = useCallback(() => {
    const copySelectedUsers = [...selectedUsers];

    const selectedUsersCount = copySelectedUsers.length;

    if (selectedUsersCount === 0) {
      return;
    }

    if (!copySelectedUsers[selectedUsersCount - 1].highlighted) {
      copySelectedUsers[selectedUsersCount - 1].highlighted = true;
    } else {
      copySelectedUsers.pop();
    }

    setSelectedUsers(copySelectedUsers);
  }, [selectedUsers]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Backspace') {
        removeOrHighlightLastUser();
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [removeOrHighlightLastUser]);

  return (
    <div>
      <h1 className='text-center text-3xl text-neutral-700 mt-10'>
        Pick Users
      </h1>
      <InputChips
        onRemove={removeFromSelectedUsers}
        onAdd={addToSelectedUsers}
        users={filteredUsers}
        selectedUsers={selectedUsers}
      />
    </div>
  );
};

export default Homepage;
