import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = () => (
  <View style={styles.footer}>
    <View style={styles.sections}>
      <View style={styles.section}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <FontAwesome name="calendar" size={22} color="#ec4899" style={{ marginRight: 6 }} />
          <Text style={styles.sectionTitle}>Event Easy</Text>
        </View>
        <Text style={styles.sectionText}>Making event discovery simple, personalized, and fun.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore</Text>
        <FooterLink text="All Events" />
        <FooterLink text="Popular Events" />
        <FooterLink text="Nearby Events" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Organizers</Text>
        <FooterLink text="Create Event" />
        <FooterLink text="Pricing" />
        <FooterLink text="Support" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Company</Text>
        <FooterLink text="About Us" />
        <FooterLink text="Contact" />
        <FooterLink text="Privacy Policy" />
      </View>
    </View>
    <View style={styles.copyright}>
      <Text style={styles.copyrightText}>
        © {new Date().getFullYear()} Event Easy. All rights reserved.
      </Text>
    </View>
  </View>
);

const FooterLink = ({ text, url }) => (
  <TouchableOpacity onPress={() => url && Linking.openURL(url)}>
    <Text style={styles.link}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#1f2937',
    paddingVertical: 32,
    paddingHorizontal: 12,
    marginTop: 32,
  },
  sections: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  section: {
    width: '48%',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  sectionText: {
    color: '#d1d5db',
    fontSize: 13,
  },
  link: {
    color: '#d1d5db',
    fontSize: 13,
    marginBottom: 4,
  },
  copyright: {
    borderTopWidth: 1,
    borderTopColor: '#374151',
    paddingTop: 16,
    alignItems: 'center',
  },
  copyrightText: {
    color: '#d1d5db',
    fontSize: 13,
  },
});

export default Footer;