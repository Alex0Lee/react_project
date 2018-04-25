import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Icon, Avatar, Menu, Layout, Card, Input} from 'antd';
import {Radio, Button, AutoComplete} from 'antd';
import {Select} from 'antd';
import WrappedRegistrationForm from './person';
import {Link} from 'react-router-dom'
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

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
            <p><Link to='/person'>个人资料</Link></p>
            <p><Link to='/person/my_tag'>我的tag</Link></p>
            <p><Link to='/person/edit_password'>修改密码</Link></p>
        </Card>

        <Card title="我的觅居" style={{}}
              bodyStyle={{backgroundColor: "rgb(226,237,224)"}}>
            <p><Link to='/person/my_tag'>我收藏的房源</Link></p>
            <p><Link to='/person/room_collection'>我发布的房源</Link></p>
        </Card>

        <Card title="我的郊游" style={{}}
              bodyStyle={{backgroundColor: "rgb(226,237,224)"}}>
            <p style={{fontSize: '15px'}}><Link to='/person/activity_collection'>我收藏的活动</Link></p>
            <p><Link to='/person/activity_published'>我发布的活动</Link></p>
        </Card>
    </Sider>
}

class Right_person extends Component {

    render() {
        return <WrappedRegistrationForm/>
    }

}

class Right_myTag extends Component {

    render() {
        return <p>{this.props.data.name}</p>
    }

}

class Right_editPassword extends Component {

    render() {
        return <p>Right_editPassword</p>
    }

}

class Right_roomCollection extends Component {

    render() {
        return <p>Right_roomCollection</p>
    }

}

class Right_roomPublish extends Component {

    render() {
        return <p>Right_roomPublish</p>
    }

}

class Right_activityCollection extends Component {

    render() {
        return <p>Right_activityCollection</p>
    }

}

class Right_activityPublish extends Component {

    render() {
        return <p>Right_activityPublish</p>
    }

}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: "teacher",
            name: "wz",
            // 可以在这个里面初始化一些数据通过this.state.$key取出
        };

    };

    componentDidMount() {
        // window.addEventListener('hashchange', () => {
        //     this.setState({
        //         route: window.location.hash.substr(1)
        //     })
        // })
    };


    render() {
        // let Right_Content;
        // switch (this.state.route) {
        //     case '/person':
        //         Right_Content = Right_person;
        //         break;
        //     case '/myTag':
        //         Right_Content = Right_myTag;
        //         break;
        //     case '/editPassword':
        //         Right_Content = Right_editPassword;
        //         break;
        //     case '/roomCollection':
        //         Right_Content = Right_roomCollection;
        //         break;
        //     case '/roomPublish':
        //         Right_Content = Right_roomPublish;
        //         break;
        //     case '/activityCollection':
        //         Right_Content = Right_activityCollection;
        //         break;
        //     case '/activityPublish':
        //         Right_Content = Right_activityPublish;
        //         break;
        //     default:
        //         Right_Content = Right_person;
        // }
        return (
            <Layout>
                <Header style={{height: 200}}>Header</Header>
                <Layout style={{width: 1000, margin: 'auto'}}>
                    <Left/>
                    {/*<Right/>*/}
                    <Content style={{backgroundColor: '#DDDDDD'}}>
                        {/*切换子组件的路由*/}
                        <Switch>
                            <Route exact path='/person' render={(props) => (
                                <Right_person data={{name:"wz"}}/>
                                // 在这里传入数据，可以通过组件内的this.props.data.$取出 下面的同理
                            )}/>
                            <Route path='/person/my_tag' render={(props) => (
                                <Right_myTag data={{name:"wz"}}/>
                            )}/>
                            <Route path='/person/edit_password' render={(props) => (
                                <Right_editPassword data={{name:"wz"}}/>
                            )}/>
                            <Route path='/person/activity_collection' render={(props) => (
                                <Right_activityCollection data={{name:"wz"}}/>
                            )}/>
                            <Route path='/person/activity_published' render={(props) => (
                                <Right_activityPublish data={{name:"wz"}}/>
                            )}/>
                            <Route path='/person/room_collection' render={(props) => (
                                <Right_roomCollection data={{name:"wz"}}/>
                            )}/>
                            <Route path='/person/room_published' render={(props) => (
                                <Right_roomPublish data={{name:"wz"}}/>
                            )}/>
                        </Switch>
                        {/*切换子组件的路由*/}
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default App;
