import React, { Component } from 'react'
import { Tabs } from 'antd';
import { Card ,Col} from 'antd';
import car1 from '../../assets/imag/pic2.jpg'
import car2 from '../../assets/imag/pic3.jpg'
import car3 from '../../assets/imag/pic4.jpg'
import car4 from '../../assets/imag/pic5.jpg'
import { Row } from 'antd';

const { Meta } = Card;
const { TabPane } = Tabs;

export default class CarList extends Component {
    state = {
        tabPosition: 'left',

        data: [
            { 'title': "汽车1号", "img": car1 },
            { 'title': "汽车2号", "img": car2 },
            { 'title': "汽车3号", "img": car3 },
            { 'title': "汽车4号", "img": car4 },
        ]
    };
    changeTabPosition = tabPosition => {
        this.setState({ tabPosition });
    };
    render() {

        
        return (

            <div>
                <Tabs tabPosition={this.state.tabPosition}>
                    <TabPane tab="Sedan" key="1">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car1} />}
                                >
                                    <Meta title="xxxSedan" description="Sedan" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car1} />}
                                >
                                    <Meta title="xxxSedan" description="Sedan" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car1} />}
                                >
                                    <Meta title="xxxSedan" description="Sedan" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car1} />}
                                >
                                    <Meta title="xxxSedan" description="Sedan" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car1} />}
                                >
                                    <Meta title="xxxSedan" description="Sedan" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car1} />}
                                >
                                    <Meta title="xxxSedan" description="Sedan" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="suv" key="2">
                    <Row gutter={16}>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car2} />}
                                >
                                    <Meta title="xxxsuv" description="suv" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car2} />}
                                >
                                    <Meta title="xxxsuv" description="suv" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car2} />}
                                >
                                    <Meta title="xxxsuv" description="suv" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car2} />}
                                >
                                    <Meta title="xxxsuv" description="suv" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car2} />}
                                >
                                    <Meta title="xxxsuv" description="suv" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car2} />}
                                >
                                    <Meta title="xxxsuv" description="suv" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Pickup" key="3">
                    <Row gutter={16}>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car3} />}
                                >
                                    <Meta title="xxxPickup" description="Pickup" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car3} />}
                                >
                                    <Meta title="xxxPickup" description="Pickup" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car3} />}
                                >
                                    <Meta title="xxxPickup" description="Pickup" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car3} />}
                                >
                                    <Meta title="xxxPickup" description="Pickup" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car3} />}
                                >
                                    <Meta title="xxxPickup" description="Pickup" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car3} />}
                                >
                                    <Meta title="xxxPickup" description="Pickup" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Sportcar" key="4">
                    <Row gutter={16}>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car4} />}
                                >
                                    <Meta title="xxxSportcar" description="Sportcar" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car4} />}
                                >
                                    <Meta title="xxxSportcar" description="Sportcar" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>

                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car4} />}
                                >
                                    <Meta title="xxxSportcar" description="Sportcar" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car4} />}
                                >
                                    <Meta title="xxxSportcar" description="Sportcar" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car4} />}
                                >
                                    <Meta title="xxxSportcar" description="Sportcar" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="" src={car4} />}
                                >
                                    <Meta title="xxxSportcar" description="Sportcar" />
                                    <a href="/buy">Buying me!</a>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
