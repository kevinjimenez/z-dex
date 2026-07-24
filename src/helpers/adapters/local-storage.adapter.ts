import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export class LocalStorageAdapter {
  static async setItem(key: string, value: string | object) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      Alert.alert('Error', 'Failed to save data');
    }
  }

  static async getItem<T>(key: string): Promise<T | string | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value == null) return null;

      try {
        return JSON.parse(value) as T;
      } catch {
        return value;
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to get data');
      return null;
    }
  }

  static async deleteItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      Alert.alert('Error', 'Failed to delete data');
      return null;
    }
  }
}
