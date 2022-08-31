import React, { useEffect, useState } from "react";
// import { PropTypes } from "prop-types";
import api from "../../../api";
import TextField from "../../common/form/textField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
// import { useHistory } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import { validator } from "../../../utils/validator";
import SelectField from "../../common/form/selectField";

const EditUserPage = () => {
    const { userId } = useParams();
    const history = useHistory();
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        profession: "",
        sex: "",
        qualities: []
    });
    const [professions, setProfession] = useState();
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState([]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен не корректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя обязательно к заполнению"
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        api.users
            .update(userId, {
                ...data,
                profession: getProfessionById(profession),
                qualities: getQualities(qualities)
            })
            .then((data) => history.push(`/users/${data._id}`));
    };
    const transformQual = (data) => {
        return data.map((qual) => ({ label: qual.name, value: qual._id }));
    };
    useEffect(() => {
        api.users.getById(userId).then(({ profession, qualities, ...data }) =>
            setData((prevState) => ({
                ...prevState,
                ...data,
                qualities: transformQual(qualities),
                profession: profession._id
            }))
        );
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                label: data[optionName].name,
                value: data[optionName]._id,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);
    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };
    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    useEffect(() => {
        validate();
    }, [data]);
    const isValid = Object.keys(errors).length === 0;
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Электронная почта"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            label="Имя"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <SelectField
                            defaultOption="Choose..."
                            onChange={handleChange}
                            name="profession"
                            options={professions}
                            error={errors.profession}
                            value={data.profession}
                            label="Выберите вашу профессию"
                        />
                        <RadioField
                            onChange={handleChange}
                            options={[
                                { name: "male", value: "male" },
                                { name: "female", value: "female" }
                            ]}
                            value={data.sex}
                            name="sex"
                            label="Выберите ваш пол"
                        />
                        <MultiSelectField
                            onChange={handleChange}
                            defaultValue={data.qualities}
                            options={qualities}
                            name="qualities"
                            label="Выберите ваши качества"
                        />
                        <button
                            className="btn btn-primary w-100 mx-auto"
                            type="submit"
                            disabled={!isValid}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
