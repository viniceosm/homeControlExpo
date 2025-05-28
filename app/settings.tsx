import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  const handlePress = (item: string) => {
    console.log(`Pressed: ${item}`);
    // Implement navigation or action for each item
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose}> {/* Implement close functionality */}
          <Ionicons name="close" size={28} color="#000" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          {/* Placeholder for avatar icon */}
          <Ionicons name="person-circle-outline" size={50} color="#673AB7" />
          <Text style={styles.userName}>Philipe</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Editar dados do perfil')}>
        <View style={styles.menuItemContent}>
          <Ionicons name="person-outline" size={24} color="#000" />
          <Text style={styles.menuItemText}>Editar dados do perfil</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handlePress('Notificações')}>
        <View style={styles.menuItemContent}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <Text style={styles.menuItemText}>Notificações</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => router.replace('/')}> {/* Adjusted onPress to use router.replace */}
        <View style={styles.menuItemContent}>
          <Ionicons name="log-out-outline" size={24} color="red" />
          <Text style={[styles.menuItemText, { color: 'red' }]}>Sair da conta</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#ccc" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10, // Adjusted padding vertically
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  userName: {
    fontSize: 20,
    marginLeft: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 18,
    marginLeft: 15,
  },
});