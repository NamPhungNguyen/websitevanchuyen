import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: null,
}

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {

    },
  },
})

export const { updateUser } = userSlide.actions

export default userSlide.reducer