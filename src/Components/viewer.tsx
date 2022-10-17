import { PDFViewer } from "@react-pdf/renderer";
import DetailKing from "../Themes/detailKing";
import Obukhov from "../Themes/obukhov";
type Props = {
  color?: string;
  toolbar: boolean;
  cn: string;
};

const Viewer = ({ color, toolbar, cn }: Props) => {
  return (
    <div>
      <PDFViewer showToolbar={toolbar} className={cn}>
        {/* <DetailKing color={color} /> */}
        <Obukhov />
      </PDFViewer>
    </div>
  );
};

export default Viewer;
