import { Form, Formik, Field, ErrorMessage } from 'formik'; // Додайте імпорт для ErrorMessage
import * as Yup from 'yup';
import css from './SearchBar.module.css';

const validationSchema = Yup.object().shape({
   query: Yup.string().required('Поле пошуку не може бути порожнім')
});

export const SearchBar = ({onSearch}) => {
   return (
      <header className={css.headerBar}>
         <Formik initialValues={{query: ''}} validationSchema={validationSchema} onSubmit={(values, actions) => {
            console.log(values);
            onSearch(values.query);
            actions.resetForm();
         }}>
            <Form>
               <Field name='query' />
               <button type='submit'>Search</button>
               <ErrorMessage name="query" component="div" className="error" /> {/* Додано ErrorMessage */}
            </Form>
         </Formik>
      </header>
   );
};
