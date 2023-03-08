import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { PERMISSIONS , request } from 'react-native-permissions';

const App = () => {
  const [permissionStatus, setPermissionStatus] = useState('');

  const requestCameraPermission = () => {
    request(PERMISSIONS.IOS.CAMERA).then((response: any) => {
      setPermissionStatus(response);
    });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{permissionStatus}</Text>
      <Button title="Request Camera Permission" onPress={requestCameraPermission} />
    </View>
  );
};

export default App;
