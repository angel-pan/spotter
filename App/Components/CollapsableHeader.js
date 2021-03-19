import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../Themes/Colors';
import metrics from '../Themes/Metrics';
import Icon from './Icon';

export default function CollapsableHeader({header, contents}) {
    let [collapsed, setCollapsed] = React.useState(true);
    let iconName = collapsed ? 'SectionCollapsed' : 'SectionOpen';
    return (
        <TouchableOpacity 
          style={styles.container} 
          onPress={()=>setCollapsed(collapsed => !collapsed)}>
            <View style={styles.headerRow}>
              <Text style={styles.header}>{header}</Text>
              <Icon name={iconName} size={metrics.screenHeight * 0.028}/>
              </View>
            {!collapsed && <Text style={styles.contents}>{contents}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 16,
        letterSpacing: 0.4,
        color: colors.black,
        lineHeight: 25,
        flex: 1

    },
    contents: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: 13,
        letterSpacing: 0.4,
        color: colors.grayText,
        lineHeight: 25,
        paddingVertical: '10%'

    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    container: {
        borderBottomWidth: 0.2,
        borderColor: colors.gray,
        paddingBottom: metrics.screenHeight * 0.023,
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: metrics.screenHeight * 0.010,
    }
});