import { User } from '@/types';
import { ElementRef, useEffect, useRef, useState } from 'react';
import { Chip } from './chip';
import { UserList } from './user-list';

interface InputChipsProps {
  users: User[];
  selectedUsers: User[];
  onAdd: (user: User) => void;
  onRemove: (userId: number) => void;
}

export const InputChips = ({
  users,
  selectedUsers,
  onAdd,
  onRemove,
}: InputChipsProps) => {
  const [showUsers, setShowUsers] = useState(false);
  const [query, setQuery] = useState('');
  const inputContainerRef = useRef<ElementRef<'div'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(query.toLowerCase());
  });

  const onInputFocus = () => {
    setShowUsers(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target as Node)
      ) {
        setShowUsers(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [inputContainerRef]);

  const removeSelectedUser = (id: number) => {
    onRemove(id);
    inputRef.current?.focus();
  };

  const addSelectedUser = (user: User) => {
    onAdd(user);
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <div className='max-w-3xl border-b-2 pb-1 border-sky-700 mt-20 mx-auto'>
      <div className='flex flex-wrap'>
        {selectedUsers.map((selectedUser) => {
          return (
            <Chip
              key={selectedUser.id}
              name={selectedUser.name}
              id={selectedUser.id}
              highlighted={selectedUser.highlighted}
              onRemove={(id) => removeSelectedUser(id)}
            />
          );
        })}
        <div ref={inputContainerRef} className=' relative inline-block'>
          <input
            placeholder='Add new user...'
            ref={inputRef}
            onFocus={onInputFocus}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className='h-full py-1 focus:outline-none'
            type='text'
          />
          {showUsers && (
            <UserList
              users={filteredUsers}
              onAdd={(user) => addSelectedUser(user)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
