import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from './context/ThemeContext';
import { themeStyles } from './constants/theme';

export default function AboutScreen() {
    const theme = useTheme().theme as 'light' | 'dark';
    const T = themeStyles[theme];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: T.BG }]}>
      <Text style={[styles.title, { color: T.ACCENT }]}>ข้อมูลรายวิชา</Text>
      <View style={[styles.card, { backgroundColor: T.CARD }]}>
        <Text style={[styles.label, { color: T.TEXT }]}>รหัสวิชา: IN405109</Text>
        <Text style={[styles.label, { color: T.TEXT }]}>ชื่อวิชา: Hybrid Mobile Application Programming</Text>
        <Text style={[styles.label, { color: T.TEXT }]}>หน่วยกิต: 3 (2-2-5)</Text>
        <Text style={[styles.label, { color: T.TEXT }]}>อาจารย์ผู้สอน: อาจารย์ธนภัทร วงษ์คำจันทร์</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 14 },
  card: { borderRadius: 10, padding: 16 },
  label: { fontSize: 16, marginBottom: 8 },
});