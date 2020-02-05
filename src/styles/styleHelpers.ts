import { Platform } from 'react-native';
import { Colors } from './theme/colors';

interface TShadow {
  elevation?: number;
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  backgroundColor: string;
}

export const elevationShadowStyle: (elevation: number) => TShadow = elevation =>
  Platform.OS === 'ios'
    ? {
        elevation,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.5 * elevation },
        shadowOpacity: 0.3,
        shadowRadius: 0.8 * elevation,
        backgroundColor: Colors.WHITE,
      }
    : {
        elevation,
        backgroundColor: Colors.WHITE,
      };
