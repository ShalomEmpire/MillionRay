import { router, useNavigationContainerRef } from 'expo-router';
import { useEffect, useState } from 'react';

export default function PreLoad() {
  const [navigationReady, setNavigationReady] = useState(false);
  const rootNavigation = useNavigationContainerRef();
  // TODO: Replace with authentication logic
  const isAuthenticated = true;

  useEffect(() => {
    const unsubscribe = rootNavigation?.addListener('state', () => {
      setNavigationReady(true);
    });

    return function cleanup() {
      if (unsubscribe) unsubscribe();
    };
  }, [rootNavigation]);

  useEffect(() => {
    if (!navigationReady) return;

    if (isAuthenticated) router.replace('/(auth)');
    // if (isAuthenticated) router.replace("/(drawer)/home/");
    else router.replace('/(auth)');
  }, [navigationReady]);
}
