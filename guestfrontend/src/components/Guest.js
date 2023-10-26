import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Guest() {
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
  const[name, setName]=useState('')
  const[message, setMessage]=useState('')
  const[guests,setGuests]=useState([])

const handleClick=(e)=>{
    e.preventDefault()
    const guest={name, message}
    console.log(guest)
    fetch("http://localhost:8080/guest/add", {
    method:"POST", 
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(guest)
}).then(()=>{
    console.log("New Guest message added")
})
}

useEffect(()=>{
    fetch("http://localhost:8080/guest/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setGuests(result);
    }
  )
  },[])


  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"#1769aa"}}>Add a note</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Guest Name" variant="outlined" 
      value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="filled-basic" label="Guest Message" variant="filled" fullWidth
      value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Box>
    
    </Paper>
    <h1 style={{color:"#1769aa"}}>Guest Book</h1>

    
    <Paper elevation={3} style={paperStyle}>
<h4 style={ {color:"#1769aa" , textAlign:"right"}} >In this book we have {guests.length} sign from our guests</h4>
      {guests.map(guest=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={guest.id}>
         <div>
      {(() => {
        if (guest.message.length) {
          return (
            <div>{guest.message}</div>
          )
         }
      })()}
    </div>
         
         <div>
      {(() => {
        if (guest.name.length) {
          return (
            <div>~{guest.name}</div>
          )
         }
      })()}
    </div>


        </Paper>
      ))
}
    </Paper>
    </Container>
  );
}
