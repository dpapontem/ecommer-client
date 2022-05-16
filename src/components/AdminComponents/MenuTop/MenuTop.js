import React from "react";
import {Button, Icon} from "antd";
import{
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from "@antd-desing/icons";

import "./MenuTop.scss"

export default function MenuTop(props){

    const {menuCollapsed, setMenuCollapsed } = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Button type="link" onClick={()=> setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.Log("Log off!")}>
                    <UserOutlined />
                </Button>
            </div>
        </div>
    );
}