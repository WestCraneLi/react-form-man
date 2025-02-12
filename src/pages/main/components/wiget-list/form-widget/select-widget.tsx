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
import { Select } from "antd";

export type SelectActor = BaseActor & {
  type: WidgetType.Select;
  props: BaseOptions & {
    options: Array<{ label: string; value: string }>;
  };
};
export const selectWigetKit: FormWigetKit = {
  columns: [...baseColumns, ...OptionLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const formItemProps = clearFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
            <Select ${splitProps(props)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Select {...props}></Select>;
  },
};
