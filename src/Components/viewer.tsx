import { PDFViewer } from "@react-pdf/renderer";
import { type } from "@testing-library/user-event/dist/type";

import React from "react";
import DetailKing from "../Themes/detailKing";

type Props = {
  color: string;
  toolbar: boolean;
  cn: string;
};

const Viewer = ({ color, toolbar, cn }: Props) => {
  return (
    <div>
      <PDFViewer showToolbar={toolbar} className={cn}>
        <DetailKing color={color} />
      </PDFViewer>
    </div>
  );
};

export default Viewer;
