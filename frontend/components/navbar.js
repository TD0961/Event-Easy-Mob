import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Platform, 
  Modal, 
  ScrollView 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);

  const menuLinks = [
    { label: 'Features', anchor: '#features' },
    { label: 'Events', anchor: '#events' },
    { label: 'How It Works', anchor: '#how-it-works' },
    { label: 'Testimonials', anchor: '#testimonials' },
  ];

  return (
    <View style={[styles.navbarContainer, { backgroundColor: darkMode ? '#1f2937' : '#fff' }]}>
      {/* Navbar Row */}
      <View style={styles.navbar}>
        {/* Logo */}
        <View style={styles.logoRow}>
          <FontAwesome name="calendar" size={24} color="#ea580c" style={{ marginRight: 8 }} />
          <Text style={styles.logoText}>Event Easy</Text>
        </View>

        {/* Dark Mode Toggle */}
        <View style={styles.centerRow}>
          <TouchableOpacity onPress={toggleDarkMode} style={styles.iconBtn}>
            <FontAwesome 
              name={darkMode ? "sun-o" : "moon-o"} 
              size={22} 
              color={darkMode ? "#ea580c" : "#6b7280"} 
            />
          </TouchableOpacity>
        </View>

        {/* Search and Menu Toggle */}
        <View style={styles.rightRow}>
          <TouchableOpacity onPress={() => setShowSearchBar(!showSearchBar)} style={styles.iconBtn}>
            <FontAwesome name="search" size={22} color={darkMode ? "#d1d5db" : "#ea580c"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMobileMenuOpen(true)} style={styles.iconBtn}>
            <FontAwesome name="bars" size={24} color={darkMode ? "#d1d5db" : "#374151"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      {showSearchBar && (
        <View style={[styles.searchContainer, { backgroundColor: darkMode ? '#1f2937' : '#fff' }]}>
          <FontAwesome name="search" size={18} color="#ea580c" style={{ marginRight: 6, marginLeft: 16 }} />
          <TextInput
            style={[styles.input, { color: darkMode ? '#d1d5db' : '#374151' }]}
            placeholder="Search events..."
            placeholderTextColor="#ea580c"
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
          />
          <TouchableOpacity onPress={() => setShowSearchBar(false)} style={styles.closeBtn}>
            <FontAwesome name="times" size={22} color="#ea580c" />
          </TouchableOpacity>
        </View>
      )}

      {/* Mobile Menu Modal */}
      <Modal 
        visible={mobileMenuOpen} 
        animationType="slide" 
        transparent
        onRequestClose={() => setMobileMenuOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalMenu, darkMode && styles.modalMenuDark]}>
            <View style={styles.menuHeader}>
              <Text style={[styles.logoText, darkMode && styles.logoTextDark]}>Menu</Text>
              <TouchableOpacity onPress={() => setMobileMenuOpen(false)} style={styles.iconBtn}>
                <FontAwesome name="times" size={24} color="#ea580c" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {menuLinks.map((link) => (
                <TouchableOpacity 
                  key={link.label} 
                  onPress={() => setMobileMenuOpen(false)} 
                  style={styles.menuLinkMobile}
                >
                  <Text style={[styles.menuLinkText, darkMode && styles.menuLinkTextDark]}>
                    {link.label}
                  </Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={toggleDarkMode} style={styles.menuLinkMobile}>
                <Text style={[styles.menuLinkText, darkMode && styles.menuLinkTextDark]}>
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => {
                  setShowSearchBar(true);
                  setMobileMenuOpen(false);
                }} 
                style={styles.menuLinkMobile}
              >
                <Text style={[styles.menuLinkText, darkMode && styles.menuLinkTextDark]}>Search</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    zIndex: 100,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 48 : 24,
    paddingBottom: 12,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6', // Default light mode color
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ea580c',
  },
  logoTextDark: {
    color: '#ea580c',
  },
  centerRow: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBtn: {
    marginHorizontal: 4,
    padding: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ea580c',
    borderRadius: 24,
    padding: 8,
    marginTop: 8,
    marginHorizontal: 16,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  closeBtn: {
    padding: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalMenu: {
    backgroundColor: '#fff',
    padding: 24,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    minHeight: 300,
  },
  modalMenuDark: {
    backgroundColor: '#111827',
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  menuLinkMobile: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  menuLinkText: {
    color: '#ea580c',
    fontWeight: '500',
    fontSize: 15,
  },
  menuLinkTextDark: {
    color: '#ea580c',
  },
});

export default Navbar;