import avatar from '../../../assets/default-avatar.svg';

const Person = ({name, nickName = 'Default Joe', images}) => {

    const img = images?.[0]?.small?.url || avatar;
    // const img = images?.[0]?.small?.url ?? avatar;

    return (
        <div style={{margin:'3rem 2rem', background:'#fff', borderRadius:'1rem', padding:'0.5rem 0'}}>
            {/* {images && images.map(image => (<img style={{maxWidth:'50px'}} src={image.small.url} alt={name} />))} */}
            <img src={img} alt={name} style={{maxWidth: '50px'}} />
            <h4 style={{marginBottom:'0'}}>{name}</h4>
            <h5 style={{marginBottom:'0'}}>{nickName}</h5>
        </div>
    );
}

export default Person;