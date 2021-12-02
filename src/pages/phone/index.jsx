import { Steps, Button, Card, Form } from "antd-mobile";
import { useState } from "react";
import { PhoneAddressInfo } from "./components/PhoneAddressInfo";
import { PhoneBaseInfo } from "./components/PhoneBaseInfo";

const { Step } = Steps;

const PhoneApp = () => {
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
      content: <PhoneBaseInfo form={form} />,
    },
    {
      title: "地址信息",
      content: <PhoneAddressInfo form={form} />,
    },
    {
      title: "其他信息",
      content: "",
    },
  ];

  return (
    <div style={{ background: "#f5f5f5", paddingTop: 24, height: "100vh" }}>
      <Card>
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
            <Button type="primary" onClick={() => {}}>
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

export default PhoneApp;
