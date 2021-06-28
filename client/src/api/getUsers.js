const getUsers = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch("/users", requestOptions);
  const responseJSON = await response.json();
  console.log("All created users: ", responseJSON);
};

export default getUsers;
