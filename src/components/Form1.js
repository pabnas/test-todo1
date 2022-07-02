import {
  TextField,
  Button
} from '@mui/material'

import useFormStyles from '../styles/useFormFields'
import {useState} from "react";

const Form1 = ({ setStep, callback }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const classes = useFormStyles()

  const onSubmit = (event) => {
    event.preventDefault()
    callback({ name:firstName,lastName: lastName });
    setStep(1)
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="name"
        label="Nombre"
        onChange={event => setFirstName(event.target.value)}
        defaultValue={''}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="name"
        name="lastName"
        label="Apellido"
        onChange={event => setLastName(event.target.value)}
        defaultValue={''}
      />
      <Button
        variant="contained"
        type="submit"
      >
        Siguiente
      </Button>
    </form>
  )
}

export default Form1
