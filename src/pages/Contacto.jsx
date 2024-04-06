import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';


const Contacto = () => {
  return (
    <>
      <h2>Cuentanos, ¿en que te podemos ayudar?</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger">Enviar</Button>
      </Form>
    </>
  );
};

export default Contacto;
