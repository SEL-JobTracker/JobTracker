import { Button, ButtonText } from "@/components/ui/button";
import {
    FormControl,
    FormControlLabel,
    FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Image, useWindowDimensions, Text, Pressable } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Divider } from "../ui/divider";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function SignUp() {

    const { width } = useWindowDimensions();

    const handleSubmit = () => {
        console.log("Form submitted");
    };
    return (
        <HStack className="flex w-full min-h-screen">
            {/* Left: Logo (desktop only) */}
            <VStack className="w-1/2 bg-sky-800 items-center justify-center p-8">
                <Image
                    source={require("@/assets/ace_logo.png")}
                    style={{
                        width: width * 0.7,
                        height: width * 0.1,
                        resizeMode: "contain",
                    }}
                />
            </VStack>

            {/* Right: Form */}
            <VStack className="w-1/2 min-h-screen items-center justify-center px-12 sm:py-4  py-8"  >
                <VStack
                    style={{ width: 420 }}
                    className="gap-y-5 rounded-2xl bg-white px-5 py-3"
                >
                    <Heading
                        size="2xl"
                        className="text-center font-bold text-2xl mb-2"
                    >
                        Create Your Account
                    </Heading>

                    {/* Form */}
                    <VStack className="gap-y-4">
                        {/* Full Name */}
                        <FormControl size="md">
                            <FormControlLabel>
                                <FormControlLabelText className="text-sm font-medium text-gray-700">
                                    Full Name
                                </FormControlLabelText>
                            </FormControlLabel>
                            <Input className="bg-gray-50 rounded-lg border-gray-200 mt-1" size="md">
                                <InputField
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="h-12"
                                />
                            </Input>
                        </FormControl>

                        {/* Email */}
                        <FormControl size="md">
                            <FormControlLabel>
                                <FormControlLabelText className="text-sm font-medium text-gray-700">
                                    Email
                                </FormControlLabelText>
                            </FormControlLabel>
                            <Input className="bg-gray-50 rounded-lg border-gray-200 mt-1" size="md">
                                <InputField
                                    type="text"
                                    placeholder="Enter your email"
                                    className="h-12"
                                />
                            </Input>
                        </FormControl>

                        {/* Password */}
                        <FormControl size="md">
                            <FormControlLabel>
                                <FormControlLabelText className="text-sm font-medium text-gray-700">
                                    Password
                                </FormControlLabelText>
                            </FormControlLabel>
                            <Input className="bg-gray-50 rounded-lg border-gray-200 mt-1" size="md">
                                <InputField
                                    type="password"
                                    placeholder="Create a password"
                                    className="h-12"
                                    secureTextEntry
                                />
                            </Input>
                        </FormControl>

                        {/* Submit */}
                        <Button
                            className="w-full h-12 bg-sky-800 hover:bg-sky-900 active:bg-sky-900 rounded-lg"
                            onPress={handleSubmit}
                        >
                            <ButtonText className="text-white font-semibold text-lg">
                                Sign Up
                            </ButtonText>
                        </Button>


                        {/* Divider */}
                        <HStack className="items-center my-3">
                            <Divider className="flex-1 border-gray-300" />
                            <Text className="mx-4 text-sm text-gray-500">or continue with</Text>
                            <Divider className="flex-1 border-gray-300" />
                        </HStack>

                        {/* Social Buttons */}
                        <HStack className="w-full gap-6 justify-center mb-5">
                            <Button
                                variant="outline"
                                className="w-1/2 h-12 rounded-lg border border-gray-200 justify-center items-center"
                                onPress={() => console.log("Google sign-up")}
                            >
                                <FontAwesome name="google" size={24} color="#000" />
                            </Button>

                            <Button
                                variant="outline"
                                className="w-1/2 h-12 rounded-lg border border-gray-200 justify-center items-center"
                                onPress={() => console.log("LinkedIn sign-up")}
                            >
                                <FontAwesome name="linkedin" size={24} color="#000" />
                            </Button>
                        </HStack>

                        {/* Sign In link */}
                        <Pressable className="mt-4">
                            <Text className="text-center text-base text-gray-500">
                                Already have an account?{" "}
                                <Text className="text-sky-800 font-semibold">Sign in</Text>
                            </Text>
                        </Pressable>
                    </VStack>
                </VStack>
            </VStack>
        </HStack>


    )
}