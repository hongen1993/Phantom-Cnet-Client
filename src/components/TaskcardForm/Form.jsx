import { Button } from 'react'
import { Container, Form } from 'react-bootstrap'

const Form = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        defaultValue={this.props.inputValues.title}
                        name="Insert project title"
                        required
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formTask">
                    <Form.Label>Task</Form.Label>
                    <Form.Control
                        as="textarea"
                        defaultValue={this.props.inputValues.task}
                        placeholder="Insert task"
                        rows={3}
                        onChange={this.props.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
            </Form>
        </Container>
    )
}

export default Form