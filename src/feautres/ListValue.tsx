import React from 'react'
import { ContainerListValue, InfoText } from './MenuStyle'

const ListValue = ({value}:any) => {

    return(
        <ContainerListValue>
            <InfoText>{value}</InfoText>
        </ContainerListValue>
    )

}

export default ListValue;