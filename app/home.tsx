import { Ionicons } from '@expo/vector-icons'; // Assuming Ionicons is available from @expo/vector-icons
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Add useFocusEffect
import { useRouter } from 'expo-router';
import { useEffect, useState, useCallback } from 'react'; // Add useCallback
import { BackHandler, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Removed ParallaxScrollView import
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const [showValues, setShowValues] = useState(true);
  const insets = useSafeAreaInsets();

  const toggleShowValues = () => {
    setShowValues(!showValues);
  };

  const navigation = useNavigation();
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const handleBackPress = () => {
        const currentRouteName = navigation.getState()?.routes[navigation.getState()?.index]?.name;
        
        // Only apply custom back handling if this screen is focused
        // and navigation state is available.
        if (navigation.isFocused() && currentRouteName === 'home') {
          // If on home screen, and can't go back further in this stack, effectively prevent back.
          // Or, if it's the initial screen in the stack, canGoBack might be false.
          // The goal is to prevent exiting the app if home is the first screen or only screen in stack.
          // If there are screens to go back to *within the same navigator stack*, allow it.
          // This logic might need adjustment based on desired behavior for "preventing back from home".
          // For now, let's assume if it's 'home', we want to prevent hardware back.
          return true; // Prevent back action
        }
        // If not on the 'home' screen (according to this navigator's state)
        // or if the screen is not focused, allow default back behavior.
        return false; 
      };

      const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        backHandler.remove();
      };
    }, [navigation]) // navigation is a dependency
  );
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={[
          styles.header,
          {
            paddingTop: insets.top + 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}
      >
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => router.push('/settings')}>
            <Ionicons
              name="person-circle-outline"
              size={30}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.greeting}>Olá, Vinicius</Text>
        </View>
  
        <View style={styles.icons}>
          <TouchableOpacity onPress={toggleShowValues} style={styles.icon}>
            <Ionicons
              name={showValues ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <Ionicons name="help-circle-outline" size={24} color="white" style={styles.icon} />
        </View>
      </View>
  
      {/* SCROLLABLE CONTENT */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Conta Section */}
        <View style={styles.accountSection}>
          {/* Left side: Account Label and Balance Info */}
          <View style={styles.accountInfo}>
            <Text style={styles.accountLabel}>Conta</Text>
            <Text style={styles.balanceAmount}>
              {showValues ? 'R$ 1.356,98' : '********'}
            </Text>
          </View>
          {/* Right side: Chevron Icon */}
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
        {/* Botões redondos */}
        <View style={styles.paymentOptionsContainer}>
          <View style={styles.paymentOptionWrapper}>
            <View style={styles.circularButton}>
              <Ionicons name="people-outline" size={30} color="#673AB7" />
            </View>
            <Text style={styles.paymentLabel}>Grupos</Text>
          </View>

          <TouchableOpacity style={styles.paymentOptionWrapper} onPress={() => router.push('/expenses')}>
            {/* Conteúdo do item Gastos: ícone e texto */}
            <View style={styles.circularButton}>
              <Ionicons name="wallet-outline" size={30} color="#673AB7" />
            </View>
            <Text style={styles.paymentLabel}>Gastos</Text>
          </TouchableOpacity>
  
          <View style={styles.paymentOptionWrapper}>
            <View style={[styles.circularButton, { marginBottom: 5 }]}>
              <Ionicons name="calendar-outline" size={30} color="#673AB7" />
            </View>
            <Text style={styles.paymentLabel}>Gastos Previstos</Text>
          </View>
  
          <View style={styles.paymentOptionWrapper}>
            <View style={[styles.circularButton, { marginBottom: 5 }]}>
              <Ionicons name="pricetag-outline" size={30} color="#673AB7" />
            </View>
            <Text style={styles.paymentLabel}>Categorias</Text>
          </View>
        </View>
  
        {/* Meus cartões */}
        <View style={styles.myCardsSection}>
          <Ionicons name="card-outline" size={24} color="#000" />
          <Text style={styles.myCardsText}>Meus cartões</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </View>
  
        {/* Cartão de crédito */}
        <View style={styles.creditCardSection}>
          <View>
            <Text style={styles.creditCardTitle}>Cartão de crédito</Text>
            <Text style={styles.currentInvoiceLabel}>Fatura atual</Text>
            {showValues ? (
              <Text style={styles.currentInvoiceAmount}>R$ 1.094,80</Text>
            ) : (
              <Text style={styles.currentInvoiceAmount}>********</Text>
            )}
            <Text style={styles.limitText}>
              {showValues ? 'Limite disponível: R$ 730,00' : '********'}
            </Text>
          </View>
          <Ionicons name="chevron-forward-outline" size={20} color="#999" />
        </View>
  
        {/* Espaço final */}
        <View style={styles.bottomContent}></View>
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
    fontSize: 16,
    marginTop: 5,
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
    // marginBottom: 10, // Space after account section
  },
  accountInfo: {
    // Styles for the container of account label and balance
    // Flex direction is column by default, which is suitable here
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
    justifyContent: 'space-around', // Use space-around for even distribution
    alignItems: 'flex-start', // Align items to the top
    paddingHorizontal: 15, // Increased horizontal padding for more spacing
  },
  paymentOptionWrapper: {
    alignItems: "center",
  },
  circularButton: {
    backgroundColor: '#EDEEF3', // Added background color
    borderRadius: 30, // Adjusted border radius to make it circular
    width: 50, // Set a fixed width
    height: 50, // Set a fixed height
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