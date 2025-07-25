import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import { useRouter} from 'expo-router';
//import * as LocalAuthentication from 'expo-local-authentication';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const {width} = Dimensions.get('window');
export default function AuthScreen() {

    const [hasBiometrics, setHasBiometrics] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [error, setError] = useState(null);

    return (
        <LinearGradient colors={["#4CAF50", "#2E7D32"]} style={styles.container}>
            <View>
                <View>
                    <Ionicons name="medical" size={80} color="white" />
                </View>
                <Text>
                    Medicine Tracker
                </Text>

                <Text>
                    Your Personal Medication Reminder
                </Text>

                <View>
                    <Text>
                        Welcome Back!
                    </Text>
                    <Text>
                        {hasBiometrics ?  "Use face/touch ID Or PIN" : "Enter your PIN"}
                    </Text>

                    <TouchableOpacity>
                        <Ionicons
                            name={hasBiometrics ? 
                                'finger-print-outline':'keypad-outline'
                            }
                            size={24}
                            color='white'
                        />
                        <Text>
                            { isAuthenticating 
                            ? "Verifying..." 
                            : hasBiometrics 
                            ? "Use Face/Touch ID" 
                            : "Enter PIN" }
                        </Text>
                    </TouchableOpacity>

                    {error && <View>
                        <Ionicons name ="alert-circle" size={20} color={"#f44336"}/>
                        <Text>{error}</Text>
                        </View>}
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})