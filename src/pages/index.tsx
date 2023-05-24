import { useEffect } from 'react'
import { useUsersStore } from '../store'
import Link from 'next/link'
import { User } from '../../types'

interface HomeProps {
  initialUsers: User[]
}

export default function Home({ initialUsers }: HomeProps) {
  const { setUsers } = useUsersStore()

  useEffect(() => {
    setUsers(initialUsers)
  }, [setUsers, initialUsers])

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="mt-10 mb-5 text-3xl text-center">Hello, World!</h1>
      <Link href="/data">
        <div
          className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Data
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </Link>
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      initialUsers: data,
    },
  }
}
