import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, Button, ButtonGroup, Fab
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import useUsers from '../hooks/useUsers'

const TableData = () => {
  const { users } = useUsers()
 
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

                  <Fab size="small" color="error" aria-label="edit" sx={{ mr: 2 }}>
                    <DeleteIcon />
                  </Fab>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableData
