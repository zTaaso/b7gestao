import { Alert, AlertButton, AlertOptions } from 'react-native';

export default async function asyncBoolAlert(
  title: string,
  message: string,
  buttons: (AlertButton & { returnTrue?: boolean })[],
  options?: AlertOptions
): Promise<boolean> {
  const alertPromise: Promise<boolean> = new Promise((resolve) => {
    const buttonsWithResolve = buttons.map((button) => ({
      ...button,
      onPress: () => resolve(!!button.returnTrue),
    }));

    Alert.alert(title, message, buttonsWithResolve, {
      cancelable: true,
      onDismiss: () => resolve(false),
      ...options,
    });
  });

  return alertPromise;
}
