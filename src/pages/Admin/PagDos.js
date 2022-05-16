import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export default () => (
  <Result
    icon={<SmileOutlined />}
    title="¡Genial, hemos hecho todas las operaciones!"
    extra={<Button type="primary" href="/admin">Volver</Button>}
  />
);