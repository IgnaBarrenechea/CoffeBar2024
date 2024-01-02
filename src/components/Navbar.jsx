import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Flex>
            <Box p='4'>
                <Link to={"/"}>
            My Coffe Bar
            </Link>
             </Box>
             <Spacer/>
            
            <Menu>
                <MenuButton>
                    Categorías
                </MenuButton>
                <MenuList>
                    <Link to={"/categoria/A"}>
                        <MenuItem>Café</MenuItem>
                    </Link>
                    <Link to={"/categoria/B"}>
                        <MenuItem>Maquinas</MenuItem>
                    </Link>
                    <Link to={"/categoria/C"}>
                        <MenuItem>Accesorios</MenuItem>
                    </Link>
                </MenuList>
            </Menu>                
            <Spacer/>
            <Box p='4'>
                <Link to={"/cart"}>
                    <CartWidget/>
                </Link>
            </Box>
        </Flex>

      
      
    </div>
  )
}

export default Navbar
