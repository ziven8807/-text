import {Menu,Search} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <Menu>
         <Menu.Item as={Link} to="/">
            島島阿學
        </Menu.Item>
         <Menu.Item>
            <Search/>
         </Menu.Item>
         <Menu.Menu position="right">
            <Menu.Item as={Link} to="/singin">
            註冊/登入 
        </Menu.Item>
        </Menu.Menu>      
        </Menu>
    );
}

export default Header;