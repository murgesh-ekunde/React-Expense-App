import React from 'react'
import { Form } from 'antd'
import Input from 'antd/lib/input/Input'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

function Register() {
  return (
    <div className='register'>
        <div className="row"> 
            <div className='col-md-5'>

            </div>

            <div className="col-md-5">
                <Form layout='vertical'>
                   < Form.Item label='Name' name='name'>
                    <Input />
                   </Form.Item>

                   < Form.Item label='Email' name='email'>
                    <Input />
                   </Form.Item>

                   < Form.Item label='Password' name='passwprd'>
                    <Input />
                   </Form.Item>

                   <div className="d-flex justify-content-between align-items-center">
                    <Link to='/login'> Already Registered? Click here to Login</Link>
                    <Button type="primary"> Register </Button>
                   </div>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Register