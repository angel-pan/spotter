import * as React from 'react';
import SelectableTagList from './SelectableTagList';
import colors from '../Themes/Colors';

const HorizontalTagList = (props) => {
    return (
        <SelectableTagList {...props}
            style={{height: '6%', marginVertical: 8}}
            selectedStyle={{background: colors.orange, text: colors.white}} 
            unselectedStyle={{background: colors.gray, text: colors.grayText}}
            scrollable={true}
            scrollViewProps={{horizontal: true, showsHorizontalScrollIndicator: false}}
            tagProps={{scale: 0.9}} />
    );
}

export default HorizontalTagList;