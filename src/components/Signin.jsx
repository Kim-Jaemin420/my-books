import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import styles from './Signin.module.css';

// class 컴포넌트에서 사용하는 createRef 함수
class Signin extends React.Component {
  _password = React.createRef();

  // email과 pw 부분은 뷰의 담당이라고 생각해서 리듀서로 가지 않음
  state = {
    email: '',
  };

  render() {
    const { email } = this.state;
    const { loading } = this.props;

    console.log(email);
    const isEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);

    console.log(this._password);

    return (
      <form>
        <Row align="middle" className={styles.signin_row}>
          <Col span={24}>
            <Row className={styles.signin_contents}>
              <Col span={12}>
                <img
                  src="/img/bg_signin.png"
                  alt="Signin"
                  className={styles.signin_bg}
                />
              </Col>
              <Col span={12}>
                <div className={styles.signin_title}>My Books</div>
                <div className={styles.signin_subtitle}>
                  Please Note Your Opinion
                </div>
                <div className={styles.signin_underline} />
                <div className={styles.email_title}>
                  Email
                  <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                  <Input
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    className={styles.input}
                    value={this.state.email}
                    onChange={this.change}
                  />

                </div>
                <div className={styles.email_title}>
                  Password
                  <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    className={styles.input}
                    ref={this._password}
                  />
                </div>
                <div className={styles.button_area}>
                  <Button
                    size="large"
                    loading={loading}
                    className={styles.button}
                    onClick={this.click}
                    disabled={!isEmail}
                  >
                    Sign In
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    );
  }

  click = () => {
    const { email } = this.state;
    const password = this._password.current.input.value;
    console.log('clicked', email, password);

    // this.props.signin(email, password);
    
    /*
     이제 로그인이 완료되면 페이지를 이동해야 하는데,
     페이지를 옮기는 방법은,
     1. Link 사용(react-router-dom)
     2. withRouter가 주는 history 이용

     그런데, this.props.signin은 비동기적인 일이다. 
     따라서 디스패치가 날아가는 도중에 주소를 변경하는 일이 발생할 수 있다.

     이럴때는 두 가지 방법이 있다.
     1. hitory를 리덕스로 보내는 방식
     2. react router와 리덕스를 합치는 방식
    */
    
    // 1. history를 리덕스로 보내는 방식 => 번거롭다. 리덕스 로직과 history로직을 합쳐주는 과정이
    //  this.props.signin(email, password, this.props.history)
    // thunk에서 제공해주는 방식이 있다.
    // thunk 미들웨어를 생성할 때 history를 내장할 수 있다. => create로 가서 변경해보자!
    this.props.signin(email, password)
  };

  change = (e) => {
    this.setState({ email: e.target.value });
  };
}

export default Signin;

