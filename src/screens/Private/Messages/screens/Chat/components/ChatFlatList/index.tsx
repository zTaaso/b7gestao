import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

const ChatFlatList: React.ForwardRefRenderFunction<FlatListProps<any>, any> = (props, ref) => (
  <FlatList
    contentInsetAdjustmentBehavior="scrollableAxes"
    contentContainerStyle={{
      flexGrow: 1,
    }}
    style={{ flexGrow: 1 }}
    inverted
    {...props}
    ref={ref}
    windowSize={10}
  />
);

export default React.memo(React.forwardRef(ChatFlatList));
