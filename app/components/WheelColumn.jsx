import React, { useCallback, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export const ITEM_HEIGHT = 35;
export const VISIBLE_COUNT = 3;
export const PICKER_HEIGHT = ITEM_HEIGHT * VISIBLE_COUNT;

export default function WheelColumn({ items, selectedIndex, onSelect, width }) {
    const scrollRef = useRef(null);
    const paddingVertical = ITEM_HEIGHT;

    useEffect(() => {
        scrollRef.current?.scrollTo({ y: selectedIndex * ITEM_HEIGHT, animated: false });
    }, [selectedIndex]);

    const handleScrollEnd = useCallback(
        (event) => {
            const offsetY = event.nativeEvent.contentOffset.y;
            const index = Math.round(offsetY / ITEM_HEIGHT);
            const clampedIndex = Math.max(0, Math.min(items.length - 1, index));
            scrollRef.current?.scrollTo({ y: clampedIndex * ITEM_HEIGHT, animated: true });
            onSelect(clampedIndex);
        },
        [items.length, onSelect],
    );

    return (
        <View style={[styles.wheelColumn, { width }]}>
            <ScrollView
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                snapToInterval={ITEM_HEIGHT}
                decelerationRate="fast"
                contentContainerStyle={{ paddingVertical }}
                onMomentumScrollEnd={handleScrollEnd}
                onScrollEndDrag={handleScrollEnd}
            >
                {items.map((item, index) => (
                    <View key={`${item}-${index}`} style={styles.wheelItem}>
                        <Text
                            style={[
                                styles.wheelItemText,
                                index === selectedIndex
                                    ? styles.wheelItemTextSelected
                                    : styles.wheelItemTextUnselected,
                            ]}
                        >
                            {item}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    wheelColumn: {
        height: PICKER_HEIGHT,
        overflow: 'hidden',
    },
    wheelItem: {
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wheelItemText: {
        fontSize: 24,
        fontFamily: 'HelveticaNeue-Medium',
        lineHeight: 24 * 1.65,
        textAlign: 'center',
    },
    wheelItemTextSelected: {
        color: '#263238',
    },
    wheelItemTextUnselected: {
        color: '#A1A4B2',
    },
});
