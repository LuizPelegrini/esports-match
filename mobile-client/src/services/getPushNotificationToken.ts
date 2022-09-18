import * as Notifications from 'expo-notifications';

export async function getPushNotificationToken () {
    // get app permissions for Notifcations
    const { granted } = await Notifications.getPermissionsAsync();

    // if notification permission is not granted, ask for it
    if(!granted){
        await Notifications.requestPermissionsAsync();
    }

    // if it's granted
    if(granted) {
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log(pushToken);

        return pushToken.data;
    }
}