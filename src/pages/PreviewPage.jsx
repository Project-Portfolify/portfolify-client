import { useParams } from "react-router-dom";
import { Templates } from "../constants";
import AtomTheme from "../templates/AtomTheme";

const dummyData = {};

const PreviewPage = () => {
  const { templateId } = useParams();

  //   switch (templateId) {
  //     case Templates.AtomTheme:
  //       return <AtomTheme data={dummyData} />;
  //   }

  return <h1>preview</h1>;
};
export default PreviewPage;
