import { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class Confirmation extends Component {

    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (event) => {
        event.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { inputValues: { title, task } } = this.props;

        return (
            <Container>
                <h1>Confirm your Details</h1>
                <p>Confirm if the following details are correct.</p>
                <p>Title: {title}</p>
                <p>Task : {task}</p>
                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary">Confirm</Button>
            </Container>
        )
    }
}

export default Confirmation;