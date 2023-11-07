import React, { useEffect } from 'react'
import { useState } from 'react';

function useCustomValidation() {
    const [values, setValues] = useState({})
    const [errorName, setErorrName] = useState({})

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const errorHander = () => {
        setErorrName(formValidation(values))
    }
    const formValidation = (value) => {
        let error = {}
        if (!value.name) {
            error.name = 'Name should be Madetory'
        } if (!value?.email) {
            error.email = 'Email should be Madetory'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
            error.email = 'Invalid email address'
        }
        if (!value?.age) {
            error.age = 'Please enter age'
        }
        if (!value?.gender) {
            error.gender = 'Please Select gender'

        }

        return error;


    }
    return { values, setValues, handleChange, errorHander, errorName, setErorrName }

}

export default useCustomValidation