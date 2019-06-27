import React, { Component } from 'react';
import { Layout, Carousel } from 'antd';
import { Form, Input, Icon, Select, Row, Col, Button, DatePicker, InputNumber } from 'antd';

import '../styles/GeneralStyles.css';
import Navigation from './Navigation';

const { Header } = Layout;
const { Option } = Select;
const { RangePicker } = DatePicker;



export default class HeaderSlide extends Component {
    constructor(props){
        super(props);

        this.state = {
            fixed: false
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            if(window.scrollY > 400)  {
                this.setState({
                    fixed: true
                });
            }else{
                this.setState({
                    fixed: false
                });
            }

        });
    }

    render(){
        return(
            <Header>
                <div className="overlayHeader"></div>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} className="formContainer">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <h1 className="boldFont formTitle">Meet awesome peoples in awesome places</h1>
                        <Form.Item label="Where">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Date">
                            <RangePicker />
                        </Form.Item>

                        <Form.Item label="Guests">
                            <InputNumber min={1} max={10} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" icon="search" style={{float:"right"}}>
                                Search
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                    
                
                <Carousel autoplay dots={true}>
                    <div>
                        <img
                            style={{}}
                            alt="" 
                            src="https://a0.muscache.com/4ea/air/v2/pictures/b7ca8f0c-030a-401a-a3a6-fc3d50f3425f.jpg?t=c:3w-h2-gw,r:w3100-h2074-sfit,e:fjpg-c80"/>
                    </div>

                    <div>
                        <img
                            style={{}}
                            alt="" 
                            src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    </div>

                    <div>
                        <img
                            style={{}}
                            alt="" 
                            src="https://images.pexels.com/photos/570020/pexels-photo-570020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                    </div>
                </Carousel>
                <div className={this.state.fixed ? 'fixedMenu': 'navigationContainer'}>
                    <Navigation />
                </div>
          </Header>
        )
    }
}