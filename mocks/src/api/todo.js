import axios from "axios";
import {  AxiosMock } from "../mocks";
import todos from "../mocks/todos/todos.json"
AxiosMock.onGet("/").reply(200, {
    users: todos,
  });

export const todoGetApi = axios.get("/")