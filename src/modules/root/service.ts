import { request } from "$/plugins/request";

interface Info {
  title: string;
  payload: {
    results: Array<{
      name: string;
      hl_profile_bio: string;
    }>;
  };
}
export const getInfo = (params: { name: string }) => {
  return request.get<Info>(`/search?q=${params.name}&type=users`);
};
