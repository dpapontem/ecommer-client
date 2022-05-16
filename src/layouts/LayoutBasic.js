import React from "react";
import { Layout } from "antd";
import { Footer } from "antd/lib/layout/layout";
export default function LayoutBasic(props){
    /* componente hijo */
    const{children}=props;
    /* Especificas los componentes que quiwewa obtene de estes layout */
    const{Header,Content,Footer}=Layout;
    /* diamicamente al content se le estan pasando os hijos que serian como los components */
    return(
        <Layout>
            <h2>Menu basic</h2>
            <Layout>
                <Header>Header</Header>
                <Content>{children}</Content>
                <Footer>React Project 2022</Footer>
            </Layout>
            
        </Layout>
    );

};