import * as React from "react";
import "./index.less";
import { Form, Input } from "antd-mobile";

export const PhoneAddressInfo = ({ form }) => {
  return (
    <div className="address-info">
      <Form layout='horizontal' form={form}>
        <Form.Item name="address" label="地址">
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
