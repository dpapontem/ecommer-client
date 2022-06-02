import { Tabs } from 'antd';
import Login from "../../../components/AdminComponents/Login";
import RegistreForm from "../../../components/AdminComponents/Resgistre";
import "./SigIn.scss";
const { TabPane } = Tabs;

export default () => (
  <div className="card-container" >
    <Tabs type="card">
      <TabPane tab="Iniciar Session" key="1">
       <Login/>
      </TabPane>
      <TabPane tab="Registrarse" key="2">
        <RegistreForm />
      </TabPane>
      
    </Tabs>
  </div>
);