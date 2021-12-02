import * as React from "react";
import "./index.less";
import { DatePicker, Form, Input, ImageUploader, Selector } from "antd-mobile";

export const PhoneBaseInfo = ({ form }) => {
  return (
    <div className="base-info">
      <Form form={form} layout="horizontal">
        <Form.Item name="name" label="姓名">
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item name="birthday" label="出生年月">
          <DatePicker placeholder="请选择出生年月" />
        </Form.Item>
        <Form.Item name="favoriteFruits" label="性别">
          <Selector
            columns={3}
            multiple
            options={[
              { label: "男", value: "1" },
              { label: "女", value: "2" },
            ]}
          />
        </Form.Item>
        <Form.Item name="disabledField" label="上传" disabled>
          <ImageUploader />
        </Form.Item>
      </Form>
    </div>
  );
};
