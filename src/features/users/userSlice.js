import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userId: 'testUser1',
    userName: 'testUser number 1',
    email: 'testUser@test.abc',
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        login(state, action){
            const {userId, userName, email} = action.payload
            state.userId = userId
            state.userName = userName
            state.email = email
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false

            state.userId = null
            state.userName = null
            state.email = null
        }
    }
})

export default userSlice.reducer
export const userActions =  userSlice.actions