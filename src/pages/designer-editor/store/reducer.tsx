import { produce } from "immer";
import { nanoid } from "nanoid";

export const reducer = (state: InitStateProps, action: ActionProps) => {
  switch (action.type) {
    /** 新增组件 */
    case ActionType.ADD:
      return produce(state, (draft) => {
        const { row = 0, col = 0, direction, id = "" } = action?.payload as PayloadProps;
        switch (direction) {
          case DirectionType.LEFT:
            draft?.layout[row]?.splice(col, 0, { id, span: 24 });
            draft?.layout[row]?.map(
              (item) => (item.span = Math.floor(24 / draft.layout[row]?.length))
            );
            Object.assign(draft.widgets, {
              [id]: action?.payload
            });
            break;
          case DirectionType.RIGHT:
            draft?.layout[row]?.splice(col + 1, 0, { id, span: 24 });
            draft?.layout[row]?.map(
              (item) => (item.span = Math.floor(24 / draft.layout[row]?.length))
            );
            Object.assign(draft.widgets, {
              [id]: action?.payload
            });
            break;
          case DirectionType.TOP:
            draft?.layout?.splice(row, 0, [{ id, span: 24 }]);
            Object.assign(draft.widgets, {
              [id]: action?.payload
            });
            break;
          case DirectionType.BOTTOM:
            draft?.layout?.splice(row + 1, 0, [{ id, span: 24 }]);
            Object.assign(draft.widgets, {
              [id]: action?.payload
            });
            break;
          default:
            break;
        }
      });
    /** 选中组件 */
    case ActionType.SELECTED:
      return produce(state, (draft) => {
        draft.selectedId = (action?.payload as ChangeProps).id;
        draft.selectedRow = (action?.payload as ChangeProps).row;
        draft.selectedCol = (action?.payload as ChangeProps).col;
      });
    /** 插入组件 */
    case ActionType.INSERT:
      return produce(state, (draft) => {
        const { row, col, targetRow, targetCol, direction } = action?.payload as ExchangeProps;
        // 拖拽选中的组件
        const selectView = draft?.layout[row]?.splice(col, 1);
        if (direction === DirectionType.LEFT) {
          draft?.layout[targetRow]?.splice(targetCol, 0, selectView[0]);
        } else if (direction === DirectionType.RIGHT) {
          draft?.layout[targetRow]?.splice(targetCol + 1, 0, selectView[0]);
        } else if (direction === DirectionType.TOP) {
          draft?.layout?.splice(targetRow, 0, [{ ...selectView[0], span: 24 }]);
        } else if (direction === DirectionType.BOTTOM) {
          draft?.layout?.splice(targetRow + 1, 0, [{ ...selectView[0], span: 24 }]);
        }
        // 如果拖拽的组件的 row 里面只有当前拖动的组件需要删除此空行
        if (draft?.layout[row]?.length === 0) {
          draft?.layout.splice(row, 1);
        }

        draft?.layout.map((rowItem) =>
          rowItem.map((item) => (item.span = Math.floor(24 / rowItem?.length)))
        );
      });
    /** 更新组件属性 */
    case ActionType.UPDATA_PROPERTY:
      return produce(state, (draft) => {
        if (draft.selectedId) {
          Object.assign(draft.widgets, {
            [draft.selectedId]: {
              ...draft.widgets[draft.selectedId],
              ...action?.payload
            }
          });
        }
      });
    /** 复制 */
    case ActionType.COPY:
      return produce(state, (draft) => {
        const { row, col } = action?.payload as CopyProps;
        const item = draft?.layout[row][col];
        const type = draft?.widgets[draft?.layout[row][col].id].type;
        const field = `_widget_${type}_${nanoid()}`;
        draft?.layout?.splice(row + 1, 0, [
          {
            id: field,
            span: item.span
          }
        ]);
        Object.assign(draft.widgets, {
          [field]: {
            ...state.widgets[item.id],
            id: field
          }
        });
      });
    /** 删除 */
    case ActionType.DELETE:
      return produce(state, (draft) => {
        const { row, col } = action?.payload as CopyProps;
        const { id } = draft?.layout[row][col];
        delete draft?.widgets[id];
        draft?.layout[row].splice(col, 1);
        if (draft?.layout[row].length === 0) {
          draft?.layout.splice(row, 1);
        }

        draft?.layout.map((rowItem) =>
          rowItem.map((item) => (item.span = Math.floor(24 / rowItem?.length)))
        );
        if (id === draft.selectedId) {
          draft.selectedId = "";
        }
      });
    default:
      return state;
  }
};
