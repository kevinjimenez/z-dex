import {
  LoginFormValues,
  validateLogin,
} from '@/features/auth/schemas/login.schema';
import { useAuthStore } from '@/features/auth/store/useAuth';
import GoogleSignInButtonCustom from '@/shared/components/common/GoogleSignInButtonCustom';
import BaseButton from '@/shared/components/ui/BaseButton';
import BaseDivider from '@/shared/components/ui/BaseDivider';
import BaseInput from '@/shared/components/ui/BaseInput';
import { Redirect } from 'expo-router';
import { Formik } from 'formik';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  const { user, signIn } = useAuthStore();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async ({ username }: LoginFormValues) => {
    await signIn(username);
  };

  if (user) return <Redirect href="/character" />;

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{ paddingHorizontal: 40 }}
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-surface-primary"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="items-center justify-center gap-y-6"
          style={{ paddingTop: height * 0.1 }}
        >
          <View className="size-24 bg-ink-terceary rounded-full" />
          <View className="flex-col items-center justify-center">
            <Text className="uppercase text-ink-primary text-4xl font-oswald-semibold">
              z-dex
            </Text>
            <Text className="text-ink-secondary">
              Tu enciclopedia del universo Z
            </Text>
          </View>
        </View>

        <View className="flex-1" />

        <Formik
          initialValues={{ username: '', password: '' }}
          validate={validateLogin}
          onSubmit={onSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <View className="flex-col gap-y-4 mt-2">
              <>
                <BaseInput
                  prefixIcon="user"
                  placeholder="username"
                  placeholderTextColor="#a6aeb6"
                  size={18}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                />
                {touched.username && errors.username && (
                  <Text className="text-ink-terceary text-sm">
                    {errors.username}
                  </Text>
                )}
              </>

              <>
                <BaseInput
                  prefixIcon="lock"
                  placeholder="password"
                  placeholderTextColor="#a6aeb6"
                  size={18}
                  value={values.password}
                  secureTextEntry={!showPassword}
                  suffixIcon={showPassword ? 'eye-off' : 'eye'}
                  // onSuffixIconPress={() => setShowPassword((prev) => !prev)}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {touched.password && errors.password && (
                  <Text className="text-ink-terceary text-sm">
                    {errors.password}
                  </Text>
                )}
              </>
              <BaseButton text="ENTRAR" onPress={() => handleSubmit()} />
            </View>
          )}
        </Formik>

        <View className="flex flex-row justify-center items-center my-5 gap-x-2 self-center">
          <BaseDivider customClass="bg-muted-primary-200 w-40" />
          <View className="rounded-full border size-2 border-bagde-primary-400" />
          <BaseDivider customClass="bg-muted-primary-200 w-40" />
        </View>

        <View
          className="flex flex-col items-center justify-center gap-y-8"
          style={{ paddingBottom: height * 0.05 }}
        >
          <GoogleSignInButtonCustom />

          <Pressable onPress={() => signIn('Guerrero Z')}>
            <Text
              className="text-ink-terceary text-base font-oswald-semibold uppercase"
              style={{ letterSpacing: 1 }}
            >
              Continua como invitado
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
