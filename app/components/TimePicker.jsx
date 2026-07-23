import React from 'react';
import { StyleSheet, View } from 'react-native';
import WheelColumn, { ITEM_HEIGHT, PICKER_HEIGHT } from './WheelColumn';

const HOURS = Array.from({ length: 12 }, (_, i) => String(i + 1));
const MINUTES = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
const PERIODS = ['AM', 'PM'];

export default function TimePicker({ hourIndex, minuteIndex, periodIndex, onHourChange, onMinuteChange, onPeriodChange }) {
    return (
        <View style={styles.timePickerContainer}>
            <View style={styles.timePickerGradientTop} />
            <View style={styles.timePickerGradientBottom} />

            <View style={styles.selectionIndicator}>
                <View style={styles.selectionLine} />
                <View style={styles.selectionLine} />
            </View>

            <View style={styles.wheelRow}>
                <WheelColumn
                    items={HOURS}
                    selectedIndex={hourIndex}
                    onSelect={onHourChange}
                    width={80}
                />
                <WheelColumn
                    items={MINUTES}
                    selectedIndex={minuteIndex}
                    onSelect={onMinuteChange}
                    width={80}
                />
                <WheelColumn
                    items={PERIODS}
                    selectedIndex={periodIndex}
                    onSelect={onPeriodChange}
                    width={80}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    timePickerContainer: {
        height: 192,
        backgroundColor: '#F5F5F9',
        borderRadius: 20,
        marginTop: 20,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    wheelRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: PICKER_HEIGHT,
    },
    selectionIndicator: {
        position: 'absolute',
        left: 20,
        right: 20,
        top: '50%',
        marginTop: -ITEM_HEIGHT / 2,
        height: ITEM_HEIGHT,
        justifyContent: 'space-between',
        pointerEvents: 'none',
    },
    selectionLine: {
        height: 1,
        backgroundColor: '#E0E0E5',
    },
    timePickerGradientTop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 48,
        backgroundColor: 'rgba(245, 245, 249, 0.9)',
    },
    timePickerGradientBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 47,
        backgroundColor: 'rgba(245, 245, 249, 0.9)',
    },
});
