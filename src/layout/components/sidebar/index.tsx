import { Menu } from 'antd';
import routes from '../../../router/config'

const Sidbar = () => {
    const handleClick = (e: any) => {
        console.log(e)
    }
    return (
        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            {routes[0].childern.map(route => (
                <Menu.Item key={route.path}>
                    {route.title}
                </Menu.Item>
            ))}
        </Menu>
    );
}
export default Sidbar