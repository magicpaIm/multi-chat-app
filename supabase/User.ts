import supabase from '../utils/supabase';

const sign_up = async ({ email, password, username, avatar_url } : any) => {
  const user =  { email, password, username, avatar_url };
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username,
        avatar_url: avatar_url,
      },
    },
  });
  return {
    data,
    error,
  };
};

const sign_in = async ({ email, password }: any) => {
  const user = { email, password };
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return {
    data,
    error,
  };
};

/**
 *
 * @param username username
 * @returns schema {data: [{id, username}], error: error}
 */

const find = async (username: any) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, username')
    .eq('username', username);
  return {
    data,
    error,
  };
};

export default {
  sign_in,
  sign_up,
  find,
};
