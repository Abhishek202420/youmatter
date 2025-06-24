import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const features = [
  {
    title: 'Journal',
    description: 'Capture your thoughts and',
    color: '#F8E8F3',
    route: '/journal',
    icon: <MaterialCommunityIcons name="notebook-outline" size={28} color="#D72660" />,
  },
  {
    title: 'Habits',
    description: 'Track your daily routines and',
    color: '#E6F7EC',
    route: '/habit',
    icon: <Feather name="check-circle" size={28} color="#21B573" />,
  },
  {
    title: 'Routines',
    description: 'Plan your perfect day, minute by',
    color: '#FFF6E5',
    route: '/routine',
    icon: <Feather name="calendar" size={28} color="#FF9900" />,
  },
  {
    title: 'Connect',
    description: 'Share and track your mood with',
    color: '#EAF4FB',
    route: '/chat',
    icon: <Ionicons name="chatbubble-ellipses-outline" size={28} color="#3A86FF" />,
  },
];

const activity = [
  {
    title: 'Journal Entries',
    subtitle: '5 entries this week',
    color: '#F8E8F3',
    icon: <MaterialCommunityIcons name="notebook-outline" size={22} color="#D72660" />,
  },
  {
    title: 'Habits Completed',
    subtitle: '12/15 habits done',
    color: '#E6F7EC',
    icon: <Feather name="target" size={22} color="#21B573" />,
  },
  {
    title: 'Routine Adherence',
    subtitle: '80% consistent',
    color: '#FFF6E5',
    icon: <Feather name="clock" size={22} color="#FF9900" />,
  },
  {
    title: 'Mood Trend',
    subtitle: 'Stable positive mood',
    color: '#EAF4FB',
    icon: <Ionicons name="happy-outline" size={22} color="#3A86FF" />,
  },
];

const numColumns = 2;
const cardMargin = 12;
const cardWidth = (Dimensions.get('window').width - cardMargin * (numColumns + 1)) / numColumns;

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.greeting}>Good Morning, Sarah!</Text>
          <Text style={styles.subtitle}>Let's make today mindful.</Text>
        </View>
        <Ionicons name="notifications-outline" size={26} color="#888" style={{ marginRight: 16 }} />
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
          style={styles.profilePic}
        />
      </View>

      {/* Feature Cards Grid */}
      <View style={styles.grid}>
        {features.map((feature, idx) => (
          <Link key={feature.title} href={feature.route as any} asChild>
            <TouchableOpacity style={[styles.card, { backgroundColor: feature.color, width: cardWidth }]} activeOpacity={0.85}>
              <View style={styles.iconWrap}>{feature.icon}</View>
              <Text style={styles.cardTitle}>{feature.title}</Text>
              <Text style={styles.cardDesc}>{feature.description}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      {/* Recent Activity */}
      <Text style={styles.activityHeader}>Your Recent Activity</Text>
      <View style={styles.activityList}>
        {activity.map((item, idx) => (
          <TouchableOpacity key={item.title} style={[styles.activityCard, { backgroundColor: item.color }]}
            activeOpacity={0.8}
          >
            <View style={styles.activityIcon}>{item.icon}</View>
            <View style={{ flex: 1 }}>
              <Text style={styles.activityTitle}>{item.title}</Text>
              <Text style={styles.activitySubtitle}>{item.subtitle}</Text>
            </View>
            <Feather name="chevron-right" size={22} color="#888" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginTop: 8,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    marginBottom: 8,
  },
  profilePic: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#eee',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 18,
    gap: cardMargin,
  },
  card: {
    borderRadius: 16,
    padding: 18,
    margin: cardMargin / 2,
    alignItems: 'flex-start',
    marginBottom: cardMargin,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 3,
  },
  iconWrap: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
  },
  cardDesc: {
    fontSize: 13,
    color: '#666',
  },
  activityHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
    marginTop: 8,
  },
  activityList: {
    gap: 10,
    marginBottom: 24,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 14,
    marginBottom: 2,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
  },
  activityIcon: {
    marginRight: 14,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  activitySubtitle: {
    fontSize: 13,
    color: '#666',
  },
});
