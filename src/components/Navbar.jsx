import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div>
        <Flex>
            <Box p='4'>
            My Coffe Bar
             </Box>
             <Spacer/>
            
            <Menu>
                <MenuButton>
                    Categorías
                </MenuButton>
                <MenuList>
                    <MenuItem>Café</MenuItem>
                    <MenuItem>Maquinas</MenuItem>
                    <MenuItem>Accesorios</MenuItem>
                </MenuList>
            </Menu>                
            <Spacer/>
            <Box p='4'>
                <CartWidget/>
            </Box>
        </Flex>

      
      
    </div>
  )
}

export default Navbar
