import { Tabs } from 'antd';
import Login from "../../components/AdminComponents/Login";
import Registre from "../../components/AdminComponents/Resgistre";

const { TabPane } = Tabs;

export default () => (
  <div className="card-container" >
    <Tabs type="card" className='tab'>
      <TabPane tab="Registrarse" key="1" className='tab'>
       <Login/>
      </TabPane>
      <TabPane tab="Iniciar Session" key="2" className='tab'>
        <Registre />
      </TabPane>
      
    </Tabs>
  </div>
);