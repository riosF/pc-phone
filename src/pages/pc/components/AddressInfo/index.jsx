import * as React from "react";
import "./index.less";
import { Col, Form, Input, Row } from "antd";

export const AddressInfo = ({ form }) => {
  return (
    <div className="address-info">
      <Form form={form} wrapperCol={{ span: 18 }} labelCol={{ span: 5 }}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="address" label="地址">
              <Input></Input>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
