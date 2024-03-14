import { Form, Formik, Field, ErrorMessage } from 'formik'; 
import * as Yup from 'yup';
import css from './SearchBar.module.css';

const validationSchema = Yup.object().shape({
   query: Yup.string().required('Поле пошуку не може бути порожнім')
});

export const SearchBar = ({onSearch}) => {
   return (
      <header className={css.headerBar}>
         <Formik
          initialValues={{ query: '' }}
           validationSchema={validationSchema}
            onSubmit={(values, actions) => {
            onSearch(values.query);
            actions.resetForm();
         }}>
            <Form className={css.formBar}>
               <div>
                  <Field className={css.inputBar} name='query' />
                  <button className={css.btnBar} type='submit'>Search</button>
               </div>
               <ErrorMessage name="query" component="div" className={css.error} />
            </Form>
         </Formik>
      </header>
   );
};
