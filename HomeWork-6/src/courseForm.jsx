import React from "react";  
import { useFormik } from "formik";
import * as Yup from "yup";

const CourseForm = () => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            course: "",
            gender: "",
            dateOfbirth: "",
            city: "",
            country: "",
            phone: "",
            education: "",
            address: "",
            state: "",
            zip: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Please enter your full name"),
            email: Yup.string().email("Invalid email address").required("Please enter your email"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password"),
            course: Yup.string().required("Please select a course"),
            gender: Yup.string().required("Please select a gender"),
            dateOfbirth: Yup.date().required("Please select your date of birth"),
            city: Yup.string().required("Please enter your city"),
            country: Yup.string().required("Please enter your country"),
            phone: Yup.string().required("Please enter your phone number"),
            education: Yup.string().required("Please enter your education"),
            address: Yup.string().required("Please enter your address"),
            state: Yup.string().required("Please enter your state"),
            zip: Yup.string().required("Please enter your zip code"),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} style={{alignItems: "center", maxWidth: 400, margin: "0 auto"}}>
            <h2 style={{ fontWeight: "bold" }}>Course Registration Form</h2>
            <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            {...formik.getFieldProps("fullname")}
            style={{ width: "100%", marginBottom: 5 }}
            />
                <div>{formik.touched.fullname && formik.errors.fullname && <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.fullname}</div>}</div>
            <input
            type="email"
            name="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
            style={{ width: "100%", marginBottom: 5 }}
            />
                {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.email}</div>
                ) : null}

            <input
            type="password"
            name="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
            style={{ width: "100%", marginBottom: 5 }}
            />
            {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.password}</div>
            ) : null}

            <div>
                <label>
                    <input
                    type="radio"
                    name="course"
                    value="A"
                    checked={formik.values.course === "A"}
                    onChange={formik.handleChange}
                    /> Course A
                </label>
                <label style={{ marginLeft: 10 }}>
                    <input
                    type="radio"
                    name="course"
                    value="B"
                    checked={formik.values.course === "B"}
                    onChange={formik.handleChange}
                    /> Course B
                </label>
                <label style={{ marginLeft: 10 }}>
                    <input
                    type="radio"    
                    name="course"
                    value="C"
                    checked={formik.values.course === "C"}
                    onChange={formik.handleChange}
                    /> Course C
                </label>
            </div>    
                {formik.touched.course && formik.errors.course ? (
                    <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.course}</div>
                ) : null}

            <div>
                <label>
                    <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formik.values.gender === "male"}
                    onChange={formik.handleChange}
                    /> Male
                </label>
                <label style={{ marginLeft: 10 }}>
                    <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formik.values.gender === "female"}
                    onChange={formik.handleChange}
                    /> Female
                </label>
            </div>
            { formik.touched.gender && formik.errors.gender ? (
                <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.gender}</div>
            ) : null}

            <input
            type="date"
            name="dateOfbirth"
            placeholder="Date of Birth"
            {...formik.getFieldProps("dateOfbirth")}
            style={{ width: "100%", marginBottom: 5 }}
            />
            {formik.touched.dateOfbirth && formik.errors.dateOfbirth ? (
                <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.dateOfbirth}</div>
            ) : null}
            <input
            type="text"
            name="city"
            placeholder="City"
            {...formik.getFieldProps("city")}
            style={{ width: "100%", marginBottom: 5 }}
            />
            {formik.touched.city && formik.errors.city ? (
                <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.city}</div>
            ) : null}
            <select
            name="country"
            {...formik.getFieldProps("country")}
            style={{ width: "100%", marginBottom: 5 }}
            >
                <option value="" label="Select country" />
                <option value="USA" label="USA" />
                <option value="Canada" label="Canada" />
                <option value="UK" label="UK" />
            </select>
            {formik.touched.country && formik.errors.country ? (
                <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.country}</div>
            ) : null}
            <input
            type="text"
            name="phone"
            placeholder="Phone"
            {...formik.getFieldProps("phone")}
            style={{ width: "100%", marginBottom: 5 }}
            />
            <select
            name="education"
            {...formik.getFieldProps("education")}
            style={{ width: "100%", marginBottom: 5 }}
            >
                <option value="" label="Select education level" />  
                <option value="highschool" label="High School" />
                <option value="bachelor" label="Bachelor's" />
                <option value="master" label="Master's" />
                <option value="phd" label="PhD" />
            </select>
            <textarea
                name="address"
                placeholder="Address"
                {...formik.getFieldProps("address")}
                style={{ width: "100%", marginBottom: 5 }}
            />
            <input
            type="text"
            name="state"
            placeholder="State"
            {...formik.getFieldProps("state")}
            style={{ width: "100%", marginBottom: 5 }}
            />
            <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            {...formik.getFieldProps("zip")}
            style={{ width: "100%", marginBottom: 5 }}
            />
            {formik.touched.zip && formik.errors.zip ? (
                <div style={{ color: "red", marginBottom: 5 }}>{formik.errors.zip}</div>
            ) : null}
            <button
            type="submit"
            style={{ width: "100%", background: "green", color: "white", padding: 10, border: "none", borderRadius: 4, fontWeight: "bold", marginTop: 10 }}
            >
                Submit
            </button>
            </form>
    );
};

export default CourseForm;