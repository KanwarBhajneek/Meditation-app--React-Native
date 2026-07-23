import { Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaySvg from '../../assets/svgs/play.svg';
import Logo from "../components/Logo";
import RecommendedForYou from '../sections/RecommendedForYou';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
    const { t } = useTranslation();
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.logoContainer}><Logo /></View>
            <Text style={styles.header}>{t('screens.home.goodMorning')}</Text>
            <Text style={styles.subHeader}>{t('screens.home.wishGoodDay')}</Text>
            <View style={styles.topCard}>
                <View style={styles.topCardLeft}>
                    <Image style={styles.topCardImage} source={require('../../assets/pngs/basics.png')}></Image>
                    <Text style={styles.leftTitle}>{t('screens.home.basics')}</Text>
                    <Text style={styles.leftSubTitle}>{t('screens.home.course')}</Text>
                    <View style={styles.bottomRow}>
                        <Text style={styles.bottomRowText}>{t('screens.home.duration')}</Text>
                        <TopCardStartButton color="#fff" textColor="#3f414e" />
                    </View>
                </View>
                <View style={styles.topCardRight}>
                    <Image style={styles.topCardImage} source={require('../../assets/pngs/relaxation.png')}></Image>
                    <Text style={styles.rightTitle}>{t('screens.home.relaxation')}</Text>
                    <Text style={styles.rightSubTitle}>{t('screens.home.music')}</Text>
                    <View style={styles.bottomRow}>
                        <Text style={styles.bottomRowTextRight}>{t('screens.home.duration')}</Text>
                        <TopCardStartButton color="#3f414e" textColor="#fff" />
                    </View>
                </View>
            </View>
            <View style={styles.middleCard}>
                <ImageBackground source={require('../../assets/pngs/middleCard.png')} style={styles.imageBackground}>
                    <View>
                        <Text style={styles.middleCardTitle}>{t('screens.home.dailyThought')}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.middleCardSubTitle}>{t('screens.home.meditation')}</Text>
                            <Dot />
                            <Text style={styles.middleCardSubTitle}>{t('screens.home.duration')}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <PlayButton />
                    </TouchableOpacity>
                </ImageBackground>
                <RecommendedForYou />
            </View>
        </SafeAreaView>
    );
}

const TopCardStartButton = (props) => {
    const { color, textColor } = props;
    const { t } = useTranslation();
    return (
        <Pressable>
            <View style={[styles.topCardStartButton, { backgroundColor: color }]}>
                <Text style={[styles.topCardStartButtonText, { color: textColor }]}>{t('screens.home.start')}</Text>
            </View>
        </Pressable>
    );
}

const Dot = () => <View style={styles.dot} />

const PlayButton = () => <View style={styles.playButton}><PlaySvg /></View>

const styles = StyleSheet.create({
    screen:{
        backgroundColor: 'white'
    },
    header: {
        marginLeft: 20,
        marginTop: 40,
        fontFamily: 'HelveticaNeue',
        fontWeight: 700,
        fontSize: 28,
        color: '#3F414E',
    },
    subHeader: {
        marginLeft: 20,
        fontFamily: 'HelveticaNeue',
        fontWeight: 400,
        fontSize: 18,
        color: '#A1A4B2',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    topCard: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        gap: 20,
    },
    topCardLeft: {
        flex: 1,
        height: 210,
        backgroundColor: '#8e97fd',
        borderRadius: 10,
        overflow: 'hidden',

    },
    topCardRight: {
        flex: 1,
        backgroundColor: '#ffc97e',
        borderRadius: 10,
        height: 210,
        overflow: 'hidden',
    },
    topCardImage: {
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    leftTitle: {
        marginTop: 85,
        left: 15,
        fontFamily: 'HelveticaNeue',
        fontWeight: 700,
        fontSize: 18,
        color: '#FFECCC',
    },
    leftSubTitle: {
        left: 15,
        fontFamily: 'HelveticaNeue',
        fontSize: 11,
        color: '#F7e8d0',
        marginTop: 9,
    },
    rightTitle: {
        marginTop: 85,
        left: 15,
        fontFamily: 'HelveticaNeue',
        fontWeight: 700,
        fontSize: 18,
        color: '#3F414E',
    },
    rightSubTitle: {
        left: 15,
        fontFamily: 'HelveticaNeue',
        fontSize: 11,
        color: '#3F414E',
        marginTop: 9,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 30,
    },
    topCardStartButton: {
        width: 70,
        height: 35,
        backgroundColor: '#ebeaec',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomRowText: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 400,
        fontSize: 11,
        color: '#EBEAEC',
    },
    bottomRowTextRight: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 400,
        fontSize: 11,
        color: '#3F414E',
    },
    topCardStartButtonText: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 400,
        fontSize: 12,
        color: '#3F414E',
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: 1.5,
        backgroundColor: '#EBEAEC',
        marginHorizontal: 5
    },
    imageBackground: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 97,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 30,
        backgroundColor: '#333242'
    },
    middleCardTitle: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 700,
        fontSize: 18,
        color: '#FFFFFF',
    },
    middleCardSubTitle: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 400,
        fontSize: 11,
        letterSpacing: 0.05 * 11,
        color: '#EBEAEC',
    },
    playButton: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }

})