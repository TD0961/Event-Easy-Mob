import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const images = [
  require('../assets/assets/bg_1.jpg'),
  require('../assets/assets/bg_2.webp'),
  require('../assets/assets/bg_3.jpg'),
];

const features = [
  {
    icon: <FontAwesome name="bolt" size={28} color="#ea580c" />,
    title: "Quick Discovery",
    description: "Find events tailored to your interests in seconds with our smart recommendation engine."
  },
  {
    icon: <FontAwesome name="bell" size={28} color="#ea580c" />,
    title: "Real-Time Updates",
    description: "Get instant notifications about event changes, cancellations, or new tickets available."
  },
  {
    icon: <FontAwesome name="map-marker" size={28} color="#ea580c" />,
    title: "Location-Based",
    description: "See only events near you or search any location with our interactive maps."
  },
  {
    icon: <FontAwesome name="users" size={28} color="#ea580c" />,
    title: "Social Features",
    description: "See which friends are going, share events, and connect with like-minded people."
  },
  {
    icon: <FontAwesome name="lock" size={28} color="#ea580c" />,
    title: "Secure Booking",
    description: "100% secure ticketing with verified organizers and fraud protection."
  },
  {
    icon: <FontAwesome name="star" size={28} color="#ea580c" />,
    title: "Ratings & Reviews",
    description: "Make informed decisions with authentic attendee feedback."
  }
];

const testimonials = [
  {
    quote: "Event Easy has completely changed how I find things to do. The personalized recommendations are spot on!",
    name: "Sarah J.",
    role: "Music Enthusiast"
  },
  {
    quote: "As an event organizer, Event Easy has helped me reach the right audience. Ticket sales increased by 40%!",
    name: "Michael T.",
    role: "Event Organizer"
  }
];

// Example events data
const events = [
  {
    image: require('../assets/assets/bg_1.jpg'),
    date: "June 15, 2025",
    title: "Summer Music Festival",
    location: "Central Park, New York",
    price: "49.99"
  },
  {
    image: require('../assets/assets/bg_2.webp'),
    date: "June 22, 2025",
    title: "Tech Conference 2025",
    location: "Convention Center, San Francisco",
    price: "199.99"
  },
  {
    image: require('../assets/assets/bg_3.jpg'),
    date: "July 5, 2025",
    title: "Food & Wine Expo",
    location: "Downtown, Chicago",
    price: "29.99"
  }
];

