import { captchaImageService, loginService } from "@/services/login";
import { Form, Input, Button, message, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { history, useModel } from "umi";
import Cookies from "js-cookie";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./index.less";
import leftPng from "@/assets/images/login/left.png";

const Login = () => {
  const { initialState, setInitialState } = useModel("@@initialState");
  const getCaptchaImage = async () => {
    const res = await captchaImageService();
  };
  useEffect(() => {
    getCaptchaImage();
  }, []);
  const getUserInfo = async () => {
    // @ts-ignore
    const userInfo = await initialState?.fetchUserInfo();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo
      }));
    }
  };
  const onFinish = async (values: any) => {};

  return (
    <div className={styles["login-container"]}>
      <div className={styles.box}>
        <div className={styles["left-middle"]}>
          <img src={leftPng} />
        </div>
        <div className={styles["right-middle"]}>
          <div className={styles["form-context"]}>
            <div className={styles.title}>欢迎登录</div>
            <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
              <Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
                <Input
                  prefix={<UserOutlined className={styles["site-form-item-icon"]} />}
                  placeholder="用户名"
                />
              </Form.Item>

              <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
                <Input.Password
                  prefix={<LockOutlined className={styles["site-form-item-icon"]} />}
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item name="remember" className={styles["remeber-text"]} valuePropName="checked">
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className={styles["submit-btn"]}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
