import Image from 'next/image';
import AuthForm from '../components/AuthForm';

export default function Home() {
  //* Landing page that shows an AuthForm Component to handle the login/register
  return (
    <div className="flex min-h-full flex-col justify-center py-10 sm:px-6 lg:px-4 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          src="/images/chaxt.png"
          height="100"
          width="100"
          className="w-auto mx-auto rounded-lg"
        />

        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-gray-900">
          Login to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
