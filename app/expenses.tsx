import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function ExpensesScreen() {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="help-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Options Carousel Placeholder */}
        <View style={styles.optionsCarouselPlaceholder}>
          <Text style={styles.placeholderText}>Options Carousel Placeholder</Text>
          {/* Implement your horizontal list/carousel here */}
        </View>

        {/* Transaction List */}
        <View style={styles.transactionList}>
          {/* Today's Transactions */}
          <Text style={styles.dateHeader}>Hoje</Text>
          <TouchableOpacity style={styles.transactionItem}>
            <View style={styles.transactionIconPlaceholder}>
              <Ionicons name="build-outline" size={24} color="gray" />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Nome do Estabelecimento</Text>
              <Text style={styles.transactionTime}>Horário</Text>
            </View>
            <Text style={styles.transactionAmount}>R$ XX,XX</Text>
          </TouchableOpacity>

          {/* You can add more transaction items here */}

          {/* Yesterday's Transactions */}
          <Text style={styles.dateHeader}>Ontem</Text>
          <TouchableOpacity style={styles.transactionItem}>
             <View style={styles.transactionIconPlaceholder}>
              <Ionicons name="cart-outline" size={24} color="gray" />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionName}>Nome do Estabelecimento</Text>
              <Text style={styles.transactionTime}>Horário</Text>
            </View>
            <Text style={styles.transactionAmount}>R$ XX,XX</Text>
          </TouchableOpacity>

          {/* You can add more transaction items here */}

          {/* Add sections for other dates as needed */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 16,
  },
  scrollView: {
    flex: 1,
  },
  optionsCarouselPlaceholder: {
    height: 100, // Adjust height as needed
    backgroundColor: '#f0f0f0', // Placeholder background
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
  },
  transactionList: {
    paddingHorizontal: 16,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
   transactionIconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0', // Placeholder background
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1, // Allow details to take available space
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});