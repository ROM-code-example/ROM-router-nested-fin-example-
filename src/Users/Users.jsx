import { useState } from 'react';
import { Outlet, useOutletContext, Link } from 'react-router-dom';

import "./Users.css"
const Users = () => {
    const [users, setUsers] = useState([
        {
            id:1,
            name:"John",
            type:"admin"
        },
        {
            id:2,
            name:"Peter",
            type:"user"
        }
    ]);
    return (
        <div>
            <h2>This is Users page</h2>
            <Outlet context={[users]} />
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td><Link to= {"/users/"+user.id}>{user.name}</Link></td>
                            <td>{user.type}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
         
    )

}

export default Users