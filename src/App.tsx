import { Button, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';

function App() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item label="Name">
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App
