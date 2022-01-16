import { Layout } from "antd";
import { Header } from "./Header";

const AppLayout = () => {
  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content></Layout.Content>
    </Layout>
  );
};

export { AppLayout };
