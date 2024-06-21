import React from 'react'
import PokeCard from './PokeCard'
import Loading from './Loading'
import NotFound from './NotFound'

const PokeList = ({ list }) => {
    if (!list) {
        return <Loading />
    }
    else if(!list.length){
        return <NotFound />
    }
    else {
        return <>
            {
                list.map((item) => {
                    return <PokeCard key={item.id} item={item} />
                })
            }
        </>

    }
}

export default PokeList