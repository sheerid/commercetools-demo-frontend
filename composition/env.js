const getEnv = (env) => {
    return typeof global?.Cypress?.env === 'function'
      ? global.Cypress.env(env)
      : process.env[env];
  };
export default getEnv;  