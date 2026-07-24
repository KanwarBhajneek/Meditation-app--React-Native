import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterAllSvg from '../../assets/svgs/filter_all.svg';
import FilterAnxiousSvg from '../../assets/svgs/filter_anxious.svg';
import FilterKidsSvg from '../../assets/svgs/filter_kids.svg';
import FilterMySvg from '../../assets/svgs/filter_my.svg';
import FilterSleepSvg from '../../assets/svgs/filter_sleep.svg';
import PlaySvg from '../../assets/svgs/play.svg';

const filters = [
    { id: 'all', key: 'screens.meditate.filters.all', Icon: FilterAllSvg },
    { id: 'my', key: 'screens.meditate.filters.my', Icon: FilterMySvg },
    { id: 'anxious', key: 'screens.meditate.filters.anxious', Icon: FilterAnxiousSvg },
    { id: 'sleep', key: 'screens.meditate.filters.sleep', Icon: FilterSleepSvg },
    { id: 'kids', key: 'screens.meditate.filters.kids', Icon: FilterKidsSvg },
];

const DATA = [
    { id: '1', titleKey: 'screens.meditate.cards.7daysOfCalm', image: require('../../assets/pngs/card_7days_bg.png') },
    { id: '2', titleKey: 'screens.meditate.cards.anxietyRelease', image: require('../../assets/pngs/card_anxiet_bg.png') },
    { id: '3', titleKey: 'screens.meditate.cards.morning', image: require('../../assets/pngs/focusCard.png') },
    { id: '4', titleKey: 'screens.meditate.cards.happiness', image: require('../../assets/pngs/happinessCard.png') },
];

export default function MeditateScreen() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>{t('screens.meditate.title')}</Text>
            <Text style={styles.description}>{t('screens.meditate.description')}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filtersContent}
                style={styles.filtersList}
            >
                {filters.map((filter) => (
                    <TouchableOpacity
                        key={filter.id}
                        style={styles.filterWrapper}
                        onPress={() => setActiveFilter(filter.id)}
                    >
                        <View style={[
                            styles.filterCircle,
                            activeFilter === filter.id && styles.activeFilterCircle
                        ]}>
                            <filter.Icon width={28} height={28} color="white" />
                        </View>
                        <Text style={[
                            styles.filterText,
                            activeFilter === filter.id && styles.activeFilterText
                        ]}>
                            {t(filter.key)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.dailyCalmCard}>
                <ImageBackground
                    source={require('../../assets/pngs/daily_calm_bg.png')}
                    style={styles.dailyCalmImage}
                    imageStyle={styles.dailyCalmImageInner}
                >
                    <View style={styles.dailyCalmContent}>
                        <View style={styles.dailyCalmTextContainer}>
                            <Text style={styles.dailyCalmTitle}>{t('screens.meditate.cards.dailyCalm')}</Text>
                            <Text style={styles.dailyCalmSubtitle}>{t('screens.meditate.cards.dailyCalmSubtitle')}</Text>
                        </View>
                        <View style={styles.playButtonWrapper}>
                            <PlaySvg width={12} height={12} color="#F0F1F2" />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <View style={styles.cardWrapper}>
            <ImageBackground
                source={item.image}
                style={styles.cardImage}
                imageStyle={styles.cardImageInner}
            >
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{t(item.titleKey)}</Text>
                </View>
            </ImageBackground>
        </View>
    );

    return (
        <SafeAreaView edges={['top']} style={styles.screen}>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                numColumns={2}
                ListHeaderComponent={renderHeader}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={styles.columnWrapper}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    listContent: {
        paddingBottom: 40,
    },
    headerContainer: {
        paddingTop: 40,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 34,
        color: '#3F414E',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 16,
        color: '#A1A4B2',
        lineHeight: 24,
        marginBottom: 35,
        textAlign: 'center',
        width: 336,
        alignSelf: 'center',
    },
    filtersList: {
        marginBottom: 30,
        width: '100%',
    },
    filtersContent: {
        paddingHorizontal: 20,
        gap: 15,
    },
    filterWrapper: {
        alignItems: 'center',
    },
    filterCircle: {
        width: 65,
        height: 65,
        borderRadius: 25,
        backgroundColor: '#A0A3B1',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    activeFilterCircle: {
        backgroundColor: '#8E97FD',
    },
    filterText: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 16,
        color: '#A1A4B2',
        marginTop: 5,
    },
    activeFilterText: {
        color: '#3F414E',
        fontFamily: 'HelveticaNeue-Bold',
        marginTop: 5,
    },
    dailyCalmCard: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    dailyCalmImage: {
        width: '100%',
        height: 95,
        justifyContent: 'center',
    },
    dailyCalmImageInner: {
        borderRadius: 10,
        backgroundColor: '#F1DDCF',
    },
    dailyCalmContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    dailyCalmTextContainer: {
        flex: 1,
        paddingVertical: 15,
        gap: 5,
    },
    dailyCalmTitle: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 18,
        color: '#3F414E',
    },
    dailyCalmSubtitle: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 11,
        color: '#5A6175',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
    playButtonWrapper: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#3F414E',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 3,
    },
    columnWrapper: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    cardWrapper: {
        width: '47%',
        height: 210,
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    cardImageInner: {
        borderRadius: 15,
    },
    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 18,
        color: '#FEF9F3',
    }
});
