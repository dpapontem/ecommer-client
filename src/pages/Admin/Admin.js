import { Card, Col, Row } from 'antd';

export default () => (
  <div className="site-card-wrapper" class='card-list-container'>
    <Row gutter={16}>
      <Col span={8} >
      <Card
      cover={
        <img
        style={{ width:350 }}
          alt="example"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQHZS8SU3zyQP9RmtK1q6fpc3BMvhuEqZhGg&usqp=CAU"
        />
      }
      style={{ marginTop: 16 }}
      type="inner"
      title="Vista a la Pagina Uno"
      extra={<a href="/admin/componente1">More</a>}
    >
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </Card>
      </Col >
      <Col span={8}>
      <Card
      cover={
        <img
        style={{ width:350 }}
          alt="example"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68uHpUVZBMvoPis3RL72IIzU-SQAjb1VW8g&usqp=CAU"
        />
      }
      style={{ marginTop: 16 }}
      type="inner"
      title="Vita a la Pagina Dos"
      extra={<a href="/admin/componente2">More</a>}
    >
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </Card>
      </Col>
      <Col span={8}>
      <Card
      cover={
        <img
        style={{ width:350 }}
          alt="example"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAxeFst1LOXiVfnAKsezZ-PWv6yKG-S1234A&usqp=CAU"
        />
      }
      style={{ marginTop: 16 }}
      type="inner"
      title="Vista a la Pagina Tres"
      extra={<a href="/admin/componente3">More</a>}
    >
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </Card>
      </Col>
    </Row>
  </div>
);