import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Assuming Ionicons is available from @expo/vector-icons
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function HomeScreen() {
  const [showValues, setShowValues] = useState(true);
  const insets = useSafeAreaInsets();

  const toggleShowValues = () => {
    setShowValues(!showValues);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
        <View style={styles.userInfo}>
          <Ionicons name="person-circle-outline" size={30} color="white" />
          <Text style={styles.greeting}>Olá, Gabriela</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={toggleShowValues}>
            <Ionicons name={showValues ? "eye-outline" : "eye-off-outline"} size={24} color="white" style={styles.icon} />
          </TouchableOpacity>

          <Ionicons name="help-circle-outline" size={24} color="white" style={styles.icon} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Add more components here to match the image layout */}
        <View style={styles.accountSection}>
          <View>
            <Text style={styles.accountLabel}>Conta</Text>
            <Text style={styles.balanceAmount}>{showValues ? 'R$ 1.356,98' : '********'}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>

        <View style={styles.paymentOptionsContainer}>
          {/* Grupos */}
          <View style={styles.paymentOptionWrapper}>
 <View style={styles.circularButton}>
 <Ionicons name="people-outline" size={30} color="#673AB7" />
 </View>
 <Text style={styles.paymentLabel}>Grupos</Text>
          </View>
          {/* Gastos */}
          <View style={styles.paymentOptionWrapper}>
 <View style={styles.circularButton}>
 <Ionicons name="wallet-outline" size={30} color="#673AB7" />
 </View>
 <Text style={styles.paymentLabel}>Gastos</Text>
          </View>
          {/* Gastos Previstos */}
          <View style={styles.paymentOptionWrapper}>
 <View style={[styles.circularButton, { marginBottom: 5 }]}>
 <Ionicons name="calendar-outline" size={30} color="#673AB7" />
 </View>
 <Text style={styles.paymentLabel}>Gastos Previstos</Text>
          </View>
          {/* Categorias */}
          <View style={styles.paymentOption}>
 <View style={[styles.circularButton, { marginBottom: 5 }]}>
 <Ionicons name="pricetag-outline" size={30} color="#673AB7" />
 </View>
 <Text style={styles.paymentLabel}>Categorias</Text>
          </View>
          {/* Contas */}
          {/* Removed the "Contas" button as requested */}
        </View>

        {/* Add "Meus cartões" section */}
        <View style={styles.myCardsSection}>
          <Ionicons name="card-outline" size={24} color="#000" />
          <Text style={styles.myCardsText}>Meus cartões</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
        {/* Add "Cartão de crédito" section */}
        <View style={styles.creditCardSection}>
          <View>
            <Text style={styles.creditCardTitle}>Cartão de crédito</Text>
            <Text style={styles.currentInvoiceLabel}>Fatura atual</Text>
            <Text style={styles.currentInvoiceAmount}>{showValues ? <>R$ 1.094<Text style={{ fontSize: 16, fontWeight: 'normal' }}>,80</Text></> : '********'}</Text>
            <Text style={styles.limitText}>{showValues ? 'Limite disponível: R$ 730,00' : '********'}</Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#999" />
        </View>
        {/* Add other sections as needed */}

        {/* Add a placeholder for the bottom content if needed */}
        <View style={styles.bottomContent}>
          {/* Content that should be at the bottom */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 backgroundColor: '#fff', // Assuming a white background for the rest of the screen
  },
  scrollViewContent: {
    paddingBottom: 20, // Add some padding at the bottom of the scroll view
  },
  header: {
    backgroundColor: '#673AB7', // Using a purple color, you can adjust this
    padding: 20, // Keep horizontal padding
    flexDirection: 'row', // Explicitly set flexDirection to 'row'
    paddingBottom: 40, // Increased bottom padding

  },
  userInfo: {
    flexDirection: 'row',
  },
  greeting: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  icons: {
    flexDirection: 'row', // Set flexDirection to row for horizontal alignment
    alignItems: 'center', // Keep vertical alignment centered
  },
  icon: {
    marginLeft: 20, // Increased spacing between icons
  },
  accountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    marginBottom: 10, // Space after account section
  },
  accountLabel: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 22, // Slightly reduced font size to match the image
    fontWeight: 'bold',
    color: '#000', // Black color for balance
    marginTop: 5, // Added top margin for separation
  },
  paymentOptionsContainer: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginBottom: 10, // Space between payment options and cards section
    flexDirection: 'row',
    justifyContent: 'space-between', // Use space-between to distribute space
    alignItems: 'flex-start', // Align items to the top
    paddingHorizontal: 15, // Increased horizontal padding for more spacing
  },
  paymentOptionWrapper: {
    alignItems: "center",
  },
  circularButton: {
    backgroundColor: '#EDEEF3', // Added background color
    borderRadius: 30, // Adjusted border radius to make it circular
    width: 60, // Set a fixed width
    height: 60, // Set a fixed height
    justifyContent: 'center', // Center icon horizontally
    alignItems: 'center', // Center icon vertically

  },
  paymentLabel: {    
    fontSize: 10, // Reduced font size for better fit
    marginTop: 5,
    color: '#333',
    textAlign: 'center', // Center the text under the icon
  },  
  myCardsSection: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15, // Adjusted padding
    borderRadius: 8, // Rounded corners
    borderWidth: 1, // Added border
    marginHorizontal: 15,
    marginBottom: 10,
  },
  myCardsText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
    flex: 1, // Allow text to take up available space
  },
  creditCardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15, // Adjusted padding
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  creditCardTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  currentInvoiceLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  currentInvoiceAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E91E63', // A color for the invoice amount, similar to some card designs
  },
  limitText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  bottomContent: {
    padding: 20,
  },
});