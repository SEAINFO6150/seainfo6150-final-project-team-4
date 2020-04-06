import React, { Component } from 'react'
import { Menu } from 'antd';

export default class Header extends Component {

    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
      render() {
        return (
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal"  >
            <Menu.Item key="mail" style={{float:'left'}}>
            <a href="/"  rel="noopener noreferrer">
                Index
              </a>
            </Menu.Item>
            <Menu.Item key="alipay" style={{float:'left'}}>
              <a href="/about"  rel="noopener noreferrer">
                About
              </a>
            </Menu.Item>
            <Menu.Item key="w" style={{float:'left'}}>
              <a href="/contact" rel="noopener noreferrer">
                Contact
              </a>
            </Menu.Item>
          </Menu>
        );
      }
}
