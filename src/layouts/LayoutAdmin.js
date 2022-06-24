import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import { Layout, Button } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import { GithubOutlined } from "@ant-design/icons";
import SignIn from "../pages/Admin/SignIn/SignIn";
import { getAccessToken, getRefreshToken } from "../api/auth";
import useAuth from "../hooks/useAuth";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;

  const { user, isLoading} = useAuth();
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  /* let navigate = useNavigate();

   const user = null;
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  if (user) { */

  /*  Si no hay usuario y ya termino de cargar la pagina, no es un usuario logeado */
  if(!user && !isLoading){
    return (
      <>
        <SignIn />
        <Routes>
          <Route path="/admin/login" element={<SignIn />} />
        </Routes>
      </>
    )
  }

  /*  Si el user tiene el contenido del payload y ya termino de cargar la pagina */
  if (user && !isLoading){
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout
          className="layout-admin"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className="layout-admin__content">{children}</Content>
          <Footer className="layout-admin__footer">
            <a className="link" href="https://github.com/dpapontem"  target="_blank"><GithubOutlined style={{ fontSize: "17px" }}  /> DerlyAM</a>
            
          </Footer>
        </Layout>
      </Layout>
    );
  }
  return null;
  
}
/* }
 */
