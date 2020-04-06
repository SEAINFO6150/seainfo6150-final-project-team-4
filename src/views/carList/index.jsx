import React, { Component } from 'react'
import { Layout } from 'antd';
import Header1 from '../../components/header'
import { Row } from 'antd';
import CarList1 from '../../components/carlist'
const { Content, Footer } = Layout;

export default class CarList extends Component {

    render() {

        return (
            <Layout>

                <Header1 />

                <Layout className="site-layout" style={{ minWidth: "700px", width: "100" }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'hidden' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', height: '1000px' }}>
                            {/*  商品展示区 */}
                            <Row>
                                <div>
                                    <h1>Car Shop</h1>
                                </div>
                                <br/>   
                              <CarList1/>



                            </Row>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> Design ©2018 Created by XX xx</Footer>
                </Layout>

            </Layout>
        )
    }
}