export default function HomeScreen({ navigation }) {
  const [bgImage, setBgImage] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

return (
    <View style={[styles.container, darkMode && styles.containerDark, { flex: 1 }]}>
        <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
        {/* Navbar should NOT scroll */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* Scrollable content */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {/* Hero Section */}
            <View style={[styles.heroSection, darkMode && styles.heroSectionDark]}>
                <Image source={images[bgImage]} style={styles.heroImage} />
                <View style={styles.overlay} />
                <View style={styles.heroContent}>
                    <Text style={[styles.heroTitle, darkMode && styles.heroTitleDark]}>
                        Discover Amazing Events Near You
                    </Text>
                    <Text style={[styles.heroSubtitle, darkMode && styles.heroSubtitleDark]}>
                        Event Easy connects you with the best concerts, workshops, sports games, and more in your area.
                    </Text>
                    <View style={styles.heroButtons}>
                        <TouchableOpacity
                            style={[styles.findEventsBtn, darkMode && styles.findEventsBtnDark]}
                            onPress={() => navigation.navigate('LoginAttendee')}
                        >
                            <Text style={[styles.findEventsText, darkMode && styles.findEventsTextDark]}>Find Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.organizeBtn, darkMode && styles.organizeBtnDark]}
                            onPress={() => navigation.navigate('LoginOrganizer')}
                        >
                            <Text style={[styles.organizeText, darkMode && styles.organizeTextDark]}>Organize Event</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Features Section */}
            <Text style={[styles.sectionTitle, darkMode && styles.sectionTitleDark]}>Why Choose Event Easy</Text>
            <View style={styles.featuresGrid}>
                {features.map((feature, idx) => (
                    <View key={idx} style={[styles.featureCard, darkMode && styles.featureCardDark]}>
                        {feature.icon}
                        <Text style={[styles.featureTitle, darkMode && styles.featureTitleDark]}>{feature.title}</Text>
                        <Text style={[styles.featureDesc, darkMode && styles.featureDescDark]}>{feature.description}</Text>
                    </View>
                ))}
            </View>

            {/* How It Works Section */}
            <Text style={[styles.sectionTitle, darkMode && styles.sectionTitleDark]}>How It Works</Text>
            <View style={styles.howItWorks}>
                {[
                    { title: "Create Your Profile", description: "Tell us your interests and preferences to get personalized recommendations." },
                    { title: "Browse Events", description: "Explore thousands of events near you or search by category, date, or location." },
                    { title: "Book Tickets", description: "Secure your spot with our easy checkout process and mobile tickets." }
                ].map((step, idx) => (
                    <View key={idx} style={[styles.stepCard, darkMode && styles.stepCardDark]}>
                        <View style={[styles.stepCircle, darkMode && styles.stepCircleDark]}>
                            <Text style={[styles.stepNum, darkMode && styles.stepNumDark]}>{idx + 1}</Text>
                        </View>
                        <Text style={[styles.stepTitle, darkMode && styles.stepTitleDark]}>{step.title}</Text>
                        <Text style={[styles.stepDesc, darkMode && styles.stepDescDark]}>{step.description}</Text>
                    </View>
                ))}
            </View>

            {/* Popular Events Section */}
            <Text style={[styles.sectionTitle, darkMode && styles.sectionTitleDark]}>Popular Events Near You</Text>
            <View style={styles.eventsGrid}>
                {events.map((event, idx) => (
                    <View key={idx} style={[styles.eventCard, darkMode && styles.eventCardDark]}>
                        <Image source={event.image} style={styles.eventImage} />
                        <View style={styles.eventContent}>
                            <View style={styles.eventRow}>
                                <Feather name="calendar" size={16} color={darkMode ? "#fbbf24" : "#ea580c"} style={{ marginRight: 6 }} />
                                <Text style={[styles.eventDate, darkMode && styles.eventDateDark]}>{event.date}</Text>
                            </View>
                            <Text style={[styles.eventTitle, darkMode && styles.eventTitleDark]}>{event.title}</Text>
                            <View style={styles.eventRow}>
                                <Feather name="map-pin" size={16} color={darkMode ? "#fbbf24" : "#ea580c"} style={{ marginRight: 6 }} />
                                <Text style={[styles.eventLocation, darkMode && styles.eventLocationDark]}>{event.location}</Text>
                            </View>
                            <Text style={[styles.eventPrice, darkMode && styles.eventPriceDark]}>From ${event.price}</Text>
                            <TouchableOpacity style={[styles.eventBtn, darkMode && styles.eventBtnDark]}>
                                <Text style={[styles.eventBtnText, darkMode && styles.eventBtnTextDark]}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </View>

            {/* Testimonials Section */}
            <Text style={[styles.sectionTitle, darkMode && styles.sectionTitleDark]}>What Our Users Say</Text>
            <View style={styles.testimonials}>
                {testimonials.map((t, idx) => (
                    <View key={idx} style={[styles.testimonialCard, darkMode && styles.testimonialCardDark]}>
                        <Text style={[styles.testimonialQuote, darkMode && styles.testimonialQuoteDark]}>"{t.quote}"</Text>
                        <Text style={[styles.testimonialName, darkMode && styles.testimonialNameDark]}>{t.name}</Text>
                        <Text style={[styles.testimonialRole, darkMode && styles.testimonialRoleDark]}>{t.role}</Text>
                    </View>
                ))}
            </View>

            {/* CTA Section */}
            <View style={[styles.ctaSection, darkMode && styles.ctaSectionDark]}>
                <Text style={[styles.ctaTitle, darkMode && styles.ctaTitleDark]}>Ready to Experience the Difference?</Text>
                <Text style={[styles.ctaSubtitle, darkMode && styles.ctaSubtitleDark]}>
                    Join thousands of event organizers and attendees using Event Easy
                </Text>
                <TouchableOpacity style={[styles.ctaBtn, darkMode && styles.ctaBtnDark]}>
                    <Text style={[styles.ctaBtnText, darkMode && styles.ctaBtnTextDark]}>Get Started Today</Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <Footer darkMode={darkMode} />
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerDark: {
    backgroundColor: '#111827'
  },
  heroSection: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  heroSectionDark: {
    backgroundColor: '#1f2937'
  },
  heroImage: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  heroContent: {
    zIndex: 2,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  heroTitleDark: {
    color: '#fff'
  },
  heroSubtitle: {
    color: '#e0e7ff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  heroSubtitleDark: {
    color: '#fff'
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 12
  },
  findEventsBtn: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
    marginRight: 8
  },
  findEventsBtnDark: {
    backgroundColor: '#374151'
  },
  findEventsText: {
    color: '#ea580c',
    fontWeight: 'bold'
  },
  findEventsTextDark: {
    color: '#fff' 
  },
  organizeBtn: {
    backgroundColor: '#ea580c',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24
  },
  organizeBtnDark: {
    backgroundColor: '#fbbf24'
  },
  organizeText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  organizeTextDark: {
    color: '#1f2937'
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 16,
    textAlign: 'center',
    color: '#ea580c'
  },
  sectionTitleDark: {
    color: '#fbbf24'
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  featureCard: {
    width: '45%',
    backgroundColor: '#f3f4f6',
    margin: 8,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center'
  },
  featureCardDark: {
    backgroundColor: '#374151'
  },
  featureTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    color: '#ea580c'
  },
  featureTitleDark: {
    color: '#fbbf24'
  },
  featureDesc: {
    color: '#374151',
    textAlign: 'center',
    marginTop: 4
  },
  featureDescDark: {
    color: '#e5e7eb'
  },
  howItWorks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  stepCard: {
    width: '30%',
    minWidth: 110,
    backgroundColor: '#fff7ed',
    margin: 8,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center'
  },
  stepCardDark: {
    backgroundColor: '#374151'
  },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ea580c',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  stepCircleDark: {
    backgroundColor: '#fbbf24'
  },
  stepNum: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  stepNumDark: {
    color: '#1f2937'
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
    color: '#ea580c',
    textAlign: 'center'
  },
  stepTitleDark: {
    color: '#fbbf24'
  },
  stepDesc: {
    color: '#374151',
    textAlign: 'center',
    fontSize: 13
  },
  stepDescDark: {
    color: '#e5e7eb'
  },
  // Events Section
  eventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  eventCard: {
    width: '90%',
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden'
  },
  eventCardDark: {
    backgroundColor: '#23272f'
  },
  eventImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  eventContent: {
    padding: 16
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  eventDate: {
    color: '#ea580c',
    fontWeight: 'bold'
  },
  eventDateDark: {
    color: '#fbbf24'
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    color: '#23272f'
  },
  eventTitleDark: {
    color: '#fbbf24'
  },
  eventLocation: {
    color: '#6b7280'
  },
  eventLocationDark: {
    color: '#d1d5db'
  },
  eventPrice: {
    color: '#059669',
    fontWeight: 'bold',
    marginVertical: 6
  },
  eventPriceDark: {
    color: '#34d399'
  },
  eventBtn: {
    backgroundColor: '#ea580c',
    paddingVertical: 8,
    borderRadius: 16,
    marginTop: 8
  },
  eventBtnDark: {
    backgroundColor: '#fbbf24'
  },
  eventBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  eventBtnTextDark: {
    color: '#1f2937'
  },
  testimonials: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  testimonialCard: {
    width: '90%',
    backgroundColor: '#f3f4f6',
    margin: 8,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center'
  },
  testimonialCardDark: {
    backgroundColor: '#374151'
  },
  testimonialQuote: {
    fontStyle: 'italic',
    color: '#374151',
    marginBottom: 8,
    textAlign: 'center'
  },
  testimonialQuoteDark: {
    color: '#e5e7eb'
  },
  testimonialName: {
    fontWeight: 'bold',
    color: '#ea580c'
  },
  testimonialNameDark: {
    color: '#fbbf24'
  },
  testimonialRole: {
    color: '#6b7280',
    fontSize: 12
  },
  testimonialRoleDark: {
    color: '#d1d5db'
  },
  ctaSection: {
    backgroundColor: '#ea580c',
    padding: 32,
    alignItems: 'center',
    marginTop: 32,
    borderRadius: 16,
    marginHorizontal: 16
  },
  ctaSectionDark: {
    backgroundColor: '#ea580c'
  },
  ctaTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  ctaTitleDark: {
    color: '#1f2937'
  },
  ctaSubtitle: {
    color: '#fff7ed',
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center'
  },
  ctaSubtitleDark: {
    color: '#1f2937'
  },
  ctaBtn: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24
  },
  ctaBtnDark: {
    backgroundColor: '#1f2937'
  },
  ctaBtnText: {
    fontWeight: 'bold'
  },
  ctaBtnTextDark: {
    color: '#ea580c'
  }
});