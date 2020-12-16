export default function ListContent(props) {
    let listContent = props.contents.map(item => {
        <li></li>
    })
    return (
       <ul className="text-sm lg:text-lg xl:text-lg font-thin">
           {listContent}
       </ul> 
    );
}