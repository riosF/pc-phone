import * as React from "react";
import "./index.less";
import { Col, Form, Input, Row } from "antd";

const { TextArea } = Input;

export const RemarkInfo = ({ form }) => {
  return (
    <div className="address-info">
      <Form form={form} wrapperCol={{ span: 18 }} labelCol={{ span: 5 }}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="remark" label="备注">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
