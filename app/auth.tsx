//import { useState, useRef } from 'react';
import { Dimensions, View } from 'react-native';
//import { TouchableOpacity, StyleSheet, Text} from 'react-native';
//import { useRouter} from 'expo-router';
//import * as LocalAuthentication from 'expo-local-authentication';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const {width} = Dimensions.get('window');
export default function AuthScreen() {
    return (
        <LinearGradient colors={["4CAF50", "2E7D32"]}>
            <View>
                <View>
                    <Ionicons name="medical" size={80} color="white" />
                </View>
            </View>
        </LinearGradient>
    )
}