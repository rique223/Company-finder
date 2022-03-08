const encode = (value: string) => {
  return btoa(encodeURIComponent(value));
};

const decode = (value: string) => {
  return decodeURIComponent(atob(value));
};

export default { encode, decode };