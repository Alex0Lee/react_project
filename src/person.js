import React, {Component} from 'react';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Radio,
    message
} from 'antd';
import FormItem from "antd/es/form/FormItem";
import axios from "axios";

const RadioGroup = Radio.Group
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const residences = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}];

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],

        };

    }

    success = () => {
        message.success('修改成功！啦啦啦啦啦啦啦~~~~~');
    };
    error = () => {
        message.error('修改失败了，请检查网络状况后重试~~');
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post("http://shenghuojia.studio712.cn/server/users/edit/person", values).then(res => {
                    if (res.data.status === "success") {
                        this.success()
                    }
                    else {
                        this.error()
                    }
                })
            }

        });


    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {account, avatar, name, gender, region, school, employer, contact, iphone_number, email, type,} = this.props.data;

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 14},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        return (
            <Form onSubmit={this.handleSubmit} type={{height: "100%"}}>
                <FormItem
                    {...formItemLayout}
                    label="账号"
                >
                    <span className="ant-form-text">{account}</span>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="当前头像"
                >
                    {getFieldDecorator('avatar', {
                        initialValue: avatar,
                        rules: [{required: true, message: '需要提供头像'}],
                    })(
                        <img style={{width: 150, height: 150}}
                             src={avatar}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="真实姓名"
                    hasFeedback
                >
                    <Input value={name} disabled="True" style={{width: 120,}}/><Icon type="edit"/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="性别"
                >
                    {getFieldDecorator('gender',
                        {initialValue: gender}
                    )(
                        <RadioGroup>
                            <Radio value={0}>男</Radio>
                            <Radio value={1}>女</Radio>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="个人所在地"
                >
                    {getFieldDecorator('region', {
                        initialValue: region,
                        rules: [{type: 'array', required: true, message: 'Please select your habitual residence!'}],
                    })(
                        <Cascader options={residences}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="毕业院校"
                >
                    {getFieldDecorator('school', {
                        initialValue: school,
                        rules: [{required: false, message: '请输入院校！'}],
                    })(
                        <Input style={{width: '50%'}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="工作单位"
                >
                    {getFieldDecorator('employer', {
                        initialValue: employer,
                        rules: [{required: false, message: '请输入工作单位！'}],
                    })(
                        <Input style={{width: '50%'}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="联系电话"
                >
                    {getFieldDecorator('contact', {
                        initialValue: contact,
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(
                        <Input style={{width: '100%'}}/>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="电子邮箱"
                >
                    {getFieldDecorator('email', {
                        initialValue: email,
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="职位"
                >
                    {getFieldDecorator('type', {
                        initialValue: type,
                        rules: [{
                            message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Select style={{width: 120}}>
                            <Option value="老师">老师</Option>
                            <Option value="学生">学生</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号码"
                >
                    {getFieldDecorator('iphone_number', {
                        initialValue: iphone_number,
                        rules: [{required: true, message: 'Please input your phone number!'}],
                    })(
                        <Input style={{width: '100%'}}/>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout} style={{textAlign: 'center'}}>
                    <Button type="primary" htmlType="submit">保存修改</Button>
                </FormItem>
            </Form>
        );
    }
}

const Right_person = Form.create()(RegistrationForm);
export default Right_person;