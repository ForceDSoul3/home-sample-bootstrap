import {Nav} from 'react-bootstrap'

const LeftNav = () =>{
    return(
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Inicio</Nav.Link>
          <Nav.Link eventKey="link-1">Gestión</Nav.Link>
          <Nav.Link eventKey="link-2">Estadísticas</Nav.Link>
          <Nav.Link eventKey="disabled" disabled>
            Base de datos
          </Nav.Link>
        </Nav>
    )

}

export default LeftNav