import React, { memo, useState } from 'react';
import './index.css';
import ButtonShadow from '../../components/buttonShadow';

function FormCreate(Comp: any) {

    const GetFieldDec = (field: any, option: any) => {
        const [value, setValue] = useState<any>();

        const handleChange = (val: any) => {
            setValue(val)
        }

        return (InputComp: any) => {
            <div>
                {
                    React.cloneElement(InputComp, {
                        name: field,
                        value: value || '',
                        onChange: (val: any) => handleChange(val)
                    })
                }
            </div>
        }
    }


    return <Comp></Comp>
}


const TabComponent = memo(function Index(props) {

    return (
        <div>
            <input placeholder="请输入昵称" style={{ height: '40px' }} />
            <ButtonShadow />
        </div>
    )
})



export default TabComponent
