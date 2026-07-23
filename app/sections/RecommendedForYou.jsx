import React, { useCallback } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const RecommendedForYou = () => {
    const { t } = useTranslation();

    const data = [{
        image: require('../../assets/pngs/focusCard.png'),
        title: t('sections.recommended.focus'),
        subTitle: t('sections.recommended.meditation'),
        backgroundColor: '#AFDBC5'
    },
    {
        image: require('../../assets/pngs/happinessCard.png'),
        title: t('sections.recommended.happiness'),
        subTitle: t('sections.recommended.meditation'),
    },
    {
        image: require('../../assets/pngs/focusCard.png'),
        title: t('sections.recommended.focus'),
        subTitle: t('sections.recommended.meditation'),
        backgroundColor: '#AFDBC5'

    }];

    const renderItem = useCallback(({ item }) => <ListCardMemoized item={item} />, []);

    return (<View style={styles.container}>
        <Text style={styles.header}>{t('sections.recommended.header')}</Text>
        <FlatList
            data={data}
            horizontal={true}
            renderItem={renderItem}
            contentContainerStyle={{ gap: 20 }}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
        />
    </View>);
}

export default RecommendedForYou;

const Dot = () => <View style={styles.dot} />

const ListCard = (props) => {
    const { item } = props;
    const { title, subTitle, image, backgroundColor } = item;
    const { t } = useTranslation();
    return (<View style={styles.listCard}>
        <Image source={image} style={[styles.image, { backgroundColor: backgroundColor }]} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.row}>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Dot />
            <Text style={styles.subTitle}>{t('sections.recommended.duration')}</Text>
        </View>
    </View>);
};

const ListCardMemoized = React.memo(ListCard);


const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginLeft: 20

    },
    image: {
        borderRadius: 10,
        overflow: 'hidden',
        width: 162,
        height: 113.5
    },
    list: {
        marginTop: 20
    },
    listCard: {

    },
    header: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#3F414E'
    },
    title: {
        fontFamily: 'HelveticaNeue',
        fontWeight: 700,
        fontSize: 18,
        color: '#3F414E',
        marginTop: 10.5
    },
    subTitle: {
        fontFamily: 'HelveticaNeue',
        fontSize: 11,
        color: '#A1A4B2',
        lineSpacing: 0.05 * 11,

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: 1.5,
        backgroundColor: '#A1A4B2',
        marginHorizontal: 5
    },
});