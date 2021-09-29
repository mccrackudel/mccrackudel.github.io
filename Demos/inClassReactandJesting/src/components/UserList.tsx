import EditableDndList, { Task } from "editable-dnd-list";


export function UserList({users, setUsers}: {users: Task[], setUsers: (t: Task[])=>void}): JSX.Element {
  

  function handleChange(newUsers: Task[]): void {
    setUsers(newUsers);
  }

  return <EditableDndList items={users} onChange={handleChange} />;
}