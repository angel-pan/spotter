import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from '../Components/Screen';
import CollapsableHeader from '../Components/CollapsableHeader';
import {faqs} from '../Themes/Data';
import colors from '../Themes/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../Components/SearchBar';
import metrics from '../Themes/Metrics';
import BackButton from '../Components/BackButton';

export default function FaqScreen() {
    return (
        <Screen>
            <BackButton />
            <Text style={styles.title}>FAQs</Text>
            <SearchBar />
            <ScrollView 
            showsVerticalScrollIndicator={false}
            directionalLockEnabled={true}>
            {faqs.map((faq) => {
                return (
                <View style={styles.sectionContainer}>
                <Text style={styles.ssectionHeading}>{faq.section}</Text>
                {faq.content.map(qa => 
                <View style={styles.questionContainer}>
                    <CollapsableHeader header={qa.question} contents={qa.answer}/>
                </View>
                )}
                </View>
                );
            })}
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    ssectionHeading: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: metrics.screenHeight * 0.025,
        color: colors.orange,
        letterSpacing: 0.4,
    },
    sectionContainer: {
        marginTop: '10%'
    },
    questionContainer: {
        marginTop: '6%'
    },
    title: {
        fontFamily: 'OpenSans_700Bold',
        fontSize: metrics.screenHeight * 0.035,
        textAlign: 'left',
        letterSpacing: 0.4,
        marginBottom: "8%",
        color: colors.black,
        marginTop: '3%'
    },
});