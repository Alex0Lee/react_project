import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Icon, Avatar, Menu, Layout, Card, Input, Tag, Tooltip, List} from 'antd';
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
            <p><Link to='/person/room_collection'>我收藏的房源</Link></p>
            <p><Link to='/person/room_published'>我发布的房源</Link></p>
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

    state = {
        person_tags: ['Unremovable', 'Tag dvxc2', 'Tag 3'],
        room_tags: ['Unremovable', 'Tag vcxvc2', 'Tag 3'],
        rent_tags: ['Unremovable', 'Tagvcvc 2', 'Tag 3'],
        inputPersonVisible: false,
        inputRoomVisible: false,
        inputTagVisible: false,
        inputValue: '',
    };

    handlePersonClose = (removedTag) => {
        const person_tags = this.state.person_tags.filter(tag => tag !== removedTag);
        this.setState({person_tags});
    };

    handleRoomClose = (removedTag) => {
        const room_tags = this.state.room_tags.filter(tag => tag !== removedTag);
        this.setState({room_tags});
    };

    handleRentClose = (removedTag) => {
        const rent_tags = this.state.rent_tags.filter(tag => tag !== removedTag);
        this.setState({rent_tags});
    };

    showPersonInput = () => {
        this.setState({inputPersonVisible: true}, () => this.input.focus());
    };

    showRoomInput = () => {
        this.setState({inputRoomVisible: true}, () => this.input.focus());
    };

    showRentInput = () => {
        this.setState({inputRentVisible: true}, () => this.input.focus());
    };

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    };

    handlePersonTagInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.person_tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            person_tags:tags,
            inputPersonVisible: false,
            inputValue: '',
        });
    };
    handleRoomTagInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.room_tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            room_tags:tags,
            inputRoomVisible: false,
            inputValue: '',
        });
    };
    handleRentTagInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let rent_tags = state.rent_tags;
        if (inputValue && rent_tags.indexOf(inputValue) === -1) {
            rent_tags = [...rent_tags, inputValue];
        }
        console.log(rent_tags);
        this.setState({
            rent_tags,
            inputRentVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => this.input = input

    render() {
        let tag_style = {
            marginLeft: "auto",
            width: "600px",
            height: "25%",
            marginTop: '30px',
        };
        return (
            <div className="tag" style={{height: '600px'}}>

                <div className="personal_tag" style={tag_style}>
                    <p style={{display: 'inline'}}>个人标签：</p>
                    {this.state.person_tags.map((tag, index) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag key={tag} closable={index !== 0} afterClose={() => this.handlePersonClose(tag)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        );
                        return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                    })}

                    {this.state.inputPersonVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            style={{width: 78}}
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handlePersonTagInputConfirm}
                            onPressEnter={this.handlePersonTagInputConfirm}
                        />
                    )}

                    {!this.state.inputPersonVisible && (
                        <Tag
                            onClick={this.showPersonInput}
                            style={{background: '#fff', borderStyle: 'dashed'}}
                        >
                            <Icon type="plus"/> New Tag
                        </Tag>
                    )}
                </div>

                <div className="room_need" style={tag_style}>
                    <p style={{display: 'inline'}}>房源要求：</p>
                    {this.state.room_tags.map((tag, index) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag key={tag} closable={index !== 0} afterClose={() => this.handleRoomClose(tag)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        );
                        return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                    })}

                    {this.state.inputRoomVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            style={{width: 78}}
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleRoomTagInputConfirm}
                            onPressEnter={this.handleRoomTagInputConfirm}
                        />
                    )}

                    {!this.state.inputRoomVisible && (
                        <Tag
                            onClick={this.showRoomInput}
                            style={{background: '#fff', borderStyle: 'dashed'}}
                        >
                            <Icon type="plus"/> New Tag
                        </Tag>
                    )}
                </div>
                <div className="rent_need" style={tag_style}>
                    <p style={{display: 'inline'}}>招租要求：</p>
                    {this.state.rent_tags.map((tag, index) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag key={tag} closable={index !== 0} afterClose={() => this.handleRentClose(tag)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        );
                        return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                    })}

                    {this.state.inputRentVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            style={{width: 78}}
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleRentTagInputConfirm}
                            onPressEnter={this.handleRentTagInputConfirm}
                        />
                    )}

                    {!this.state.inputRentVisible && (
                        <Tag
                            onClick={this.showRentInput}
                            style={{background: '#fff', borderStyle: 'dashed'}}
                        >
                            <Icon type="plus"/> New Tag
                        </Tag>
                    )}
                </div>
            </div>
        )
    }

}

class Right_editPassword extends Component {

    render() {
        return <p>Right_editPassword</p>
    }

}

class Right_roomCollection extends Component {
    render() {
        const listData = [];
        for (let i = 0; i < 5; i++) {
            listData.push({
                href: 'http://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }

        const pagination = {
            pageSize: 10,
            current: 1,
            total: listData.length,
            onChange: (() => {
            }),
        };

        const IconText = ({type, text}) => (
            <span>
    <Icon type={type} style={{marginRight: 8}}/>
                {text}
  </span>
        );

        return (
            <div>
                <List
                    itemLayout="vertical"
                    size="middle"
                    pagination={pagination}
                    dataSource={listData}
                    footer={<div><b>ant design</b> footer part</div>}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
                                <IconText type="message" text="2"/>]}
                            extra={<img width={200} alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar}/>}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>

        )
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
                                <Right_person data={{name: "wz"}}/>
                                // 在这里传入数据，可以通过组件内的this.props.data.$取出 下面的同理
                            )}/>
                            <Route path='/person/my_tag' render={(props) => (
                                <Right_myTag data={{name: "wz"}}/>
                            )}/>
                            <Route path='/person/edit_password' render={(props) => (
                                <Right_editPassword data={{name: "wz"}}/>
                            )}/>
                            <Route path='/person/activity_collection' render={(props) => (
                                <Right_activityCollection data={{name: "wz"}}/>
                            )}/>
                            <Route path='/person/activity_published' render={(props) => (
                                <Right_activityPublish data={{name: "wz"}}/>
                            )}/>
                            <Route path='/person/room_collection' render={(props) => (
                                <Right_roomCollection data={{name: "wz"}}/>
                            )}/>
                            <Route path='/person/room_published' render={(props) => (
                                <Right_roomPublish data={{name: "wz"}}/>
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
