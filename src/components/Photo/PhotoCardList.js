import React from 'react';
import Http from '../../libs/http';
import PhotoCard from './PhotoCard';

class PhotoCardList extends React.Component{
    state = {
        dogs:[],
        showFixed: true
    }

    onScroll = () => {
        const { showFixed } = this.state;
        const newShowFixed = window.screenY > 200;

        showFixed !== newShowFixed && this.setState({showFixed: newShowFixed})
    }

    async componentDidMount(){
        document.addEventListener("scroll",this.onScroll);
        await Http.instance
                .get("https://dog.ceo/api/breeds/image/random/20")
                .then(response => {
                    this.setState({dogs: response.data.message})
                })
                .catch(error => console.log("ERROR",error));
    }

    componentWillUnmount()
    {
        document.removeEventListener("scroll",this.onScroll);
    }


    render(){
        return(
            this.state.dogs.map(dog => <PhotoCard key={dog} src={dog}/>)
        )
    }
}

export default PhotoCardList;