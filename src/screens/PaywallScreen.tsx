import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card, Text, useTheme, Chip } from 'react-native-paper';

type PaywallScreenProps = {
  navigation: {
    navigate: (screen: 'Meditations') => void;
  };
};

export default function PaywallScreen({ navigation }: PaywallScreenProps) {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          Откройте премиум-медитации
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Расслабляйтесь, перезагружайтесь и оставайтесь в балансе каждый день.
        </Text>

        <View style={styles.benefitsContainer}>
          <Card mode="contained" style={styles.benefitsCard}>
            <Card.Content>
              <Text variant="titleMedium" style={styles.benefitsTitle}>
                Преимущества подписки
              </Text>
              <View style={styles.benefitRow}>
                <Text style={styles.benefitIcon}>🕯️</Text>
                <Text variant="bodyMedium">Ежедневные новые медитации</Text>
              </View>
              <View style={styles.benefitRow}>
                <Text style={styles.benefitIcon}>✨</Text>
                <Text variant="bodyMedium">Эксклюзивный контент</Text>
              </View>
              <View style={styles.benefitRow}>
                <Text style={styles.benefitIcon}>📥</Text>
                <Text variant="bodyMedium">Офлайн-доступ</Text>
              </View>
            </Card.Content>
          </Card>
        </View>

        <View style={styles.plansContainer}>
          <Card mode="outlined" style={styles.planCard}>
            <Card.Content style={styles.planContent}>
              <Text variant="titleMedium">Месячный</Text>
              <Text variant="headlineSmall" style={styles.price}>
                $9.99
              </Text>
              <Text variant="bodySmall">в месяц, отмена в любое время</Text>
            </Card.Content>
          </Card>

          <Card
            mode="contained"
            style={[
              styles.planCard,
              styles.bestPlanCard,
              { backgroundColor: theme.colors.primaryContainer },
            ]}
          >
            <Card.Content style={styles.planContent}>
              <View style={styles.bestLabelRow}>
                <Chip compact selectedColor={theme.colors.onPrimary} style={styles.bestChip}>
                  Самый выгодный
                </Chip>
              </View>
              <Text variant="titleMedium">Годовой</Text>
              <Text variant="headlineSmall" style={styles.price}>
                $79.99
              </Text>
              <Text variant="bodySmall">за год • экономия по сравнению с месяцем</Text>
            </Card.Content>
          </Card>
        </View>

        <View style={styles.ctaContainer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Meditations')}
            contentStyle={styles.ctaContent}
            style={styles.ctaButton}
          >
            Попробовать бесплатно
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#050816',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 16,
  },
  title: {
    marginTop: 8,
    fontWeight: '700',
  },
  subtitle: {
    opacity: 0.8,
  },
  benefitsContainer: {
    marginTop: 8,
  },
  benefitsCard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  benefitsTitle: {
    marginBottom: 8,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  benefitIcon: {
    fontSize: 18,
  },
  plansContainer: {
    marginTop: 8,
    gap: 12,
  },
  planCard: {
    borderRadius: 18,
  },
  planContent: {
    gap: 4,
  },
  bestPlanCard: {
    borderWidth: 0,
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  bestLabelRow: {
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bestChip: {
    borderRadius: 999,
  },
  price: {
    fontWeight: '700',
  },
  ctaContainer: {
    marginTop: 'auto',
  },
  ctaButton: {
    borderRadius: 999,
  },
  ctaContent: {
    paddingVertical: 10,
  },
});
