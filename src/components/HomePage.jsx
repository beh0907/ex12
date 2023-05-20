import React from 'react'
import { Row, Col } from 'react-bootstrap'

const HomePage = () => {

    const { REACT_APP_KAKAO_REST_API_KEY } = process.env;
    console.log(REACT_APP_KAKAO_REST_API_KEY)

    return (
        <Row className='my-5'>
            <Col>
                <h1 className='text-center'>홈</h1>
            </Col>
        </Row>
    )
}

export default HomePage