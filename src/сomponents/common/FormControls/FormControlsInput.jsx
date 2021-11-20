import s from './FormControls.module.css'
import React from 'react'

const Input = ({ input, meta, ...props }) => {

    const showError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (showError ? s.error : " ")}>
            <div><input {...input} {...props} /></div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export default Input