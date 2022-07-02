import {
  TextField,
  Button
} from '@mui/material'

import useFormStyles from '../styles/useFormFields'
import {useState} from "react";

const Form2 = ({ setStep,handlerData }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [cc, setcc] = useState('');

  const classes = useFormStyles()

  const onSubmit = (event) => {
    event.preventDefault()
    handlerData({
      email: event.target[0].value,
      phoneNumber: event.target[1].value,
      cc: event.target[2].value,
    })
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <TextField
        className={classes.formField}
        fullWidth
        required
        type="email"
        id="email"
        label="E-mail"
        onChange={event => setEmail(event.target.value)}
        defaultValue={''}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        id="phoneNumber"
        label="Teléfono"
        onChange={event => setphoneNumber(event.target.value)}
        defaultValue={''}
      />
      <TextField
        className={classes.formField}
        fullWidth
        required
        type="number"
        id="cc"
        label="Documento de identidad"
        onChange={event => setcc(event.target.value)}
        defaultValue={''}
      />
      <Button
        className={classes.formButtons}
        variant="outlined"
        onClick={() => setStep(0)}
      >
        Anterior
      </Button>
      <Button
        variant="contained"
        type="submit"
      >
        Enviar
      </Button>
    </form>
  )
}

export default Form2
