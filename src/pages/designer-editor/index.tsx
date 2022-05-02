import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./Header";
import TopBar from "./TopBar";
import styles from "./index.less";
import Sider from "./Sider";
import { Layout } from "antd";
import Canvas from "./Canvas";
import Provider from "./store/provider";
const AppDesigner = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles["designer-editor"]}>
      <Provider>
        <DndProvider backend={HTML5Backend}>
          <Header />
          <TopBar />
          <Layout style={{ height: "100%" }}>
            <Layout.Sider theme="light" width="280" className={styles["sider-theme"]}>
              <Sider />
            </Layout.Sider>
            <Layout.Content>
              <Canvas />
            </Layout.Content>
          </Layout>
        </DndProvider>
      </Provider>
    </div>
  );
};
export default AppDesigner;
