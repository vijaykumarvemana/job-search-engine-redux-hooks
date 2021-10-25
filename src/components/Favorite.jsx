import { Button, Col, Container, Row} from "react-bootstrap"
import { connect } from "react-redux"



const mapStateToProps = (state) =>({
    companies: state.favorite.companies
})
const mapDispatchToProps = (dispatch) => ({
    removieFromFavorite: (index) =>{
        dispatch({
            type: 'REMOVE_COMPANY_FROM_FAVORITE',
            payload: index
        })
    }
})


const Favorite = ({companies, removieFromFavorite}) => {
    return(
     <Container>
         <Row>
             <Col>
             {
                 companies.map((company,i) =>
                 
               <div  key={i} style={{ border: "2px solid #00000033", borderRadius: 4 , marginBottom:"10px", marginTop:"30px"}}>{company.company_name}
               <Button onClick={() =>removieFromFavorite(i)}>remove</Button>
               </div>
                
             
                    )
             }
             
             </Col>
         </Row>

     </Container>
         

    

    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorite)