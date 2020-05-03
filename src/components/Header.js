import React, { Component } from 'react';
import { Container, Image, Visibility, Menu } from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from '../helpers/styleHelper';
import { Link , NavLink } from "react-router-dom";
// Stateless Component


class Header extends Component {
    constructor(props){
      super(props);
      this.state = {
        menuFixed: false,
        overlayFixed: false,
      }
    }
    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: false });

    static propTypes = {};
    render() {
        const { menuFixed } = this.state
        return (
            <Visibility
                onBottomPassed={this.stickTopMenu}
                onBottomVisible={this.unStickTopMenu}
                once={false}
            >
                <Menu
                    borderless
                    fixed={menuFixed ? 'top' : undefined}
                    style={menuFixed ? fixedMenuStyle : menuStyle}
                >
                    <Container text>
                        <Menu.Item as={Link} to="/" exact="true">
                            <Image size='mini' src='https://semantic-ui.com/examples/assets/images/logo.png' />
                            <Menu.Item header>Movieapp</Menu.Item>
                        </Menu.Item>
                        <Menu.Item as={NavLink} to="/movies" exact>
                            Movies
                        </Menu.Item>
                        <Menu.Item as={NavLink} to="/movies/new">
                         Add New
                        </Menu.Item>
                    </Container>
                </Menu>
            </Visibility>
        );
    }
}
export default Header; 