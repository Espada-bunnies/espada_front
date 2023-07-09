import AuthPage from '@/app/[lang]/auth/[page]/AuthPage';
import { AuthLayout } from '@/components/layout/PageLayout';
import { getDictionary, Langs } from '@/dectionaries/translations';

interface AuthParams {
  params: {
    lang: Langs;
    page: string;
  };
}

const Auth = async ({ params }: AuthParams) => {
  const { authForm } = await getDictionary(params.lang);

  return (
    <AuthLayout>
      <AuthPage authForm={authForm} page={params.page} />
    </AuthLayout>
  );
};

export default Auth;
