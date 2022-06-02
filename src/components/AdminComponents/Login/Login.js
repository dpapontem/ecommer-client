import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import "./Login.scss"

const Login = () => {
  

  return (
    <Form 
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Por Favor Ingresar el Correo!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Porfavor Ingrese la contraseña!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Contraseña"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item className="s">
        <Button type="primary" htmlType="submit" className="login-form-button">
          Iniciar Sesion
        </Button>
        
      </Form.Item>
    </Form>
  );
};

export default () => <Login />;