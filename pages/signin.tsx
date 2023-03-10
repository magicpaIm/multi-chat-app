import { Button } from '@supabase/ui';
import UserService from '../supabase/User';

const SignIn = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    if (
      typeof email !== 'string' ||
      typeof password !== 'string') {
      return;
    }
    const user = {
      email,
      password
    }
    const response = await UserService.sign_in(user);
    console.log(response);

  };
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl justify-center items-center ">
      <form className="w-full max-w-sm space-y-2" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="email"
              name="email"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="password"
              name="password"
              type="password"
            />
          </div>
        </div>
        <div className="md:flex md:justify-end">
          <div className="">
            <Button type="primary" htmlType="submit" size="medium">
              {' '}
              Sign In
            </Button>
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default SignIn;
