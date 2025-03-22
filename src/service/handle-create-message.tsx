import { Message } from "../message";

export function handleCreateMessage({ name, message }: Message) {
  const url = window.location.origin;

  const nameQuery = `name=${encodeURIComponent(name)}`;
  const messageQuery = `message=${encodeURIComponent(message)}`;
  const urlQuery = `${url}/?${nameQuery}&${messageQuery}`.replace(/%/g, "%25");
  return urlQuery;
}
