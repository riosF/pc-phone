import * as React from "react";
import "./index.less";
import {
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
  message,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

export const BaseInfo = ({ form }) => {
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <div className="base-info">
      <Form form={form} wrapperCol={{ span: 18 }} labelCol={{ span: 5 }}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="name" label="姓名">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="sex" label="性别">
              <Select
                options={[
                  { value: "1", label: "男" },
                  { value: "2", label: "女" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="birthday" label="出生年月">
              <DatePicker
                style={{ width: "100%" }}
                placeholder="请选择出生年月"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="national" label="民族">
              <Input></Input>
            </Form.Item>
          </Col>
          <Col span={20} offset={2}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
