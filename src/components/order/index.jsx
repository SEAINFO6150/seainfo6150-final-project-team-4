import React, { Component } from 'react'
import { Tabs, Table } from 'antd';

const { TabPane } = Tabs;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Car',
        dataIndex: 'car',
        key: 'car',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a style={{ marginRight: 16 }}>Pay</a>
                <a>Cancel</a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        car: 'sport car',
        address: 'New York No. 1 Lake Park',
    
    },
    {
        key: '2',
        name: 'Jim Green',
        car: 'suv',
        address: 'London No. 1 Lake Park',
       
    },
    {
        key: '3',
        name: 'Joe Black',
        car: 'sport car',
        address: 'Sidney No. 1 Lake Park',
      
    },
];
export default class List extends Component {
    render() {
        return (
            <div style={{width:'100%'}}>

                <Tabs defaultActiveKey="1" >
                    <TabPane tab="All" key="1">
                        <Table dataSource={data} columns={columns} />;

                    </TabPane>
                    <TabPane tab="Canceled" key="2">
                    <Table dataSource={data} columns={columns} />;                    </TabPane>
                    <TabPane tab="Completed" key="3">
                    <Table dataSource={data} columns={columns} />;
                    </TabPane>
                </Tabs>,
            </div>
        )
    }
}
