import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const schema = Yup.object({
    title: Yup.string().min(2).max(100).required('Required'),
    author: Yup.string().required('Required'),
    genre: Yup.string().oneOf(['fiction', 'non-fiction', 'tech']).required('Required'),
    rating: Yup.number().min(0).max(5).required('Required'),
});

const AddBook = () => {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ title: '', author: '', genre: '', rating: '' }}
            validationSchema={schema}
            onSubmit={values => {
                const books = JSON.parse(localStorage.getItem('books')) || [];
                const newBook = { ...values, id: Date.now() };
                localStorage.setItem('books', JSON.stringify([...books, newBook]));
                navigate('/Books');
            }}
        >
        <Form>
            <label>Title:</label>
            <Field name="title" />
            <ErrorMessage name="title" component="div" />

            <label>Author:</label>
            <Field name="author" />
            <ErrorMessage name="author" component="div" />

            <label>Genre:</label>
            <Field name="genre" as="select">
                <option value="">Select genre</option>
                <option value="fiction">Fiction</option>
                <option value="non-fiction">Non-fiction</option>
                <option value="tech">Tech</option>
            </Field>
            <ErrorMessage name="genre" component="div"/>

            <label>Rating:</label>
            <Field name="rating" step="0.1" type="number" />
            <ErrorMessage name="rating" component="div" />


            <button type="submit">Add Book</button>
        </Form>
        </Formik>
    );
};

export default AddBook;
