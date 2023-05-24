import { useEffect } from 'react'
import Link from 'next/link'
import { useUsersStore } from '../store'

export default function Data() {
  const { users, fetchUsers } = useUsersStore()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="mt-10 mb-5 text-3xl text-center">Data</h1>

      <Link href="/">
        <div
          className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          Back
        </div>
      </Link>

      <div className="mt-10 text-center">
        {users.map((user) => (
          <div key={user.id} className="mb-4">
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>

    </main>
  )
}
  