import React, { FormEvent } from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader, Button } from '@patternfly/react-core';
import Logo from '../../images/melody.svg';
import Mask from '../../images/mask.svg';
import Mask1 from '../../images/mask1.svg';
import Shape from '../../images/shape.svg';
import Shape1 from '../../images/shape1.svg';
import Shape2 from '../../images/shape2.svg';
import Shape3 from '../../images/shape3.svg';
import Shape4 from '../../images/shape4.svg';
import { Avatar } from '@patternfly/react-core';
import Select from 'react-select';
import { NavbarStyle, Span, P } from './NavbarStyle'


const options = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Telgu', label: 'Telgu' },
]



interface ComponentState {
    activeItem: number
}

class Navbar extends React.Component<{}, ComponentState>{
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 0
        };
        this.onSelect = (result) => {
            this.setState({
                activeItem: result.itemId
            });
        };
    }

    render() {

        return (
            <div>
                <NavbarStyle>
                    <img src={Logo} alt="logo" style={{ width: '200px', padding: '15px' }} />
                    <Button variant="tertiary">
                        <Avatar src={Mask} alt="avatar"></Avatar>
                    </Button>
                    <Button variant="tertiary">
                        <Avatar src={Mask1} alt="avatar"></Avatar>
                    </Button>
                    <Button variant="tertiary">
                        <Avatar src={Shape} alt="avatar"></Avatar>
                    </Button>
                    <Button variant="tertiary">
                        <Avatar src={Shape1} alt="avatar"></Avatar>
                    </Button>
                    <Button variant="tertiary">
                        <Avatar src={Shape2} alt="avatar"></Avatar>
                    </Button>
                    <Button variant="tertiary">
                        <Avatar src={Shape3} alt="avatar"></Avatar>
                    </Button>
                </NavbarStyle>
                <Span>
                    <Select options={options} />
                </Span>
                <P>
                    <Avatar src={Shape4} alt="avatar"></Avatar>
                </P>

            </div>
        );
    }
}


export default Navbar;