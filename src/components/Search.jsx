import React from 'react'
import { Container, Row, Col, Form,Button } from 'react-bootstrap'
import Job from './Job'
import uniqid from 'uniqid'
import { connect } from 'react-redux'
import { getJobsAction } from '../actions'


const mapStateToProps = (state) => ({
    // jobs: state.job.jobs,
    // isError: state.job.isError,
    // isLoading: state.job.isLoading
  })
  
  const mapDispatchToProps = (dispatch) => ({
    getJobs: () => {
        
      dispatch(getJobsAction())
    }
  })

 class MainSearch extends React.Component {

    state = {
        query: '',
        jobs: []
    }
    
   
    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  componentDidCatch = async () => {

      this.props.getJobs()
  }
  
    
    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        

        const response = await fetch(this.baseEndpoint + this.state.query + '&limit=20')

        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { data } = await response.json()

        this.setState({ jobs: data })

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1> Jobs Search Engine</h1>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder="type and press Enter" />
                        </Form>
                        
                    </Col>
                    <Button onClick={()=>this.props.history.push('/favorite')}>FAVORITES</Button>
                    <Col xs={10} className='mx-auto mb-5'>
                        {
                            this.state.jobs.map(jobData => <Job key={uniqid()} data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainSearch)