import axios from "axios";

type Address = {
  street: string | null;
  suite: string | null;
  city: string | null;
  zipcode: string | null;
  geo: {
    lat: string | null;
    lng: string | null;
  } | null;
};

type newUser = {
  name: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  } | null;
  phone: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type UserResponse = {
  id: number;
  name: string | null;
  phone: string | null;
  address: Address | null;
};

export async function addUser(
  newUserData: newUser
): Promise<UserResponse[]> {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users: UserResponse[] = response.data.map((user: any) => ({
      id: user.id,
      name: user.name ?? null,
      phone: user.phone ?? null,
      address: user.address ?? null,
    }));

    // ✅ กรณี newUser เป็น null
    if (newUserData === null) {
      return users;
    }

    const lastId = users[users.length - 1].id;

    const newUser: UserResponse = {
      id: lastId + 1,
      name: newUserData.name ?? null,
      phone: newUserData.phone ?? null,
      address: newUserData.address ?? null,
    };

    return [...users, newUser];
  } catch {
    return [];
  }
}

