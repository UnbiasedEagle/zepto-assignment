import { User } from '@/types';

interface UserListProps {
  users: User[];
  onAdd: (user: User) => void;
}

export const UserList = ({ users, onAdd }: UserListProps) => {
  return (
    <ul className='absolute w-96 mt-2 border shadow p-2 rounded max-h-40 overflow-y-auto'>
      {users.length === 0 && <li className='w-full p-1'>No Users Found</li>}
      {users.map((user) => {
        return (
          <li
            onClick={(event) => {
              event.stopPropagation();
              onAdd(user);
            }}
            className='flex hover:bg-gray-100 hover:rounded-md pl-2 space-x-4 items-center border-b last:border-none cursor-pointer p-1'
            key={user.id}
          >
            <div>
              <span className='h-8 text-neutral-700 w-8 flex items-center justify-center bg-gray-200 shadow rounded-full'>
                {user.name[0].toUpperCase()}
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='font-medium text-neutral-600'>{user.name}</span>
              <span className='text-neutral-300'>{user.email}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
