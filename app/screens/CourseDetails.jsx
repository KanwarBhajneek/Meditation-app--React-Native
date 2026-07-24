import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FlatList, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackSvg from '../../assets/svgs/back.svg';
import DownloadSvg from "../../assets/svgs/download.svg";
import Headphone from '../../assets/svgs/headphone.svg';
import HeartSvg from "../../assets/svgs/heart.svg";
import HeartFilled from '../../assets/svgs/heartFilled.svg';
import PlayActiveSvg from '../../assets/svgs/playActive.svg';
import PlayInactiveSvg from '../../assets/svgs/playInactive.svg';

export default function CourseDetails() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = useState('male');

    const tracks = [
        { id: '1', title: t('screens.courseDetails.tracks.focusAttention'), duration: '10 MIN', active: true },
        { id: '2', title: t('screens.courseDetails.tracks.bodyScan'), duration: '5 MIN', active: false },
        { id: '3', title: t('screens.courseDetails.tracks.makingSpace'), duration: '3 MIN', active: false },
    ];

    const renderTrack = ({ item }) => (
        <View style={styles.trackContainer}>
            <TouchableOpacity style={styles.playButton}>
                {item.active ? <PlayActiveSvg /> : <PlayInactiveSvg />}
            </TouchableOpacity>
            <View style={styles.trackInfo}>
                <Text style={styles.trackTitle}>{item.title}</Text>
                <Text style={styles.trackDuration}>{item.duration}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.screen}>
            <ImageBackground
                source={require('../../assets/pngs/courseDetailsHeader.png')}
                style={styles.headerImage}
                resizeMode="cover"
            >
                <SafeAreaView>
                    <View style={styles.headerTop}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <BackSvg />
                        </TouchableOpacity>
                        <View style={styles.topRightButtons}>
                            <Pressable style={styles.topRightButton}>
                                <HeartSvg width={18} height={18} />
                            </Pressable>
                            <Pressable style={styles.topRightButton}>
                                <DownloadSvg width={18} height={18} />
                            </Pressable>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>

            <View style={styles.contentContainer}>
                <Text style={styles.title}>{t('screens.courseDetails.title')}</Text>
                <Text style={styles.subtitle}>{t('screens.courseDetails.subtitle')}</Text>

                <Text style={styles.description}>
                    {t('screens.courseDetails.description')}
                </Text>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <HeartFilled width={18} height={16} />
                        <Text style={styles.statValue}>24.234</Text>
                        <Text style={styles.statLabel}>{t('screens.courseDetails.favorites')}</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Headphone width={18} height={16} />
                        <Text style={styles.statValue}>34.234</Text>
                        <Text style={styles.statLabel}>{t('screens.courseDetails.listening')}</Text>
                    </View>
                </View>

                <View style={styles.tabsContainer}>
                    <TouchableOpacity
                        style={[styles.tab, selectedTab === 'male' && styles.activeTab]}
                        onPress={() => setSelectedTab('male')}
                    >
                        <Text style={[styles.tabText, selectedTab === 'male' && styles.activeTabText]}>{t('screens.courseDetails.maleVoice')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, selectedTab === 'female' && styles.activeTab]}
                        onPress={() => setSelectedTab('female')}
                    >
                        <Text style={[styles.tabText, selectedTab === 'female' && styles.activeTabText]}>{t('screens.courseDetails.femaleVoice')}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={tracks}
                    keyExtractor={(item) => item.id}
                    renderItem={renderTrack}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerImage: {
        width: '100%',
        height: 280,
    },
    headerTop: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    backButton: {
        width: 55,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontFamily: 'HelveticaNeue',
        fontSize: 34,
        fontWeight: 'bold',
        color: '#3F414E',
        marginBottom: 5,
    },
    subtitle: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 14,
        color: '#A1A4B2',
        marginBottom: 20,
        textTransform: 'uppercase',
    },
    description: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 16,
        color: '#A1A4B2',
        lineHeight: 24,
        marginBottom: 25,
    },
    statsContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        gap: 40,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    statValue: {
        fontFamily: 'HelveticaNeue-Bold',
        fontSize: 16,
        color: '#3F414E',
    },
    statLabel: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 14,
        color: '#A1A4B2',
    },
    tabsContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#EBEAEC',
        marginBottom: 20,
    },
    tab: {
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTab: {
        borderBottomColor: '#8E97FD',
    },
    tabText: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 16,
        color: '#A1A4B2',
    },
    activeTabText: {
        color: '#8E97FD',
    },
    listContent: {
        paddingBottom: 40,
    },
    trackContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EBEAEC',
    },
    playButton: {
        width: 40,
        height: 40,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trackInfo: {
        flex: 1,
    },
    trackTitle: {
        fontFamily: 'HelveticaNeue-Medium',
        fontSize: 16,
        color: '#3F414E',
        marginBottom: 4,
    },
    trackDuration: {
        fontFamily: 'HelveticaNeue-Light',
        fontSize: 12,
        color: '#A1A4B2',
    },
    topRightButton: {
        width: 55,
        height: 55,
        backgroundColor: '#03174c',
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7
    },
    topRightButtons: {
        flexDirection: 'row',
        gap: 10,
    }
});
