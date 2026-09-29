import { expect, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll } from "vitest";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

beforeAll(() => {
  HTMLDialogElement.prototype.show = function () {
    this.setAttribute("open", "");
  };

  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };

  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
    this.dispatchEvent(new Event("close"));
  };
});

expect.extend(matchers);
