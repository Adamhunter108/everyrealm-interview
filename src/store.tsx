import { create } from 'zustand'

interface User {
  id: number
  name: string
  email: string
}

interface UsersState {
  users: User[]
  fetchUsers: () => Promise<void>
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!response) {
      throw new Error('Failed to fetch users data')
      }

      const data = await response.json()
      set({ users: data })
    } catch (error) {
        console.error(error)
    }
  },
}))
