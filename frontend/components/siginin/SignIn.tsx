import { useState } from 'react';
import { Platform, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Divider } from '../ui/divider';

import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const logo = require('@/assets/logo.png');

const SignIn = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const screenWidth = Dimensions.get('window').width;
  const isDesktop = Platform.OS === 'web' && screenWidth >= 768;

  return (
    <>
      {isDesktop ? (
        <HStack className="h-screen w-full">
          <Box className="w-1/2 items-center justify-center bg-sky-800">
            <Image source={logo} alt="Logo" className="h-48 w-3/4" resizeMode="contain" />
          </Box>

          <Box className="w-1/2 items-center justify-center p-6">
            <VStack className="h-full w-full max-w-md justify-center">
              <Heading size="2xl" className="mb-8">
                Welcome to ACE Job Portal
              </Heading>

              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText>Email</FormControlLabelText>
                </FormControlLabel>
                <Input className="mb-3">
                  <InputField
                    type="text"
                    placeholder="email"
                    value={inputValue}
                    onChangeText={(text) => {
                      setInputValue(text);
                    }}
                  />
                </Input>
              </FormControl>

              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText>Password</FormControlLabelText>
                </FormControlLabel>
                <Input className="mb-3">
                  <InputField
                    type="password"
                    placeholder="password"
                    value={passwordValue}
                    onChangeText={(text) => {
                      setPasswordValue(text);
                    }}
                    secureTextEntry
                  />
                </Input>
              </FormControl>

              <Button className="rounded-xl bg-sky-700">
                <ButtonText className="text-white">Sign In</ButtonText>
              </Button>
              <HStack className="my-4 items-center justify-between">
                <Divider className="flex-1" />
                <Text className="mx-3 text-sm text-slate-500">Or Continue With</Text>
                <Divider className="flex-1" />
              </HStack>

              <HStack className="mb-4 justify-center space-x-6">
                <Button
                  variant="outline"
                  className="w-1/3 rounded-xl border border-slate-300 bg-white p-3"
                  onPress={() => console.log('Google Sign-In')}>
                  <FontAwesome name="google" size={24} />
                </Button>
                <Button
                  variant="outline"
                  className="w-1/3 rounded-xl border border-slate-300 bg-white p-3"
                  onPress={() => console.log('LinkedIn Sign-In')}>
                  <AntDesign name="linkedin-square" size={24} />
                </Button>
              </HStack>
              <HStack className="mt-4 items-center justify-center text-lg">
                <Text className="text-sm text-slate-500">Don't have an account?</Text>
                <Button
                  variant="link"
                  onPress={() => console.log('Navigate to Sign Up')}
                  className="ml-2">
                  <Text className="text-sm font-semibold text-sky-700">Sign Up</Text>
                </Button>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      ) : (
        <Text className="text-center text-lg font-bold">
          Please use a desktop browser to access this page.
        </Text>
      )}
    </>
  );
};

export default SignIn;
