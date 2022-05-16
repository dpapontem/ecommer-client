import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
//import { Footer } from "antd/lib/layout/layout";
import { GithubOutlined } from "@ant-design/icons";
import "./LayoutAdmin.scss"

export default function LayoutAdmin(props){
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    
    /* componente hijo */
    const{children}=props;
    /* Especificas los componentes que quiwewa obtene de estes layout */
    const{Header,Content,Footer}=Layout;
    /* diamicamente al content se le estan pasando os hijos que serian como los components */
    return(
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed}/>
            <Layout
                className="layout-admin"
                style={{marginLeft: menuCollapsed ? "80px" : "200px"}} 
            >
                <Header className="layout-admin__header">
                    <MenuTop 
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />

                </Header>
                <Content className="layout-admin__content">{children}</Content>
                <Footer>
                    <GithubOutlined style={{ fontSize:"17px"}}/> YanethM
                </Footer>

            </Layout>
            
        </Layout>
    );

};