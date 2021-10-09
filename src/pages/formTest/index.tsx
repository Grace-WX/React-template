import React, { memo, useState } from 'react';
import './index.css';
import ButtonShadow from '../../components/buttonShadow';

const FormCreate = (Comp: any) => {
    return class BaseForm extends React.Component {

        options: any
        state: any

        constructor(props: any) {
            super(props)
            this.state = {}  //字段的值
            this.options = {}  //字段的设置
        }
        // 表单单项处理的事件
        handleChange = (e: any) => {
            const { name, value } = e.target || {};
            this.setState(
                {
                    [name]: value
                },
                () => {
                    // setState回调里取的值是最新的
                    this.validateField(name)
                }
            )
        }

        // 表单项校验
        validateField = (field: any) => {
            // this.options格式：
            // {
            //     'username': {
            //         'rules':[{
            //             'required':true,
            //             'message':''
            //         }]
            //     },
            // }
            const { rules } = this.options[field];
            const ret = rules.some((rule: any) => {
                if (rules.required && !this.state[field]) {
                    this.setState({
                        [field + 'message']: rule.message
                    })
                    return true
                }
            })
            if (!ret) {
                this.setState({
                    [field + 'message']: ''
                })
            }
            return !ret
        }

        // 校验所有字段
        validate = (cb: any) => {
            const rets = Object.keys(this.options).map(field => this.validateField(field))
            const ret = rets.every(v => v === true)
            cb(ret)
        }


        getFieldDec = (field: any, option: any) => (InputComp: any) => {
            this.options[field] = option;
            console.log('this.options', this.options, this.state)
            return (
                <div>
                    {
                        React.cloneElement(InputComp, {
                            name: field,
                            value: this.state[field] || '',
                            onChange: this.handleChange
                        })
                    }
                </div>
            )
        }

        render() {
            return (
                <Comp
                    {...this.props}
                    getFieldDec={this.getFieldDec}
                    validate={this.validate}
                />
            )
        }
    }
}



@FormCreate
class FormComponent extends React.Component {
    render() {
        const onSubmit = () => {
            console.log('this.props', this.props)
        }

        const { getFieldDec } = this.props as any;

        return (
            <div>
                {getFieldDec('username', {
                    rules: [{ required: true, message: '请填写昵称' }]
                })(<input placeholder="请输入昵称" style={{ height: '40px' }} />)
                }

                <ButtonShadow onClick={() => onSubmit()} />
            </div>
        )
    }
}



export default FormComponent
