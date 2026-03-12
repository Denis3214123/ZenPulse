import React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';

import { useAuth } from '../context/AuthContext';

type Meditation = {
  id: string;
  title: string;
  duration: string;
  image: string;
};

type MeditationsScreenProps = {
  navigation: {
    navigate: (screen: 'Paywall') => void;
  };
};

const MEDITATIONS: Meditation[] = [
  {
    id: '1',
    title: 'Утреннее спокойствие',
    duration: '10 мин',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
  },
  {
    id: '2',
    title: 'Глубокий сон',
    duration: '15 мин',
    image: 'https://images.pexels.com/photos/37351/meditate-meditation-concentrate-meditating.jpg',
  },
  {
    id: '3',
    title: 'Фокус и продуктивность',
    duration: '12 мин',
    image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg',
  },
  {
    id: '4',
    title: 'Антистресс-перезагрузка',
    duration: '8 мин',
    image: 'https://images.pexels.com/photos/3822623/pexels-photo-3822623.jpeg',
  },
  {
    id: '5',
    title: 'Вечерняя благодарность',
    duration: '14 мин',
    image: 'https://images.pexels.com/photos/3822620/pexels-photo-3822620.jpeg',
  },
  {
    id: '6',
    title: 'Мягкое восстановление',
    duration: '20 мин',
    image: 'https://images.pexels.com/photos/3822624/pexels-photo-3822624.jpeg',
  },
];

export default function MeditationsScreen({ navigation }: MeditationsScreenProps) {
  const { isSubscribed } = useAuth();
  const theme = useTheme();

  const lastThreeStartIndex = Math.max(MEDITATIONS.length - 3, 0);

  const renderItem = ({ item, index }: { item: Meditation; index: number }) => {
    const isLocked = !isSubscribed && index >= lastThreeStartIndex;

    const handlePress = () => {
      if (isLocked) {
        navigation.navigate('Paywall');
        return;
      }
      // здесь позже можно будет запускать медитацию
    };

    return (
      <Card
        mode="elevated"
        style={[
          styles.card,
          isLocked && { opacity: 0.4, backgroundColor: theme.colors.surfaceDisabled },
        ]}
        onPress={handlePress}
      >
        <View style={styles.cardContent}>
          <Image source={{ uri: item.image }} style={styles.thumbnail} />
          <View style={styles.info}>
            <Text variant="titleMedium" numberOfLines={1}>
              {item.title}
            </Text>
            <Text variant="bodySmall" style={styles.duration}>
              {item.duration}
            </Text>
          </View>
          {isLocked && (
            <View style={styles.lockBadge}>
              <Text style={styles.lockIcon}>🔒</Text>
            </View>
          )}
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Медитации
      </Text>

      <FlatList
        data={MEDITATIONS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    marginBottom: 12,
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 16,
    gap: 10,
  },
  card: {
    borderRadius: 16,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 12,
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#222',
  },
  info: {
    flex: 1,
  },
  duration: {
    opacity: 0.7,
    marginTop: 2,
  },
  lockBadge: {
    marginLeft: 8,
  },
  lockIcon: {
    fontSize: 18,
  },
});
