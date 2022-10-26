import React, { Children } from "react";
import { Button } from '@chakra-ui/react'

export default{
    title: 'Chakra/button',
    component: Button
}

const Template = (args) => <Button {...args}/>

export const Success = Template.bind({})
Success.args = {
    colorScheme: 'green',
    variant: 'solid',
    children: 'Args'
}

export const Success2 = () => <Button colorScheme='teal' variant='solid'> Success</Button>
export const Danger = () => <Button colorScheme='red' variant='solid'>Danger</Button>