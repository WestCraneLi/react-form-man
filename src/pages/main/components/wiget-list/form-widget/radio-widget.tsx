import { Input, Radio, Switch } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import {
  BaseActor,
  baseColumns,
  OptionLikeColumns,
  WidgetType,
} from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWigetKit } from "../share/type";

export type RadioActor = BaseActor & {
  type: WidgetType.Radio;
  props: BaseOptions & {
    options: Array<{ label: string; value: string }>;
  };
};
export const radioWigetKit: FormWigetKit = {
  columns: [...baseColumns, ...OptionLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const formItemProps = clearFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Radio.Group ${splitProps(props)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Radio.Group {...props}></Radio.Group>;
  },
};
