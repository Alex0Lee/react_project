import React, {Component} from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Radio} from 'antd';
import FormItem from "antd/es/form/FormItem";

const RadioGroup = Radio.Group
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class RegistrationForm extends React.Component {
    constructor(props){
        super(props);

    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;

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
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="账号"
                >
                    <span className="ant-form-text">jdlskfjsdklfjkds</span>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="当前头像"
                >
                    <img style={{width: 150, height: 150}}
                         src="https://tpc.googlesyndication.com/daca_images/simgad/3828458306757945173"/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="真实姓名"
                    hasFeedback
                >
                    <Input value={this.props.container} disabled="True" style={{width: 120,}}/><Icon type="edit" />
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="性别"
                >
                    {getFieldDecorator('radio-group',
                        {initialValue:"male"}
                    )(
                        <RadioGroup>
                            <Radio value="male">男</Radio>
                            <Radio value="female">女</Radio>
                        </RadioGroup>
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="个人所在地"
                >
                    {getFieldDecorator('residence', {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [{type: 'array', required: true, message: 'Please select your habitual residence!'}],
                    })(
                        <Cascader options={residences}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="毕业院校"
                    hasFeedback
                >
                    <Input value="中南大学" style={{width: 120}}/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="工作单位"
                    hasFeedback
                >
                    <Input value="中南大学" style={{width: 120}}/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="联系电话"
                >
                    {getFieldDecorator('phone', {
                        initialValue: "18711032339",
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
                        initialValue:"925862192@qq.com",
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
                    {getFieldDecorator('level', {
                        initialValue: "teacher",
                        rules: [{
                            message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Select style={{width: 120}}>
                            <Option value="teacher">老师</Option>
                            <Option value="student">学生</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="手机号码"
                    hasFeedback
                >
                    <Input value="18711032339" style={{width: '100%'}}/>
                </FormItem>
                <FormItem {...tailFormItemLayout} style={{textAlign:'center'}}>
                    <Button type="primary" htmlType="submit">保存修改</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm;