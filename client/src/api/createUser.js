const createUser = async (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...user }),
  };
  return await fetch("/users", requestOptions);
};

export default createUser;
