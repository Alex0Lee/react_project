import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Icon, Avatar, Menu, Layout, Card, Input} from 'antd';
import {Radio, Button, AutoComplete} from 'antd';
import {Select} from 'antd';
import WrappedRegistrationForm from './person';
const Option = Select.Option;
const {RadioGroup} = Radio.Group;
const {Header, Sider, Footer, Content} = Layout;
const {Meta} = Card;
const SubMenu = Menu.SubMenu;
const gridStyle = {
    width: '100%',
    textAlign: 'center',
    height: '10px',
};
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};


function Left(props) {
    return <Sider>
        <Card
            style={{}}
            cover={<img alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
            // actions={[<Icon type="setting"/>, <Icon type="edit"/>, <Icon type="ellipsis"/>]}
        >
            <Meta
                // avatar={<Avatar
                //     src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                title="Card title"
                description="This is the description"
            />
        </Card>
        <Card title="账号管理" style={{}}
              bodyStyle={{backgroundColor: "rgb(226,237,224)"}}>
            <p>个人资料</p>
            <p>我的tag</p>
            <p>修改密码</p>
        </Card>

        <Card title="我的觅居" style={{}}
              bodyStyle={{backgroundColor: "rgb(226,237,224)"}}>
            <p>我收藏的房源</p>
            <p>我发布的房源</p>
        </Card>

        <Card title="我的郊游" style={{}}
              bodyStyle={{backgroundColor: "rgb(226,237,224)"}}>
            <p style={{fontSize: '15px'}}>我收藏的活动</p>
            <p>我发布的活动</p>
        </Card>
    </Sider>
}

class Right_person extends Component {

    render() {
        return <WrappedRegistrationForm/>
    }

}


class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            level:"teacher",
            name:"wz"
        }
    };
    render() {
        return (
            <Layout>
                <Header style={{height: 200}}>Header</Header>
                <Layout style={{width: 1000, margin: 'auto'}}>
                    <Left/>
                    {/*<Right/>*/}
                    <Content style={{backgroundColor: '#DDDDDD'}}>
                    <Right_person />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default App;
