import * as React from 'react';
import ClickableTag from './ClickableTag';
import { ScrollView, View } from 'react-native';

const SelectableTagList = ({tags, selected, onSelect, selectedStyle, unselectedStyle, 
      scrollable, style, scrollViewProps, tagProps}) => {
    const falseArray = () => tags.map(()=>false);
    const tagComponent = tags.map((text, i) => 
    <ClickableTag
      text={text} 
      onPress={() => onSelect(i)}
      tagStyle={selected[i] ? selectedStyle : unselectedStyle}
      {...tagProps}
      key={text}/>)
    return(
        scrollable ? 
        <View style={style}>
          <ScrollView 
            {...scrollViewProps}>
              {tagComponent}
          </ScrollView> 
        </View>: 
        <View style={style}>
            {tagComponent}
        </View>
    );
}

export default SelectableTagList;