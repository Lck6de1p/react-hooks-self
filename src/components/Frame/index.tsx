import { Layout, Menu } from 'antd';
import { hooksRoutes } from '../../router/config';
import { withRouter } from 'react-router';

const { Content, Sider } = Layout;


function Frame(props: any) {
  const pathname = props.location.pathname
  return (
    <Layout>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[pathname]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {hooksRoutes.map(route => (
              <Menu.Item key={route.path} onClick={(p) => props.history.push(p.key)}>{route.title}</Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              padding: 12,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(Frame);
