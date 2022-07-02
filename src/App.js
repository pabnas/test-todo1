import {
  useState,
  cloneElement
} from 'react'

import {
  Container,
  Step,
  Stepper,
  StepLabel,
  Box,
  Grid
} from '@mui/material'


import Form1 from './components/Form1'
import Form2 from './components/Form2'
import TableData from './components/Table'

let user = {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cc : "",
}

const App = () => {
  const [step, setStep] = useState(0)

  const callbackUserDataForm1 = (userData) => {
      user.name = userData.name;
      user.lastName = userData.lastName;
  };
  const callbackUserDataForm2 = (userData) => {
      user.cc = userData.cc;
      user.email = userData.email;
      user.phoneNumber = userData.phoneNumber;
      return user;
  };
  const steps = [
  {
    label: 'Paso 1',
    componente: <Form1 setStep={setStep} callback={callbackUserDataForm1}/>
  },
  {
    label: 'Paso 2',
    componente: <Form2 setStep={setStep} callback={callbackUserDataForm2}/>
  }
]

  return (
    <Container
      fixed
      style={{
        padding: '3em'
      }}
    >
      <Grid
        container
        spacing={6}
      >
        <Grid
          item
          md={4}
          sm={12}
          xs={12}
        >
          <Stepper
            activeStep={step}
          >
            {steps.map((step, key) => (
              <Step
                key={key}
              >
                <StepLabel>
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box
            style={{
              marginTop: '4em'
            }}
          >
            {steps[step].componente}
          </Box>
        </Grid>
        <Grid
          item
          md={8}
          sm={12}
          xs={12}
        >
          <TableData />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
