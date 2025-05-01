import { Image, useWindowDimensions, Text, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Divider } from '../ui/divider';

import { Button, ButtonText } from '@/components/ui/button';
import { FormControl, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Input, InputField } from '@/components/ui/input';
import { VStack } from '@/components/ui/vstack';

export default function SignUp() {
  const { width } = useWindowDimensions();
  const { height } = useWindowDimensions();
  const isDesktop = width >= 768;

  const handleSubmit = () => {
    console.log('Form submitted');
  };
  return (
    <HStack className="flex min-h-screen w-full flex-col md:flex-row">
      {/* Left: Logo (desktop only) */}
      {isDesktop && (
        <VStack className="w-3/4 items-center justify-center bg-sky-800 p-8">
          <Image
            source={require('@/assets/logo.png')}
            style={{
              width: width * 0.7,
              height: height * 0.15,
              resizeMode: 'contain',
            }}
          />
        </VStack>
      )}

      {/* Right: Form */}
      <VStack
        className={`${
          isDesktop ? 'w-1/2' : 'w-full bg-sky-800'
        } min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-3 md:px-12`}>
        {/* Mobile Logo */}
        {!isDesktop && (
          <Image
            source={require('@/assets/logo.png')}
            style={{
              width: width * 0.75,
              height: width * 0.2,
              resizeMode: 'contain',
              marginBottom: 20,
            }}
          />
        )}

        <VStack
          style={{ width: isDesktop ? width * 0.4 : '100%' }}
          className="gap-y-5 rounded-2xl bg-white p-5 ">
          <Heading size="2xl" className="mb-2 text-center text-xl font-bold sm:text-2xl">
            Welcome to ACE Job Portal
          </Heading>

          {/* Form Fields */}
          <VStack className="min-w-4 gap-y-4">
            {/* Email */}
            <FormControl size="md">
              <FormControlLabel>
                <FormControlLabelText className="text-sm font-medium text-gray-700">
                  Email
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="mt-1 rounded-lg border-gray-200 bg-gray-50">
                <InputField type="text" placeholder="Enter your email" className="h-11 sm:h-12" />
              </Input>
            </FormControl>

            {/* Password */}
            <FormControl size="md">
              <FormControlLabel>
                <FormControlLabelText className="text-sm font-medium text-gray-700">
                  Password
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="mt-1 rounded-lg border-gray-200 bg-gray-50">
                <InputField
                  type="password"
                  placeholder="Create a password"
                  className="h-11 sm:h-12"
                  secureTextEntry
                />
              </Input>
            </FormControl>

            {/* Sign Up Button */}
            <Button
              className="h-11 w-full rounded-lg bg-sky-800 hover:bg-sky-900 active:bg-sky-900 sm:h-12"
              onPress={handleSubmit}>
              <ButtonText className="text-base font-semibold text-white sm:text-lg">
                Sign Up
              </ButtonText>
            </Button>

            {/* Divider */}
            <HStack className="my-2 items-center sm:my-3">
              <Divider className="flex-1 border-gray-300" />
              <Text className="mx-4 text-sm text-gray-500">or continue with</Text>
              <Divider className="flex-1 border-gray-300" />
            </HStack>

            {/* Social Buttons */}
            <HStack className="mb-2 w-full gap-4 sm:justify-center sm:gap-6 md:mb-5">
              <Button
                variant="outline"
                className="h-12 flex-1 items-center justify-center rounded-lg border border-gray-200"
                onPress={() => console.log('Google sign-up')}>
                <FontAwesome name="google" size={24} color="#000" />
              </Button>

              <Button
                variant="outline"
                className="h-12 flex-1 items-center justify-center rounded-lg border border-gray-200"
                onPress={() => console.log('LinkedIn sign-up')}>
                <FontAwesome name="linkedin" size={24} color="#000" />
              </Button>
            </HStack>

            {/* Sign In Link */}
            <Pressable className="mt-4">
              <Text className="text-center text-sm text-gray-500 sm:text-base">
                Already have an account? <Text className="font-semibold text-sky-800">Sign in</Text>
              </Text>
            </Pressable>
          </VStack>
        </VStack>
      </VStack>
    </HStack>
  );
}
