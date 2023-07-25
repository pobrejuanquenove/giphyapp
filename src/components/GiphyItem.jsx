export const GiphyItem = ({title, url}) => {
    console.log(title, url);
    return <div className='card'><img src={url} /><p>{title}</p></div>;
}