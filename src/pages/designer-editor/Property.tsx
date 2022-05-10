import type { ReactElement } from "react";
import React, { ReactNode, useContext, useMemo } from "react";
import type { RadioChangeEvent } from "antd";
import { Tabs, Collapse, Button, Image, Tooltip, Radio, Input, Row, Col } from "antd";

import styles from "./property.less";
import { BASE_OSS_URL } from "@/constant";
import Context from "./store/context";
const { TabPane } = Tabs;
const { Panel } = Collapse;
type PropertyProps = {};
const Property: React.FC<PropertyProps> = (): ReactElement => {
  const { state, setPropertyStyle } = useContext(Context);
  const { pages, currentPage, selectIndex } = state!;
  if (pages[currentPage].length > 0 && pages[currentPage][selectIndex]) {
    const { style } = pages[currentPage][selectIndex];
    const layoutOptions = [
      {
        img: "block",
        activeImg: "block_active",
        tip: "块级布局block",
        value: "block"
      },
      {
        img: "flex",
        activeImg: "flex_active",
        tip: "弹性布局flex",
        value: "flex"
      },
      {
        img: "inline-block",
        activeImg: "inline-block_active",
        tip: "内联布局inline-block",
        value: "inline-block"
      },
      {
        img: "inline",
        activeImg: "inline_active",
        tip: "内联块布局inline",
        value: "inline"
      },
      {
        img: "none",
        activeImg: "none_active",
        tip: "隐藏none",
        value: "none"
      }
    ];
    const flexDirectionOptions = [
      {
        label: "水平",
        value: "row"
      },
      {
        label: "逆水平",
        value: "row-reverse"
      },
      {
        label: "垂直",
        value: "column"
      },
      {
        label: "逆垂直",
        value: "column-reverse"
      }
    ];
    const flexWrapOptions = [
      {
        label: "不换行",
        value: "nowrap"
      },
      {
        label: "换行",
        value: "wrap"
      },
      {
        label: "逆换行",
        value: "wrap-reverse"
      }
    ];
    const justifyContentOptions = [
      {
        img: "justify-flex-start",
        activeImg: "justify-flex-start_active",
        tip: "左对齐flex-start",
        value: "flex-start"
      },
      {
        img: "justify-flex-end",
        activeImg: "justify-flex-end_active",
        tip: "右对齐flex-end",
        value: "flex-end"
      },
      {
        img: "justify-center",
        activeImg: "justify-center_active",
        tip: "水平居中center",
        value: "center"
      },
      {
        img: "justify-space-between",
        activeImg: "justify-space-between_active",
        tip: "两端对齐space-between",
        value: "space-between"
      },
      {
        img: "justify-space-around",
        activeImg: "justify-space-around_active",
        tip: "横向平分space-around",
        value: "space-around"
      }
    ];
    const alignItemsOptions = [
      {
        img: "align-flex-start",
        activeImg: "align-flex-start_active",
        tip: "flex-start",
        value: "flex-start"
      },
      {
        img: "align-flex-end",
        activeImg: "align-flex-end_active",
        tip: "flex-end",
        value: "flex-end"
      },
      {
        img: "align-center",
        activeImg: "align-center_active",
        tip: "align-center",
        value: "align-center"
      },
      {
        img: "align-baseline",
        activeImg: "align-baseline_active",
        tip: "baseline",
        value: "baseline"
      },
      {
        img: "align-stretch",
        activeImg: "align-stretch_active",
        tip: "stretch",
        value: "stretch"
      }
    ];
    const handleSetStyle = (key: string, value: string) => {
      setPropertyStyle!(key, value);
    };

    const renderStyleBox = () => {
      return (
        <>
          <div className={styles["box-editor"]}>
            <div className={styles["box-inner"]}>
              <div className={styles["box-inner-deitor"]}>
                <div className={styles["box-inner-w"]} />
                <Input
                  bordered={false}
                  onChange={(e) => handleSetStyle("paddingLeft", e.target.value)}
                  className={`${styles["box-input"]} ${styles["left-input"]}`}
                />
                <Input
                  bordered={false}
                  onChange={(e) => handleSetStyle("paddingRight", e.target.value)}
                  className={`${styles["box-input"]} ${styles["right-input"]}`}
                />
                <Input
                  bordered={false}
                  onChange={(e) => handleSetStyle("paddingTop", e.target.value)}
                  className={`${styles["box-input"]} ${styles["top-input"]}`}
                />
                <Input
                  bordered={false}
                  onChange={(e) => handleSetStyle("paddingBottom", e.target.value)}
                  className={`${styles["box-input"]} ${styles["bottom-input"]}`}
                />
                <div className={styles.title}>PADDING</div>
                <div className={`${styles["box-lt"]} ${styles["box-line"]}`} />
                <div className={`${styles["box-lb"]} ${styles["box-line"]}`} />
                <div className={`${styles["box-rt"]} ${styles["box-line"]}`} />
                <div className={`${styles["box-rb"]} ${styles["box-line"]}`} />
              </div>
            </div>
            <Input
              bordered={false}
              onChange={(e) => handleSetStyle("marginLeft", e.target.value)}
              className={`${styles["box-input"]} ${styles["left-input"]}`}
            />
            <Input
              bordered={false}
              onChange={(e) => handleSetStyle("marginRight", e.target.value)}
              className={`${styles["box-input"]} ${styles["right-input"]}`}
            />
            <Input
              bordered={false}
              onChange={(e) => handleSetStyle("marginTop", e.target.value)}
              className={`${styles["box-input"]} ${styles["top-input"]}`}
            />
            <Input
              bordered={false}
              onChange={(e) => handleSetStyle("marginBottom", e.target.value)}
              className={`${styles["box-input"]} ${styles["bottom-input"]}`}
            />
            <div className={styles.title}>MARGIN</div>
            <div className={`${styles["box-lt"]} ${styles["box-line"]}`} />
            <div className={`${styles["box-lb"]} ${styles["box-line"]}`} />
            <div className={`${styles["box-rt"]} ${styles["box-line"]}`} />
            <div className={`${styles["box-rb"]} ${styles["box-line"]}`} />
          </div>
          <Input.Group>
            <Row>
              <Col span={11}>
                <Input addonBefore="宽" placeholder="px, %" />
              </Col>
              <Col span={11} offset={2}>
                <Input addonBefore="高" placeholder="px, %" />
              </Col>
            </Row>
          </Input.Group>
        </>
      );
    };
    const renderFlexPanel = () => {
      return (
        <div>
          <div className={styles["property-title"]}>主轴方向</div>
          <Radio.Group
            onChange={(e) => handleSetStyle("flexDirection", e.target.value)}
            size="small"
            options={flexDirectionOptions}
            value={style?.flexDirection}
            optionType="button"
          />
          <div className={styles["property-title"]}>主轴对齐</div>
          <Radio.Group
            size="small"
            optionType="button"
            value={style?.justifyContent}
            onChange={(e) => handleSetStyle("justifyContent", e.target.value)}
          >
            {justifyContentOptions.map((option) => (
              <Radio.Button value={option.value} key={option.value}>
                <Image
                  src={`${BASE_OSS_URL}/${
                    style?.justifyContent === option.value ? option.activeImg : option.img
                  }.svg`}
                  preview={false}
                />
              </Radio.Button>
            ))}
          </Radio.Group>
          <div className={styles["property-title"]}>副轴对齐</div>
          <Radio.Group
            size="small"
            value={style?.alignItems}
            optionType="button"
            onChange={(e) => handleSetStyle("alignItems", e.target.value)}
          >
            {alignItemsOptions.map((option) => (
              <Radio.Button value={option.value} key={option.value}>
                <Image
                  src={`${BASE_OSS_URL}/${
                    style?.alignItems === option.value ? option.activeImg : option.img
                  }.svg`}
                  preview={false}
                />
              </Radio.Button>
            ))}
          </Radio.Group>
          <div className={styles["property-title"]}>换行</div>
          <Radio.Group
            onChange={(e) => handleSetStyle("flexWrap", e.target.value)}
            size="small"
            options={flexWrapOptions}
            value={style?.flexWrap}
            optionType="button"
          />
        </div>
      );
    };
    return (
      <div className={styles["property-panel"]}>
        <Tabs type="card" className={styles["property-tabs"]} activeKey="2">
          <TabPane tab="属性" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="样式" key="2">
            <Collapse defaultActiveKey={["1"]}>
              <Panel header="布局" key="1">
                <div className={styles["property-line"]}>
                  <div className={styles["item-title"]}>布局模式</div>
                  <div className={styles["layout-group"]}>
                    {layoutOptions.map((option) => (
                      <Tooltip title={option.tip} key={option.tip}>
                        <Button
                          onClick={() => handleSetStyle("display", option.value)}
                          type="text"
                          icon={
                            <Image
                              src={`${BASE_OSS_URL}/${
                                style?.display === option.value ? option.activeImg : option.img
                              }.svg`}
                              preview={false}
                            />
                          }
                        />
                      </Tooltip>
                    ))}
                  </div>
                </div>
                {/* {renderFlexPanel()} */}
                {renderStyleBox()}
              </Panel>
              <Panel header="定位" key="2">
                <div className={styles["property-title"]}>定位</div>
              </Panel>
              <Panel header="字体" key="3">
                <div />
              </Panel>
              <Panel header="背景" key="4">
                <div />
              </Panel>
              <Panel header="边框" key="5">
                <div />
              </Panel>
            </Collapse>
          </TabPane>
        </Tabs>
      </div>
    );
  }
  return <div>未选中</div>;
};
export default React.memo(Property);
