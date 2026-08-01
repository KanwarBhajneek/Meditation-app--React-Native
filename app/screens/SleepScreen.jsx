import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FilterAllSvg from '../../assets/svgs/filter_all.svg';
import FilterAnxiousSvg from '../../assets/svgs/filter_anxious.svg';
import FilterKidsSvg from '../../assets/svgs/filter_kids.svg';
import FilterMySvg from '../../assets/svgs/filter_my.svg';
import FilterSleepSvg from '../../assets/svgs/filter_sleep.svg';
import LockSvg from '../../assets/svgs/lock.svg';
import SleepCloudsSvg from '../../assets/svgs/sleep_clouds.svg';
import SleepMoonGraphic from '../../assets/svgs/sleep_moon_graphic.svg';

const filters = [
    { id: 'all', key: 'screens.sleep.filters.all', Icon: FilterAllSvg },
    { id: 'my', key: 'screens.sleep.filters.my', Icon: FilterMySvg },
    { id: 'anxious', key: 'screens.sleep.filters.anxious', Icon: FilterAnxiousSvg },
    { id: 'sleep', key: 'screens.sleep.filters.sleep', Icon: FilterSleepSvg },
    { id: 'kids', key: 'screens.sleep.filters.kids', Icon: FilterKidsSvg },
];

const DATA = [
    { id: '1', image: require('../../assets/pngs/card_night_island.png'), titleKey: 'screens.sleep.cards.nightIsland', subtitleKey: 'screens.sleep.cards.nightIslandSubtitle' },
    { id: '2', image: require('../../assets/pngs/card_sweet_sleep.png'), titleKey: 'screens.sleep.cards.sweetSleep', subtitleKey: 'screens.sleep.cards.sweetSleepSubtitle' },
    { id: '3', image: require('../../assets/pngs/card_night_island.png'), titleKey: 'screens.sleep.cards.goodNight', subtitleKey: 'screens.sleep.cards.goodNightSubtitle' },
    { id: '4', image: require('../../assets/pngs/card_sweet_sleep.png'), titleKey: 'screens.sleep.cards.moonClouds', subtitleKey: 'screens.sleep.cards.moonCloudsSubtitle' },
];

export default function SleepScreen() {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');

    const renderHeader = () => (
        <View style={styles.headerContainer}>
            <View style={styles.backgroundSvgs}>
                <SleepCloudsSvg style={styles.cloudsGraphic} height={300} />
                <SleepMoonGraphic style={styles.moonGraphic} />
            </View>

            <Text style={styles.title}>{t('screens.sleep.title')}</Text>
            <Text style={styles.description}>{t('screens.sleep.description')}</Text>

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
                            <filter.Icon width={25} height={25} color="white" />
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
                    source={require('../../assets/pngs/ocean_moon_bg.png')}
                    style={styles.dailyCalmImage}
                    imageStyle={{ borderRadius: 20 }}
                    resizeMode="cover"
                >
                    <View style={styles.lockIconContainer}>
                        <LockSvg width={30} height={30} />
                    </View>
                    <View style={styles.mainCardContent}>
                        <Text style={styles.mainCardTitle}>{t('screens.sleep.cards.oceanMoon')}</Text>
                        <Text style={styles.mainCardSubtitle}>{t('screens.sleep.cards.oceanMoonSubtitle')}</Text>
                        <Pressable style={styles.startButton}>
                            <Text style={styles.startButtonText}>START</Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );

    const renderItem = ({ item }) => (
        <View style={styles.cardWrapper}>
            <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="cover"
            />
            <Text style={styles.cardTitle}>{t(item.titleKey)}</Text>
            <Text style={styles.cardSubtitle}>{t(item.subtitleKey)}</Text>
        </View>
    );

    return (
        <View style={styles.screen}>
            <StatusBar barStyle="light-content" />
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
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#03174C',
    },
    backgroundSvgs: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: -1,
        overflow: 'hidden'
    },
    moonGraphic: {
        marginTop: 45,
    },
    cloudsGraphic: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },

    listContent: {
        paddingBottom: 40,
        gap: 20,

    },
    headerContainer: {
        paddingTop: 92,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 28,
        color: '#E6E7F2',
        marginBottom: 15,
        textAlign: 'center',
    },
    description: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 16,
        color: '#EBEAEC',
        lineHeight: 24,
        marginBottom: 34,
        textAlign: 'center',
        width: 336,
        alignSelf: 'center',
    },
    filtersList: {
        marginBottom: 30,
        width: '100%',
    },
    filtersContent: {
        gap: 15,
        paddingLeft: 20
    },
    filterWrapper: {
        alignItems: 'center',
    },
    filterCircle: {
        width: 65,
        height: 65,
        borderRadius: 25,
        backgroundColor: '#586894',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeFilterCircle: {
        backgroundColor: '#8E97FD',
    },
    filterText: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 16,
        color: '#98A1BD',
        marginTop: 10,
    },
    activeFilterText: {
        color: '#E6E7F2',
        marginTop: 10,
    },
    dailyCalmCard: {
        width: '100%',
        marginBottom: 20,
        height: 233,
        paddingHorizontal: 20
    },
    dailyCalmImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    lockIconContainer: {
        position: 'absolute',
        top: 10,
        left: 11.5,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainCardContent: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 65,
    },
    mainCardTitle: {
        fontFamily: 'AGaramondPro-Bold',
        fontSize: 36,
        fontWeight: '600',
        color: '#FFE7BF',
        letterSpacing: 0.72,
        textTransform: 'capitalize',
        marginBottom: 5,
    },
    mainCardSubtitle: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 16,
        color: '#F8F9FF',
        textAlign: 'center',
        paddingHorizontal: 40,
        marginBottom: 18,
        lineHeight: 22,
    },
    startButton: {
        backgroundColor: '#EBEAEC',
        borderRadius: 25,
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startButtonText: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 0.6,
        color: '#03174C',
    },
    columnWrapper: {
        paddingHorizontal: 20,
        gap: 20,
    },
    cardWrapper: {
        flex: 1,
    },
    cardImage: {
        width: '100%',
        height: 123,
        borderRadius: 10,
    },
    cardTitle: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 18,
        color: '#E6E7F2',
        marginTop: 11
    },
    cardSubtitle: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 11,
        color: '#98A1BD',
        marginTop: 5,
        letterSpacing: 0.55
    }
});
