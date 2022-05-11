import type { ReactElement } from "react";
import React, { useContext } from "react";

import {
  Tabs,
  Collapse,
  Button,
  Image,
  Tooltip,
  Radio,
  Input,
  Row,
  Col,
  Select,
  InputNumber,
  Upload,
  message,
  AutoComplete
} from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import styles from "./property.less";
import { BASE_OSS_URL } from "@/constant";
import Context from "./store/context";
import ColorPicker from "@/components/ColorPicker";
import type { UploadChangeParam } from "antd/lib/upload";
import type { UploadFile } from "antd/lib/upload/interface";
const { Dragger } = Upload;
const { TabPane } = Tabs;
const { Panel } = Collapse;

const Property: React.FC = (): ReactElement => {
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
    const positionOptions = [
      {
        label: "默认",
        value: "static"
      },
      {
        label: "相对",
        value: "relative"
      },
      {
        label: "绝对",
        value: "absolute"
      },
      {
        label: "固定",
        value: "fixed"
      }
    ];
    const fontWeightOptions = [
      {
        label: "细",
        value: 300
      },
      {
        label: "正常",
        value: 400
      },
      {
        label: "粗",
        value: 600
      }
    ];
    const textAlignOptions = [
      {
        img: "text-align-left",
        activeImg: "text-align-left_active",
        tip: "左对齐",
        value: "left"
      },
      {
        img: "text-align-center",
        activeImg: "text-align-center_active",
        tip: "居中对齐",
        value: "center"
      },
      {
        img: "text-align-right",
        activeImg: "text-align-right_active",
        tip: "右对齐",
        value: "right"
      },
      {
        img: "text-align-justify",
        activeImg: "text-align-justify_active",
        tip: "两端对齐",
        value: "justify"
      }
    ];
    const backgroundOptions = [
      {
        label: "无填充",
        value: "none"
      },
      {
        label: "颜色填充",
        value: "background"
      },
      {
        label: "图片填充",
        value: "background"
      }
    ];
    const backgroundRepeatOptions = [
      {
        label: "不重复",
        value: "no-repeat"
      },
      {
        label: "水平重复",
        value: "repeat-x"
      },
      {
        label: "垂直重复",
        value: "repeat-y"
      },
      {
        label: "水平垂直重复",
        value: "repeat"
      }
    ];
    const borderStyleOptions = [
      {
        label: "无",
        value: "none"
      },
      {
        label: "实线",
        value: "solid"
      },
      {
        label: "虚线",
        value: "dashed"
      }
    ];
    const uploadProps = {
      name: "file",
      multiple: true,
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info: UploadChangeParam<UploadFile<any>>) {
        const { status } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    const handleSetStyle = (key: string, value: string | number) => {
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
                  size="small"
                  onChange={(e) => handleSetStyle("paddingLeft", e.target.value)}
                  className={`${styles["box-input"]} ${styles["left-input"]}`}
                />
                <Input
                  size="small"
                  bordered={false}
                  onChange={(e) => handleSetStyle("paddingRight", e.target.value)}
                  className={`${styles["box-input"]} ${styles["right-input"]}`}
                />
                <Input
                  size="small"
                  bordered={false}
                  onChange={(e) => handleSetStyle("paddingTop", e.target.value)}
                  className={`${styles["box-input"]} ${styles["top-input"]}`}
                />
                <Input
                  size="small"
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
              size="small"
              bordered={false}
              onChange={(e) => handleSetStyle("marginLeft", e.target.value)}
              className={`${styles["box-input"]} ${styles["left-input"]}`}
            />
            <Input
              size="small"
              bordered={false}
              onChange={(e) => handleSetStyle("marginRight", e.target.value)}
              className={`${styles["box-input"]} ${styles["right-input"]}`}
            />
            <Input
              size="small"
              bordered={false}
              onChange={(e) => handleSetStyle("marginTop", e.target.value)}
              className={`${styles["box-input"]} ${styles["top-input"]}`}
            />
            <Input
              size="small"
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
                <Input addonBefore="宽" size="small" placeholder="px, %" />
              </Col>
              <Col span={11} offset={2}>
                <Input addonBefore="高" size="small" placeholder="px, %" />
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
            <Collapse defaultActiveKey={["1"]} bordered={false}>
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
                {renderFlexPanel()}
                {renderStyleBox()}
              </Panel>
              <Panel header="定位" key="2">
                <div className={styles["property-title"]}>定位</div>
                <Radio.Group
                  onChange={(e) => handleSetStyle("position", e.target.value)}
                  size="small"
                  options={positionOptions}
                  value={style?.position}
                  optionType="button"
                />
              </Panel>
              <Panel header="字体" key="3">
                <Row justify="space-between" align="middle">
                  <Col>
                    <div className={styles["property-title"]}>粗细</div>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      style={{ width: "120px" }}
                      options={fontWeightOptions}
                      onChange={(value) => handleSetStyle("fontWeight", value)}
                      placeholder="粗细"
                    />
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>字号</div>
                  </Col>
                  <Col>
                    <InputNumber
                      size="small"
                      style={{ width: "120px" }}
                      onChange={(value) => handleSetStyle("fontSize", value)}
                    />
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>行高</div>
                  </Col>
                  <Col>
                    <InputNumber
                      size="small"
                      style={{ width: "120px" }}
                      onChange={(val) => handleSetStyle("lineHeight", val)}
                    />
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>颜色</div>
                  </Col>
                  <Col>
                    <ColorPicker
                      value={style?.color}
                      className={styles["color-picker-line"]}
                      onChange={(value) => handleSetStyle("color", value)}
                    />
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>对齐</div>
                  </Col>
                  <Col>
                    {textAlignOptions.map((option) => (
                      <Tooltip title={option.tip} key={option.tip}>
                        <Button
                          onClick={() => handleSetStyle("textAlign", option.value)}
                          type="text"
                          icon={
                            <Image
                              src={`${BASE_OSS_URL}/${
                                style?.display === option.value ? option.activeImg : option.img
                              }.svg`}
                              width={16}
                              preview={false}
                            />
                          }
                        />
                      </Tooltip>
                    ))}
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>不透明度</div>
                  </Col>
                  <Col>
                    <InputNumber
                      size="small"
                      style={{ width: "120px" }}
                      min={0}
                      max={100}
                      formatter={(value) => `${value}%`}
                      parser={(value: any) => value.toString().replace("%", "")}
                      onChange={(value) => handleSetStyle("opacity", value)}
                    />
                  </Col>
                </Row>
              </Panel>
              <Panel header="背景" key="4">
                <div className={styles["property-title"]}>填充方式</div>
                <Radio.Group
                  onChange={(e) => handleSetStyle("background", e.target.value)}
                  size="small"
                  options={backgroundOptions}
                  value={style?.background}
                  optionType="button"
                />
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>颜色</div>
                  </Col>
                  <Col>
                    <ColorPicker
                      value={style?.color}
                      className={styles["color-picker-line"]}
                      onChange={(value) => handleSetStyle("color", value)}
                    />
                  </Col>
                </Row>
                <div className={styles["property-title"]}>图片地址</div>
                <Dragger {...uploadProps}>
                  <p className="ant-upload-drag-icon">
                    <FileImageOutlined />
                  </p>
                  <p className="ant-upload-hint">点击选择图片</p>
                </Dragger>
                <div className={styles["row-item"]}>
                  <Input placeholder="输入图片url" />
                </div>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>宽高尺寸</div>
                  </Col>
                  <Col>
                    <AutoComplete
                      size="small"
                      style={{ width: "120px" }}
                      options={[
                        { label: "auto 原图尺寸", value: "auto" },
                        { label: "100% auto 宽度拉伸,高度自适应", value: "100% auto" },
                        { label: "100% auto 宽度自适应,高度拉伸", value: "auto 100%" },
                        { label: "100% 100% 宽度高度均匀拉伸", value: "100% 100%" }
                      ]}
                    />
                  </Col>
                </Row>
                <div className={styles["property-title"]}>图片位置</div>
                <Row justify="space-between" align="middle">
                  <Col>
                    <div className={styles["property-title"]}>重复方式</div>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      style={{ width: "120px" }}
                      options={backgroundRepeatOptions}
                      onChange={(value) => handleSetStyle("backgroundRepeat", value)}
                      placeholder="请选择"
                    />
                  </Col>
                </Row>
              </Panel>
              <Panel header="边框" key="5">
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>类型</div>
                  </Col>
                  <Col>
                    <Radio.Group
                      onChange={(e) => handleSetStyle("borderStyle", e.target.value)}
                      size="small"
                      options={borderStyleOptions}
                      value={style?.borderStyle}
                      optionType="button"
                    />
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>颜色</div>
                  </Col>
                  <Col>
                    <ColorPicker
                      value={style?.borderColor}
                      className={styles["color-picker-line"]}
                      onChange={(value) => handleSetStyle("borderColor", value)}
                    />
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>宽度</div>
                  </Col>
                  <Col>
                    <InputNumber
                      size="small"
                      style={{ width: "120px" }}
                      onChange={(value) => handleSetStyle("borderWidth", value)}
                    />
                  </Col>
                </Row>
                <Row justify="space-between" align="middle" className={styles["row-item"]}>
                  <Col>
                    <div className={styles["property-title"]}>圆角</div>
                  </Col>
                  <Col flex={1} offset={2}>
                    <Row justify="space-between" align="middle">
                      <Col flex={1}>
                        <InputNumber
                          onChange={(value) => handleSetStyle("borderTopLeftRadius", value)}
                          addonBefore={
                            <Image
                              width={16}
                              src={`${BASE_OSS_URL}/top-left-border.svg`}
                              preview={false}
                            />
                          }
                        />
                      </Col>
                      <Col flex={1}>
                        <InputNumber
                          onChange={(value) => handleSetStyle("borderTopRightRadius", value)}
                          addonBefore={
                            <Image
                              width={16}
                              src={`${BASE_OSS_URL}/top-left-border.svg`}
                              style={{ transform: "rotate(90deg)" }}
                              preview={false}
                            />
                          }
                        />
                      </Col>
                    </Row>
                    <Row justify="space-between" align="middle">
                      <Col>
                        <InputNumber
                          onChange={(value) => handleSetStyle("borderBottomLeftRadius", value)}
                          addonBefore={
                            <Image
                              width={16}
                              src={`${BASE_OSS_URL}/top-left-border.svg`}
                              style={{ transform: "rotate(-90deg)" }}
                              preview={false}
                            />
                          }
                        />
                      </Col>
                      <Col>
                        <InputNumber
                          onChange={(value) => handleSetStyle("borderBottomRightRadius", value)}
                          addonBefore={
                            <Image
                              width={16}
                              src={`${BASE_OSS_URL}/top-left-border.svg`}
                              style={{ transform: "rotate(180deg)" }}
                              preview={false}
                            />
                          }
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
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
