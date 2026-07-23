import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';


const topicsLeft = [
    {
        id: '1',
        titleKey: 'screens.chooseTopic.reduceStress',
        image: require('../../assets/pngs/reducestress.png'),
        bgColor: '#8C96FF',
        height: 210,
        titleColor: '#FFECCC'
    },
    {
        id: '3',
        titleKey: 'screens.chooseTopic.increaseHappiness',
        image: require('../../assets/pngs/happiness.png'),
        bgColor: '#FFB9A1',
        height: 160,
        titleColor: '#3F414E'
    },
    {
        id: '5',
        titleKey: 'screens.chooseTopic.personalGrowth',
        image: require('../../assets/pngs/growth.png'),
        bgColor: '#78BA99',
        height: 210,
        titleColor: '#FFECCC'
    },
];

const topicsRight = [
    {
        id: '2',
        titleKey: 'screens.chooseTopic.improvePerformance',
        image: require('../../assets/pngs/improveperformance.png'),
        bgColor: '#FF8573',
        height: 160,
        titleColor: '#FFECCC'
    },
    {
        id: '4',
        titleKey: 'screens.chooseTopic.reduceAnxiety',
        image: require('../../assets/pngs/anxiety.png'),
        bgColor: '#FFC984',
        height: 210,
        titleColor: '#3F414E'
    },
    {
        id: '6',
        titleKey: 'screens.chooseTopic.betterSleep',
        image: require('../../assets/pngs/sleep.png'),
        bgColor: '#3C4253',
        height: 160,
        titleColor: '#FFECCC'
    },
    {
        id: '7',
        title: '',
        image: require('../../assets/pngs/last.png'),
        bgColor: '#D9A5B5',
        height: 160,
        titleColor: '#FFECCC'
    }
];

const TopicCard = React.memo(({ title, titleKey, image, bgColor, height, titleColor }) => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    return (
        <TouchableOpacity
            style={[styles.cardContainer, { backgroundColor: bgColor, height }]}
            onPress={() => { navigation.navigate('Reminders') }}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.cardImage} resizeMode="contain" />
            </View>
            <Text style={[styles.cardTitle, { color: titleColor }]}>{titleKey ? t(titleKey) : title}</Text>
        </TouchableOpacity>
    );
});

export default function ChooseTopic() {
    const { t } = useTranslation();
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitleBold}>{t('screens.chooseTopic.headerBold')}</Text>
                    <Text style={styles.headerTitleLight}>{t('screens.chooseTopic.headerLight')}</Text>
                    <Text style={styles.headerSubtitle}>{t('screens.chooseTopic.headerSubtitle')}</Text>
                </View>

                <View style={styles.masonryContainer}>
                    <View style={styles.column}>
                        {topicsLeft.map((topic) => (
                            <TopicCard key={topic.id} {...topic} />
                        ))}
                    </View>
                    <View style={styles.column}>
                        {topicsRight.map((topic) => (
                            <TopicCard key={topic.id} {...topic} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 40,
    },
    headerContainer: {
        marginBottom: 30,
    },
    headerTitleBold: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3F414E',
        fontFamily: 'HelveticaNeue-Bold',
    },
    headerTitleLight: {
        fontSize: 28,
        fontWeight: '300',
        color: '#3F414E',
        fontFamily: 'HelveticaNeue-Light',
        marginTop: 5,
    },
    headerSubtitle: {
        fontSize: 20,
        color: '#A1A4B2',
        fontFamily: 'HelveticaNeue-Light',
        marginTop: 15,
    },
    masonryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        marginHorizontal: 5,
    },
    cardContainer: {
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue-Bold',
        marginTop: 10,
        paddingBottom: 5,
    },
});
