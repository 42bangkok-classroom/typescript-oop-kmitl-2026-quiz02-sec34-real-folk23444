import axios from "axios";

type UserResponse = {
  id: number;
  name: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export async function filterUserById(id: number):
Promise<UserResponse[]>
{
try {
const response = await axios.get("https://jsonplaceholder.typicode.com/users");
const foundUser = response.find((user:number) => user.id === id);

if (!foundUser){
return "Invalid id";
}

return {
  id: foundUser.id,
  name: foundUser.name ?? null,
  phone: foundUser.phone ?? null,
  address: foundUser.address ?? null,
};
catch{
return "Invalid id"
};
};
}
