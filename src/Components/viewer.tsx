import { PDFViewer } from "@react-pdf/renderer";
import DetailKing from "../Themes/detailKing";
import Obukhov from "../Themes/obukhov";

type Props = {
  color?: string;
  toolbar: boolean;
  cn: string;
  theme: string;
};

const Viewer = ({ color, toolbar, cn, theme }: Props) => {
  return (
    <div>
      <PDFViewer showToolbar={toolbar} className={cn}>
        {theme === "detailKing" ? (
          <DetailKing color={color} />
        ) : (
          <Obukhov color={color} />
        )}
      </PDFViewer>
    </div>
  );
};

export default Viewer;
