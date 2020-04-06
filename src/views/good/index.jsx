import React, { Component } from 'react'
import { Layout } from 'antd';
import './buy.css'
import Header1 from '../../components/header'
import { Row, Col ,Button,Modal} from 'antd';
import { Tabs } from 'antd';

import OrderCarForm from '../../components/buyer';
const { TabPane } = Tabs;

const { Content, Footer } = Layout;
function callback(key) {
    console.log(key);
}
export default class Good extends Component {


    state = {
        loading: false,
        iconLoading: false,
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            ModalText: 'Submitting the order',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
        window.location.href ='/order'
    };
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    render() {
        const { visible, confirmLoading} = this.state;

        return (
            <Layout>

                <div>
                    <Modal
                        title="Make an order"
                        visible={visible}
                        onOk={this.handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={this.handleCancel}
                    >
                        <OrderCarForm/>

                    </Modal>
                </div>



                <Header1 />

                <Layout className="site-layout" style={{ minWidth: "700px", width: "100" }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'hidden' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', height: '1000px' }}>
                            {/*  商品展示区 */}
                            <Row>

                                <Col span={3} offset={1}>
                                    <div className="img-style" />


                                </Col>
                                <Col span={3} offset={4}>
                                    <div className="img-style-1">
                                        <h1 style={{ float: 'left', display: 'inline-block' }}>XX Car</h1>
                                        <p style={{ color: 'red', float: 'left', clear: "both", font: "24" }}>price: $70.00-$80.00</p>
                                        <h2 class="quick" >Quick Overview:</h2>
                                        <p class="quick_desc">
                                            This is a nice car！！！
                                        </p>
                                        <div className='clearfix'></div>
                                        <Button type="primary" loading={this.state.loading} onClick={this.showModal} className="bt-11">
                                            Make an order right now!
                                        </Button>
                                    </div>


                                </Col>
                            </Row>

                            <Row>

                                <Col span={18} offset={1}>
                                    <Tabs defaultActiveKey="1" onChange={callback}>
                                        <TabPane tab='Details' key="1">
                                            Information and Details:
                                            Acceleration: xx s
                                            Engine:
                                            xx cylinder
                                        </TabPane>
                                        <TabPane tab="Comments" key="2">
                                            Content of Tab Pane 2
                                        </TabPane>
                                        <TabPane tab="History" key="3">
                                            Content of Tab Pane 3
                                        </TabPane>
                                    </Tabs>


                                </Col>

                            </Row>

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> Design ©2018 Created by XX xx</Footer>
                </Layout>

            </Layout>
        )
    }
}
