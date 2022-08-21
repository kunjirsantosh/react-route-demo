import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <>
    <Link to='/users/1'> User 1 </Link>
    <Link to='/users/2'> User 2 </Link>
    <Link to='/users/3'> User 3</Link>
    <Link to='/users/admin'> Admin </Link>
        <div>Users 1</div>
        <div>Users 2</div>
        <div>Users 3</div>
    <div>
        <button onClick={()=> setSearchParams({filter: 'active'})}> Active Users</button>
        <button onClick={()=> setSearchParams({})}> Reset Filter</button>
    </div>
    {
        showActiveUsers ? ( <h2>Avtice user </h2> ): (<h2>Showing all users </h2>)
    }
        <Outlet/>
    </>
  )
}
