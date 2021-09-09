import { Button,Card,Col } from 'react-bootstrap'
import Moment from 'moment'
import 'moment/locale/es-mx'
import moment from 'moment'

const Topic = ({topic}) => {

    //Dynamic style depending on which type gets
    const typecolor = topic.data_type === 'Curso' ? 'light' : topic.data_type === 'Plática' ? 'dark' : 'secondary'
    const typetext = typecolor === 'light' ? 'dark' : 'white'
    
    //Working with datetime values
    const data_day = (String(topic.data_day)).slice(0,-1) //MSSQL uses the ISO-8601 but adds a Z at the end, Z must be removed
    Moment.locale('es-mx')
    const fecha = Moment(data_day).format('DD MMMM')
    Moment.locale('en')//es-mx doesn't allow 12h format, change to en
    const hora = Moment(data_day,moment.ISO_8601).format('LT')

    //Building the response chunck element
    return (
        <Col className="mb-4">
        <Card style={{ width: '18rem'}}
        bg = {typecolor} 
        text = {typetext}>
            <Card.Header>{topic.data_type}</Card.Header>
            <Card.Body>
                <Card.Title>{topic.data_title}</Card.Title>
                <Card.Text>
                    Se llevará a cabo el día: {fecha} a partir de: {hora}
                </Card.Text>
                <Button variant="primary">Detalles...</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Topic