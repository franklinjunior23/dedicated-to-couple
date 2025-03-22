import { Message } from "../message";

export function handleCreateMessage({ name, message }: Message) {
  const url = window.location.origin;

  const nameQuery = `name=${name}`;
  const messageQuery = `message=${message}`;
  const urlQuery = `${url}/?${nameQuery}&${messageQuery}`;

  return urlQuery;
}
