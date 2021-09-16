import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import Topics from './components/Topics'

import { Container, Row, Col } from 'react-bootstrap'

function App(){

    const [topics, setTopics] = useState([])

    useEffect(() =>{
       const getTopics = async () =>{
           const topicsFromServer = await fetchTopics()
           setTopics(topicsFromServer)
       }

        getTopics()
    },[])

    // Fetch data from Backend
    const fetchTopics = async () =>{
        const res = await fetch('http://196.161.2.155:3000/topics')
        const data = await res.json()

        return(data)
    }


    return(
        <div className="App">
            <Header/>
            <Row>
                <Col className="col-2 mt-4">
                    <LeftNav/>
                </Col>
                <Col>
                    <Container className="mt-4">
                        <h3 className="mb-3">
                            Eventos
                            <small className="text-muted"> activos</small>
                        </h3>
                        <Row xs={1} md={2} lg={3}>
                            <Topics topics={topics} />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}



export default App

