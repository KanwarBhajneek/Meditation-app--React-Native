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

const DAYS = [
    { key: 'SU', label: 'SU' },
    { key: 'M', label: 'M' },
    { key: 'T', label: 'T' },
    { key: 'W', label: 'W' },
    { key: 'TH', label: 'TH' },
    { key: 'F', label: 'F' },
    { key: 'S', label: 'S' },
];

const DEFAULT_SELECTED_DAYS = new Set(['SU', 'M', 'T', 'W', 'S']);

function DayButton({ label, selected, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={[styles.dayButton, selected ? styles.dayButtonSelected : styles.dayButtonUnselected]}
        >
            <Text style={[styles.dayButtonText, selected ? styles.dayButtonTextSelected : styles.dayButtonTextUnselected]}>
                {label}
            </Text>
        </Pressable>
    );
}

export default function Reminders() {
    const navigation = useNavigation();
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
                <Text style={styles.title}>What time would you like to meditate?</Text>
                <Text style={styles.subtitle}>
                    Any time you can choose but We recommend first thing in th morning.
                </Text>

                <TimePicker
                    hourIndex={hourIndex}
                    minuteIndex={minuteIndex}
                    periodIndex={periodIndex}
                    onHourChange={setHourIndex}
                    onMinuteChange={setMinuteIndex}
                    onPeriodChange={setPeriodIndex}
                />

                <Text style={[styles.title, styles.dayTitle]}>Which day would you like to meditate?</Text>
                <Text style={styles.subtitle}>
                    Everyday is best, but we recommend picking{'\n'}at least five.
                </Text>

                <View style={styles.daysRow}>
                    {DAYS.map((day) => (
                        <DayButton
                            key={day.key}
                            label={day.label}
                            selected={selectedDays.has(day.key)}
                            onPress={() => toggleDay(day.key)}
                        />
                    ))}
                </View>

                <View style={styles.actions}>
                    <PrimaryButton text="SAVE" onPress={goToDashboard} />
                    <Pressable onPress={goToDashboard} style={styles.noThanksButton}>
                        <Text style={styles.noThanksText}>NO THANKS</Text>
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
