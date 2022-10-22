import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import DetailKing from "../Themes/detailKing";

const useView = ({}) => {
  //pdf viewer
  const [pdf, setPdf] = useState<JSX.Element | null>(null);

  const handlePdf = (pdf: JSX.Element) => {
    setPdf(pdf);
  };

  return {
    pdf,
    handlePdf,
  };
};

export default useView;
