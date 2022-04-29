import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./Header";
import TopBar from "./TopBar";
import styles from "./index.less";
import Sider from "./Sider";
import { Layout } from "antd";
import Canvas from "./Canvas";
const AppDesigner = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles["designer-editor"]}>
      <DndProvider backend={HTML5Backend}>
        <Layout style={{ height: "100%" }}>
          <Layout.Sider theme="light">
            <Sider />
          </Layout.Sider>
          <Layout.Content>
            <Canvas />
          </Layout.Content>
        </Layout>
        {/* <Header />
        <TopBar /> */}
      </DndProvider>
    </div>
  );
};
export default AppDesigner;
