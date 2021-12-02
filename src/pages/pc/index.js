import { Steps, Button, message, Card, Form } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";
import { BaseInfo } from "./components/BaseInfo";
import { AddressInfo } from "./components/AddressInfo";
import { RemarkInfo } from "./components/RemarkInfo";

const { Step } = Steps;

const PCApp = () => {
  console.log("window.navigator.userAgent:", window.navigator.userAgent);

  message.info("window.navigator.userAgent" + window.navigator.userAgent);

  const [current, setCurrent] = useState(0);

  const [form] = Form.useForm();

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "基础信息",
      content: <BaseInfo form={form} />,
    },
    {
      title: "地址信息",
      content: <AddressInfo form={form} />,
    },
    {
      title: "其他信息",
      content: <RemarkInfo form={form} />,
    },
  ];

  return (
    <div style={{ background: "#f5f5f5", paddingTop: 24, height: "100vh" }}>
      <Card
        style={{
          width: "60%",
          margin: "0 auto",
          height: "calc(100vh - 48px)",
          borderRadius: 10,
        }}
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div
          className="steps-content"
          style={{
            height: "calc(100vh - 148px)",
            padding: "48px 12px",
          }}
        >
          {steps[current].content}
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              下一步
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              完成
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              上一步
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PCApp;
