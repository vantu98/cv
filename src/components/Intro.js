export default function Intro(props) {
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl xl:text-5xl font-thin text-gray-900 tracking-wide text-center uppercase mb-2">
        {props.data.name}
      </h1>
      <p
        id="role"
        className="text-2xl font-thin tracking-wider text-gray-800 uppercase text-center"
      >
        intern | fresher
      </p>
    </div>
  );
}
