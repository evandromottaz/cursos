// Serve para dizer ao TypeScript qual a typagem do objeto de maneira estática.

type UserResponse = {
  id:number;
  name:string;
  avatar:string;
}

const userResponse = {} as UserResponse;
userResponse.id
