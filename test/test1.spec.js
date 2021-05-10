/* eslint-disable no-unused-expressions */

import supertest from "supertest";
import _Server from "../src/server/index";
import { expect } from "chai";

import dotenv from "dotenv";
import { resolve } from "path";
import ReactRenderer from "react-test-renderer";
import React from "react";
import RootComponent from "../src/components/Root";
import TestComponent from "./TestComponent";
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
test("should react test renderer ", () => {
  const rendered = ReactRenderer.create(
    <RootComponent>
      <h1>Hello from test </h1>
    </RootComponent>
  );
  const renderJson = rendered.toJSON();
  expect(renderJson).not.undefined;
  expect(renderJson).not.null;

  expect(rendered).not.undefined;
});
