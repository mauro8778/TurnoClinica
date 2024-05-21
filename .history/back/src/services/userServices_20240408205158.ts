import iUsers from "../interface/iUsers"

const users:iUsers[]=[];

export const getUserServices=async():Promise<iUsers[]>=>{

const allUsers: iUsers[]=users;

return allUsers;
}