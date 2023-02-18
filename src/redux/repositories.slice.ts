import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRepositories, getUsers } from '../api'
import { RootState } from '../state/store'

const fetchAllUsers = createAsyncThunk<any, void, {state: RootState}>(
  'users/',
  async () => {
    const response = await getUsers()
    return response
  }
)

const fetchRepos = createAsyncThunk<any, { user: string }, {state: RootState}>(
  'users/repos',
  async({ user }) => {
    const reponse = await getRepositories(user)
    return reponse
  }
)

interface ReposState {
  users: [],
  repositories: {
    [key: string]: any
  }
  search: string
}

const initialState = {
  users: [],
  repositories: {},
  search: ''
} as ReposState

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.repositories = []
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => ({
      ...state,
      ...action.payload
    }))
    builder.addCase(fetchRepos.fulfilled, (state, action) => ({
      ...state,
      repositories: {...state.repositories, ...action.payload}
    }))
  },
})

const { actions } = reposSlice
export const reposAction = { ...actions, fetchAllUsers, fetchRepos }
export const reposSelector = ({repos}: RootState): ReposState => repos
