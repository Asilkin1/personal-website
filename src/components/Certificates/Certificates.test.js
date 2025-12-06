import React from "react";
import { render, screen } from "@testing-library/react";
import Certificates from "./Certificates";
import certificatesData from "../../data/certificates.json";

describe("Certificates Component", () => {
  test("renders certificate items", () => {
    render(<Certificates />);

    certificatesData.forEach((certificate) => {
      expect(screen.getByText(certificate.name)).toBeInTheDocument();
      expect(
        screen.getByText(`Date Obtained: ${certificate.dateObtained}`),
      ).toBeInTheDocument();
      const image = screen.getByAltText(certificate.name);
      expect(image).toBeInTheDocument();
      expect(image.closest("a")).toHaveAttribute("href", certificate.imageLink);
    });
  });
});
