export default function Header(props) {
    return (
        <header className="w-full relative">
            <div className="w-full h-64 bg-red-400 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${props.data.cover_img})` }}></div>
            <div className="w-full rounded-full absolute -bottom-1/4">
                <div className="w-64 mx-auto">
                    <img className="w-full rounded-full p-1 border bg-white" src={props.data.avatar} alt="avatar" />
                </div>
            </div>
        </header>
    );
}