import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { choseDatas, deleteUser, readUser } from '../Feature/userDetails';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TransitionsModal from './Modal ';
import EditIcon from '@mui/icons-material/Edit';
import EditUser from './EditUser';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
function UserList() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(readUser())

  },[])
  const users = (useSelector((state) => state.app.user))
  const searchData = (useSelector((state) => state?.app?.searchData))
  const genderData = (useSelector((state) => state?.app?.choseData))

  const [modalId, setModalId] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [editModal,setEditModal]=useState(false)
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const handleModal = (Id) => {
    setOpenModal(true)

  }
  const handleEditModal = (Id) => {
    setEditModal(true)

  }
  const dispatach = useDispatch()
  return (
    <div>
    {!users?<h1>Loading...</h1>: <div >
    <TableContainer component={Paper}>
      <TransitionsModal openModal={openModal} setOpenModal={setOpenModal} modalId={modalId && modalId} />
<EditUser  editModal={editModal} setEditModal={setEditModal} modalId={modalId && modalId}/>


      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {}
          {users && users.filter((ele)=>{
            if(genderData?.length===0){
              return ele
            }
            else{
              return ele.name.toLowerCase().includes(searchData?.toLowerCase())
            }
          }).map((row) => (

            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.gender}</StyledTableCell>
              <StyledTableCell align="left"><VisibilityIcon onClick={() => { handleModal(row.id); setModalId(row.id) }} />
              
              
              <DeleteForeverIcon onClick={() => dispatach(deleteUser(row.id))} />
              {/* <Link to={`/Edituserlist/${row.id}`}style={{textDecoration:'none',color:'black'}}> */}

              <EditIcon onClick={() => { handleEditModal(row.id); setModalId(row.id) }} />
              {/* </Link> */}
              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





  </div>}
  </div>
   
  )
}

export default UserList