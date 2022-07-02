import {
  TextField,
  Button, Box
} from '@mui/material'

import useFormStyles from '../styles/useFormFields'
import {useState} from "react";
import api from "../api/users"
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Form2 = ({ setStep,callback }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [cc, setcc] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const classes = useFormStyles()

  const onSubmit = (event) => {
    event.preventDefault()
    let user = callback({
      email: email,
      phoneNumber: phoneNumber,
      cc: cc,
    })
    api.createUser(user).then(() => {
      handleOpen();
    });
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Se ha creado el usuario
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ya puedes cerrar este mensaje dando click afuera de este
          </Typography>
        </Box>
      </Modal>
    </form>
  )
}

export default Form2
