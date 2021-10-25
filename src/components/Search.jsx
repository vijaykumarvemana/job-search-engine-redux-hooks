import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form,Button } from 'react-bootstrap'
import Job from './Job'
import uniqid from 'uniqid'
import { getJobsAction } from '../actions'
import { useDispatch } from 'react-redux'


// const mapStateToProps = (state) => ({
//     // jobs: state.job.jobs,
//     // isError: state.job.isError,
//     // isLoading: state.job.isLoading
//   })
  
//   const mapDispatchToProps = (dispatch) => ({
//     getJobs: () => {
        
//       dispatch(getJobsAction())
//     }
//   })

 const MainSearch = ({history}) => {

   
    const [query, setQuery] = useState('')
    const [jobs,setJobs] = useState([])
    const dispatch = useDispatch()
    
   
 const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='


 useEffect (()=>{
    dispatch(getJobsAction())
 },[dispatch])
  
  
    
   const handleChange = (e) => {
        setQuery(e.target.value)
    }

   const handleSubmit = async (e) => {
        e.preventDefault()
        

        const response = await fetch(baseEndpoint + query + '&limit=20')

        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { data } = await response.json()

        setJobs(data)

    }

    
        return (
            <>
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1> Jobs Search Engine</h1>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="search" value={query} onChange={(e)=>handleChange(e)} placeholder="type and press Enter" />
                        </Form>
                        
                    </Col>
                    <Button onClick={()=>history.push('/favorite')}>FAVORITES</Button>
                    <Col xs={10} className='mx-auto mb-5'>
                        {
                            jobs.map(jobData => <Job key={uniqid()} data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
            </>
        )
                
    
}
export default MainSearch