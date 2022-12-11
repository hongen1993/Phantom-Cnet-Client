import { useEffect, useState } from 'react';
import Confirmation from '../Confirmation/Confirmation'
import { Button, Form } from 'react-bootstrap';
import UserAPI from '../../services/user.service'

const MultiForm = () => {
    const [step, setStep] = useState(1)
    const [taskcard, setTaskcard] = useState([])

    const nextStep = () => {
        setStep((currentStep) => currentState + 1)
    }

    const prevStep = () => {
        setStep((currentStep) => currentState - 1)
    }

    const createTaskcard = (event) => {
        event.preventDefault();
    }

    const updateTaskcard = (event) => {
        const { name, value } = event.target;

        setTaskcard({ ...taskcard, [name]: value });
    }
    const inputValues = { title, task }

    switch (step) {
        case 1:
            return <Form
                nextStep
                handleChange={handleChange}
                inputValues={inputValues}
            />
        case 2:
            return <Confirmation
                inputValues={inputValues}
            />
    }
}

export default MultiForm