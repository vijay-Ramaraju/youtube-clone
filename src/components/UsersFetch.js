import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './utils/RTK/userSlice'

const UsersFetch = () => {
    const usersData = useSelector((store) => store.user.items)
    console.log(usersData)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    },[])
  return (
    <div>
      UsersFetch
      <div className="border border-gray-300 w-fit rounded-xl">
        <table className="text-left rounded-lg text-blue-100">
          <thead className=" uppercase border-b border-white ">
            <tr className="bg-blue-500  gap-2 p-1 text-xl hover:bg-blue-400 rounded-t-lg rounded-tr-lg">
              <th className="px-6 py-3">id</th>
              <th className="px-6 py-3">username</th>
              <th className="px-6 py-3">name</th>
              <th className="px-6 py-3">email</th>
              <th className="px-6 py-3">phone</th>
              <th className="px-6 py-3">website</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr className="border-b font-semibold text-lg border-blue-100 bg-blue-400 hover:bg-blue-300">
                <td className="px-6 py-3">{user.id}</td>
                <td className="px-6 py-3">{user.username}</td>
                <td className="px-6 py-3">{user.name}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">{user.phone}</td>
                <td className="px-6 py-3">{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersFetch
