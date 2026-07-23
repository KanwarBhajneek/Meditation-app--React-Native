import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/Button';
import TimePicker from '../components/TimePicker';
import { useTranslation } from 'react-i18next';

const DAYS = [
    { key: 'SU', labelKey: 'screens.reminders.days.SU' },
    { key: 'M', labelKey: 'screens.reminders.days.M' },
    { key: 'T', labelKey: 'screens.reminders.days.T' },
    { key: 'W', labelKey: 'screens.reminders.days.W' },
    { key: 'TH', labelKey: 'screens.reminders.days.TH' },
    { key: 'F', labelKey: 'screens.reminders.days.F' },
    { key: 'S', labelKey: 'screens.reminders.days.S' },
];

const DEFAULT_SELECTED_DAYS = new Set(['SU', 'M', 'T', 'W', 'S']);

function DayButton({ labelKey, selected, onPress }) {
    const { t } = useTranslation();
    return (
        <Pressable
            onPress={onPress}
            style={[styles.dayButton, selected ? styles.dayButtonSelected : styles.dayButtonUnselected]}
        >
            <Text style={[styles.dayButtonText, selected ? styles.dayButtonTextSelected : styles.dayButtonTextUnselected]}>
                {t(labelKey)}
            </Text>
        </Pressable>
    );
}

export default function Reminders() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [hourIndex, setHourIndex] = useState(10);
    const [minuteIndex, setMinuteIndex] = useState(30);
    const [periodIndex, setPeriodIndex] = useState(0);
    const [selectedDays, setSelectedDays] = useState(DEFAULT_SELECTED_DAYS);

    const toggleDay = (key) => {
        setSelectedDays((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };

    const goToDashboard = () => navigation.navigate('Dashboard');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>{t('screens.reminders.timeQuestion')}</Text>
                <Text style={styles.subtitle}>
                    {t('screens.reminders.timeSubtitle')}
                </Text>

                <TimePicker
                    hourIndex={hourIndex}
                    minuteIndex={minuteIndex}
                    periodIndex={periodIndex}
                    onHourChange={setHourIndex}
                    onMinuteChange={setMinuteIndex}
                    onPeriodChange={setPeriodIndex}
                />

                <Text style={[styles.title, styles.dayTitle]}>{t('screens.reminders.dayQuestion')}</Text>
                <Text style={styles.subtitle}>
                    {t('screens.reminders.daySubtitle')}
                </Text>

                <View style={styles.daysRow}>
                    {DAYS.map((day) => (
                        <DayButton
                            key={day.key}
                            labelKey={day.labelKey}
                            selected={selectedDays.has(day.key)}
                            onPress={() => toggleDay(day.key)}
                        />
                    ))}
                </View>

                <View style={styles.actions}>
                    <PrimaryButton text={t('screens.reminders.save')} onPress={goToDashboard} />
                    <Pressable onPress={goToDashboard} style={styles.noThanksButton}>
                        <Text style={styles.noThanksText}>{t('screens.reminders.noThanks')}</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 40,
    },
    title: {
        fontSize: 24,
        fontFamily: 'HelveticaNeue-Bold',
        fontWeight: 'bold',
        color: '#3F414E',
        lineHeight: 24 * 1.35,
    },
    dayTitle: {
        marginTop: 30,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'HelveticaNeue-Light',
        color: '#A1A4B2',
        lineHeight: 16 * 1.65,
        marginTop: 15,
    },
    daysRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    dayButton: {
        width: 41,
        height: 41,
        borderRadius: 20.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayButtonSelected: {
        backgroundColor: '#3F414E',
    },
    dayButtonUnselected: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#EBEAEC',
    },
    dayButtonText: {
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium',
        lineHeight: 14 * 1.65,
    },
    dayButtonTextSelected: {
        color: '#FEFFFE',
    },
    dayButtonTextUnselected: {
        color: '#A1A4B2',
    },
    actions: {
        marginTop: 58,
        gap: 20,
    },
    noThanksButton: {
        alignItems: 'center',
        paddingVertical: 8,
    },
    noThanksText: {
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium',
        color: '#3F414E',
        letterSpacing: 14 * 0.05,
        lineHeight: 14 * 1.081,
    },
});
