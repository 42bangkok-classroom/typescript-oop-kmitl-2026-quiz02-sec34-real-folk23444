import axios from "axios";

interface getfilter {
  id: number;
  name: string;
  phone: string
  address: string;
}

export async function filterUserById(id: getfilter | null) {
try {
const response = await axios.get("https://jsonplaceholder.typicode.com/users");
const foundUser = user.find((user) => user.id === id);
return {
  id: foundUser.id,
  name: foundUser.name ?? null,
  phone: foundUser.phone ?? null,
  address: foundUser.address ?? null,
};
};
}
