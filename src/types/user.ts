export type UserState = {
  user: {
    username: string;
    status: string;
    position?: {
      latitude: number;
      longitude: number;
    };
    address: string;
    error: string;
  };
};
