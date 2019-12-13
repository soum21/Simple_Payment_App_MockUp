const initialState = {
  userData: [],
  authError: null,
  date: null,
  dayOfWeek: null,
  month: null,
  time: null,
  year: null
}

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOPICS':
      return {
        ...state,
      }
    case 'GET_USER':
      return ({
        ...state,
        userData: action.payload,
        authError: null
      })
    case 'AUTH_FAIL':
      return ({
        ...state,
        userData: [],
        authError: action.payload
      })
    case 'CURRENT_DATE':
      const { date, dayOfWeek, month, time, year } = action.payload;
      return ({
        ...state,
        date,
        dayOfWeek,
        month,
        time,
        year
      })

    default:
      return state;
  }
}

export default testReducer;