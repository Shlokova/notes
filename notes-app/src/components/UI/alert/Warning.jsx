import React from 'react'
import MyButtons from '../buttons/MyButtons'
import MyModal from '../modal/MyModal'

const Warning = () => {
    return (
        <MyModal>
            <MyButtons>Да</MyButtons>
            <MyButtons>Нет</MyButtons>
        </MyModal>
    )
}

export default Warning
