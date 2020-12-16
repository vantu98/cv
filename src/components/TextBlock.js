import TextTitle from "./TextTitle";
import TextContent from "./TextContent";
export default (props) => {
  return (
    <div className="p-4 bg-blue-100">
      <TextTitle title={props.title} />
      <TextContent content={props.content} />
    </div>
  );
};
