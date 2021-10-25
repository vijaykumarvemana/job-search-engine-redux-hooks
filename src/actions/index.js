export const ADD_COMPANY_TO_FAVORITE = 'ADD_COMPANY_TO_FAVORITE'
export const REMOVE_COMPANY_FROM_FAVORITE = 'REMOVE_COMPANY_FROM_FAVORITE'
export const GET_JOBS = 'GET_JOBS'
export const GET_JOBS_LOADING = 'GET_JOBS_LOADING'
export const GET_JOBS_ERROR = 'GET_JOBS_ERROR'


export const addToFavoriteAction = (company) => ({
    type: ADD_COMPANY_TO_FAVORITE,
    payload: company,
  })

export const removeFavoriteAction = (index) => ({
    type: REMOVE_COMPANY_FROM_FAVORITE,
    payload: index,
  })


  export const getJobsAction = () => {
    return async (dispatch, getState) => {
      console.log('...fetching the Jobs', getState())
    //   dispatch({
    //     type: GET_JOBS_LOADING,
    //     payload: true,
    //   })
      try {
        let resp = await fetch('https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10')
        if (resp.ok) {
          let jobs = await resp.json()
          console.log(jobs)
          
          dispatch({
            type: GET_JOBS,
            payload: jobs.data,
          })
        //   dispatch({
        //     type: GET_JOBS_ERROR,
        //     payload: false,
        //   })
        //   dispatch({
        //     type: GET_JOBS_LOADING,
        //     payload: false,
        //   })
        } else {
          console.log('error')
        //   dispatch({
        //     type: GET_JOBS_ERROR,
        //     payload: true,
        //   })
        //   dispatch({
        //     type: GET_JOBS_LOADING,
        //     payload: false,
        //   })
         }
      } catch (error) {
        console.log(error)
        // dispatch({
        //   type: GET_JOBS_ERROR,
        //   payload: true,
        // })
        // dispatch({
        //   type: GET_JOBS_LOADING,
        //   payload: false,
        // })
      }
    }
  }