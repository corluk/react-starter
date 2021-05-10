/* eslint-disable no-unused-expressions */

import supertest from "supertest";
import _Server from "../src/server/index";
import { expect } from "chai";

import dotenv from "dotenv";
import { resolve } from "path";

beforeAll(async () => {
  dotenv.config({
    path: resolve(__dirname, ".env"),
  });
});

afterAll(async () => {});
test("should server respond 200 ", async () => {
  const response = await supertest(_Server).get("/");
  const text = response.text;
  expect(text).contains("SSR");
  expect(response.statusCode).to.be.eq(200);
});
