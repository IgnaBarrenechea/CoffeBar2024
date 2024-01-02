import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, 
    Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Item = ({titulo, id}) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{titulo}</Heading>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <button>
        <Link to={"/producto/${id}"}>
          Ver detalle
        </Link>
        </button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item
