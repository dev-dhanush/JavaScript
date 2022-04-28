import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
	like: false,
	dislike: false,
	likeCount: [],
	dislikeCount: [],
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		toggleLike: (state) => {
			state.like = !state. like
			state.dislike = false
		},
		toggleUnlike: (state) => {
			state.dislike = !state.dislike
			state.like = false
		},
		addLike: (state, username) => {
			const nameOfUser = username.payload
			state.like && !state.dislike ? state.likeCount.push(nameOfUser) : (state.likeCount = state.likeCount.filter((user) => user !== nameOfUser))
		},
		addUnlike: (state, username) => {
			const nameOfUser = username.payload
			state.dislike && !state.like ? state.dislikeCount.push(nameOfUser) : (state.dislikeCount = state.dislikeCount.filter((user) => user !== nameOfUser))
		},
	},
})

export const { toggleLike, toggleUnlike, addLike, addUnlike } = counterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
// 	const currentValue = selectCount(getState())
// 	if (currentValue % 2 === 1) {
// 		dispatch(incrementByAmount(amount))
// 	}
// }

export default counterSlice.reducer
