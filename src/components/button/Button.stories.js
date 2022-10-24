import React from "react";
import Centre from "../centre/Centre";
import Button from "./Button";

export default {
    title: 'form/Button',
    component: Button,
    // apply args to all stories
    args: {
        children: 'Kabucho'
    },
    decorators: [story=> <Centre>{story()} </Centre>]
}

export const Primary = () => <Centre><Button variant = 'primary'> primary</Button></Centre>
export const Secondary = () => <Button variant = 'secondary'> Secondary</Button>
export const Success = () => <Button variant = 'success'> Success</Button>
export const Danger = () => <Button variant = 'danger'> Danger</Button>

const Template = (args) => <Button {...args} />

export const PrimaryA  = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    //children: 'primary Args'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    //children: 'secondary args'
}

// extending from another story

export const Extending = Template.bind({})
Extending.args = {
    ...PrimaryA,
    //children: 'Extended args'
}