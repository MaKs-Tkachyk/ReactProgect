import s from './FormControls.module.css'
import React from 'react'

const TextArea = ({ input, meta, ...props }) => {

    const showError = meta.touched && meta.error

    return (<div className={s.formControl + " " + (showError ? s.error : " ")}>
            <div><textarea {...input} {...props} /></div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}


export default TextArea