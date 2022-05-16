import { Empty, Button } from 'antd';

export default () => (
  <Empty
    image="https://josefacchin.com/wp-content/uploads/2018/09/http-not-found-error-404.png"
    imageStyle={{
      height: 500,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);