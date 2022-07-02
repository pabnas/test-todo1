import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, Button, ButtonGroup, Fab, Box
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import api from "../api/users";

import useUsers from '../hooks/useUsers'
import {useState} from "react";
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

const TableData = () => {
  const { users } = useUsers()
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpen = () => setOpenDeleteModal(true);
  const handleClose = () => setOpenDeleteModal(false);

  const deleteUser = (id) => {
    api.deleteUser(id).then((data) =>{
      handleOpen();
    })
  }
  return (
    <TableContainer
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Nombre</strong>
            </TableCell>
            <TableCell>
              <strong>Apellido</strong>
            </TableCell>
            <TableCell>
              <strong>E-mail</strong>
            </TableCell>
            <TableCell>
              <strong>Teléfono</strong>
            </TableCell>
            <TableCell>
              <strong>C.C.</strong>
            </TableCell>
            <TableCell>
              <strong>Operaciones</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, key) => (
            <TableRow key={user._id}>
              <TableCell>
                {user.name}
              </TableCell>
              <TableCell>
                {user.lastName}
              </TableCell>
              <TableCell>
                {user.email}
              </TableCell>
              <TableCell>
                {user.phoneNumber}
              </TableCell>
              <TableCell>
                {user.cc}
              </TableCell>
              <TableCell>
                <ButtonGroup disableElevation variant="contained">
                  <Fab size="small" color="success" aria-label="edit" sx={{ mr: 2 }}>
                    <EditIcon />
                  </Fab>

                  <Fab size="small" color="error" aria-label="edit" sx={{ mr: 2 }} onClick={() => deleteUser(user._id) }>
                    <DeleteIcon />
                  </Fab>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Se elimino el cliente correctamente
          </Typography>
        </Box>
      </Modal>
    </TableContainer>
  )
}

export default TableData
