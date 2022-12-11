import { Component } from 'react'
import Confirmation from '../Confirmation/Confirmation'
import TaskcardForm from '../TaskcardForm/TaskcardForm'

class MultiStepForm extends Component {
    state = {
        step: 1,
        title: '',
        task: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { step, title, task } = this.state
        const inputValues = { title, task }
        switch (step) {
            case 1:
                return <TaskcardForm
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    inputValues={inputValues}
                />
            case 2:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                />
        }
    }
}

export default MultiStepForm;