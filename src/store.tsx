import { create } from 'zustand'
import { User } from '../types'

interface UsersState {
  users: User[]
  setUsers: (users: User[]) => void
}

export const useUsersStore = create<UsersState>((set) => ({
  users: [],
  setUsers: (users: User[]) => set({ users }),
}))