import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Modal, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');

  const menuLinks = [
    { label: 'Features', anchor: '#features' },
    { label: 'Events', anchor: '#events' },
    { label: 'How It Works', anchor: '#how-it-works' },
    { label: 'Testimonials', anchor: '#testimonials' },
  ];

  return (
    <View style={[styles.navbar, darkMode && styles.navbarDark]}>
      {/* Logo */}
      <View style={styles.logoRow}>
        <FontAwesome name="calendar" size={24} color="#ea580c" style={{ marginRight: 8 }} />
        <Text style={[styles.logoText, darkMode && styles.logoTextDark]}>Event Easy</Text>
      </View>

      {/* Desktop Search (show on tablets/large screens) */}
      {!searchOpen && (
        <View style={styles.searchRow}>
          <FontAwesome name="search" size={18} color="#ea580c" style={{ marginRight: 6 }} />
          <TextInput
            style={[styles.input, darkMode && styles.inputDark]}
            placeholder="Search events..."
            placeholderTextColor={darkMode ? "#fbbf24" : "#ea580c"}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FontAwesome name="map-marker" size={18} color="#ea580c" style={{ marginHorizontal: 6 }} />
          <TextInput
            style={[styles.input, styles.inputLocation, darkMode && styles.inputDark]}
            placeholder="Location"
            placeholderTextColor={darkMode ? "#fbbf24" : "#ea580c"}
            value={locationQuery}
            onChangeText={setLocationQuery}
          />
          <TouchableOpacity style={styles.searchBtn}>
            <FontAwesome name="search" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      {/* Right Items */}
      <View style={styles.rightRow}>
        {/* Desktop Menu Links */}
        <View style={styles.menuLinks}>
          {menuLinks.map(link => (
            <TouchableOpacity key={link.label} onPress={() => {}} style={styles.menuLink}>
              <Text style={[styles.menuLinkText, darkMode && styles.menuLinkTextDark]}>{link.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Dark Mode Toggle */}
        <TouchableOpacity onPress={toggleDarkMode} style={styles.iconBtn}>
          <FontAwesome name={darkMode ? "sun-o" : "moon-o"} size={22} color={darkMode ? "#fbbf24" : "#374151"} />
        </TouchableOpacity>
        {/* Hamburger */}
        <TouchableOpacity onPress={() => setMobileMenuOpen(true)} style={styles.iconBtn}>
          <FontAwesome name="bars" size={24} color={darkMode ? "#fff" : "#374151"} />
        </TouchableOpacity>
      </View>

      {/* Mobile Search Modal */}
      <Modal visible={searchOpen} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, darkMode && styles.modalContentDark]}>
            <View style={styles.modalSearchRow}>
              <FontAwesome name="search" size={18} color="#ea580c" style={{ marginRight: 6 }} />
              <TextInput
                style={[styles.input, darkMode && styles.inputDark]}
                placeholder="Search events..."
                placeholderTextColor={darkMode ? "#fbbf24" : "#ea580c"}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <TouchableOpacity onPress={() => setSearchOpen(false)} style={styles.iconBtn}>
                <FontAwesome name="times" size={22} color="#ea580c" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Mobile Menu Modal */}
      <Modal visible={mobileMenuOpen} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalMenu, darkMode && styles.modalMenuDark]}>
            <View style={styles.menuHeader}>
              <Text style={[styles.logoText, darkMode && styles.logoTextDark]}>Menu</Text>
              <TouchableOpacity onPress={() => setMobileMenuOpen(false)} style={styles.iconBtn}>
                <FontAwesome name="times" size={24} color="#ea580c" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {menuLinks.map(link => (
                <TouchableOpacity key={link.label} onPress={() => setMobileMenuOpen(false)} style={styles.menuLinkMobile}>
                  <Text style={[styles.menuLinkText, darkMode && styles.menuLinkTextDark]}>{link.label}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={toggleDarkMode} style={styles.menuLinkMobile}>
                <Text style={[styles.menuLinkText, darkMode && styles.menuLinkTextDark]}>
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSearchOpen(true)} style={styles.menuLinkMobile}>
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
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 48 : 24,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  navbarDark: {
    backgroundColor: '#111827',
    borderBottomColor: '#374151',
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
    color: '#fbbf24',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff7ed',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#fbbf24',
    paddingHorizontal: 8,
    marginHorizontal: 8,
    flex: 1,
    minWidth: 120,
    maxWidth: 320,
  },
  input: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#374151',
    backgroundColor: 'transparent',
  },
  inputDark: {
    color: '#fbbf24',
  },
  inputLocation: {
    minWidth: 60,
    maxWidth: 100,
  },
  searchBtn: {
    backgroundColor: '#ea580c',
    borderRadius: 16,
    padding: 6,
    marginLeft: 6,
  },
  rightRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    display: Platform.OS === 'web' ? 'flex' : 'none', // Hide on mobile
  },
  menuLink: {
    marginHorizontal: 6,
  },
  menuLinkText: {
    color: '#ea580c',
    fontWeight: '500',
    fontSize: 15,
  },
  menuLinkTextDark: {
    color: '#fbbf24',
  },
  iconBtn: {
    marginHorizontal: 4,
    padding: 4,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  modalContentDark: {
    backgroundColor: '#1f2937',
  },
  modalSearchRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default Navbar;